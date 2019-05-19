import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

// Helpers
import { convertToBytes } from '@helpers/hardware';

// Constants
import IMAGES from '@constants/images';
import COLORS from '@constants/colors'

class Commands extends Component {
    state = {
        active: false,
        device: null,
        sendingCommand: false,
    }

    sendCommand = (command, fromCallback = false) => {
        if (!this.props.active || this.state.sendingCommand) return;

        // const { device } = this.state;
        const { device } = this.props
        const { uuid, characteristics } = this.props;
        const originalCommand = command;

        // In case of turning motor on/off, send command 25 (int)
        if ([3, 4].indexOf(command) >= 0 && !fromCallback) {
            command = 25;
        }

        console.log('[COMMANDS - SEND > DEVICE]', device, command, originalCommand)
        console.log('[COMMANDS - SEND > uuid, characteristics]', { uuid, characteristics })

        this.props.manager
            .writeCharacteristicWithoutResponseForDevice(
                device.id,
                uuid,
                characteristics,
                convertToBytes(command)
            )
            .then((data) => {
                console.log('[COMMANDS > SEND THEN > DATA]', data)
                
                // In case of turning motor on/off, prevent command block and show dialog (overlay)
                if ([3, 4].indexOf(originalCommand) >= 0 && !fromCallback) {
                    // Get command TEXT
                    const commandText = originalCommand == 3 ? 'Ligar' : 'Desligar';

                    this.setState({ sendingCommand: true })
                    this.props.getSendingCommand(true);

                    setTimeout(() => {
                        this.setState({ sendingCommand: false })
                        this.props.getSendingCommand(false);

                        // Command confirm send
                        this.props.onCommandConfirmSend(
                            () => this.sendCommand(originalCommand, true),
                            commandText
                        );
                    }, 2000)
                    
                } else {
                    this.setState({ sendingCommand: true })
                    this.props.getSendingCommand(true)

                    setTimeout(() => {
                        this.setState({ sendingCommand: false })
                        this.props.getSendingCommand(false)
                    }, 7000)
                }
            })
    }

    // static getDerivedStateFromProps (props, state) {
    //     // state.active = (props.device != null);
    //     state.device = props.device;

    //     return state;
    // }

    render() {
        // const { device } = this.state;
        const { sendingCommand } = this.state
        const { device, active } = this.props
        const boxState = (!active || sendingCommand) ? { backgroundColor: `${COLORS.PRIMARY}50` } : { backgroundColor: COLORS.PRIMARY };

        return (
            <View style={styles.container}>
                <View style={{
                    flex: 1,
                    marginRight: 8
                }}>
                    <TouchableOpacity
                        activeOpacity={device == null ? 1 : 0.8}
                        onPress={() => this.sendCommand(parseInt(1))}
                        style={[styles.box, styles.boxUpper, boxState]}>
                        <Image source={IMAGES.COMMAND_UNLOCK} style={styles.boxImage} />
                        <Text style={styles.text}>Destravar portas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={device == null ? 1 : 0.8}
                        onPress={() => this.sendCommand(2)}
                        style={[styles.box, styles.boxBottom, boxState]}>
                        <Image source={IMAGES.COMMAND_LOCK} style={styles.boxImage} />
                        <Text style={styles.text}>Travar portas</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 1,
                }}>
                    <TouchableOpacity
                        activeOpacity={device == null ? 1 : 0.8}
                        onPress={() => this.sendCommand(3)}
                        style={[styles.box, styles.boxUpper, boxState]}>
                        <Image source={IMAGES.COMMAND_ENGINE} style={styles.boxImage} />
                        <Text style={styles.text}>Ligar motor</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={device == null ? 1 : 0.8}
                        onPress={() => this.sendCommand(4)}
                        style={[styles.box, styles.boxBottom, boxState]}>
                        <Image source={IMAGES.COMMAND_ENGINE} style={styles.boxImage} />
                        <Text style={styles.text}>Desligar motor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Commands;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8
    },
    box: {
        backgroundColor: '#A9D40B',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        // width: 128
    },
    boxImage: {
        width: 24,
        height: 24,
        marginVertical: 16
    },
    boxUpper: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF10'
    },
    boxBottom: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    text: {
        fontSize: 12
    }
});
