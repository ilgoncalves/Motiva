import { call, put, takeEvery, select } from 'redux-saga/effects'
import { StackActions, NavigationActions } from 'react-navigation'
// impot
import firebase from 'react-native-firebase'
import { firebaseGet, firebaseAdd, firebaseEdit, firebaseDelete, firebaseGetById, firebaseGetPhotoByPath, firebaseSetPhoto } from '@services/FirebaseServices'


function* login({ payload }) {
    // yield put({
    //     type: 'USER_SET_LOADING',
    //     payload: true
    // })

    try {
        const auth = yield firebase.auth()
            .signInWithEmailAndPassword('lima-igor@hotmail.com', '123123');

        if (auth) {
        console.log('[USERS_LOGIN_TRIGGER RESPONSE]', auth)

            // yield put({
            //     type: 'USER_SET_LOADING',
            //     payload: false
            // });

            // Get user info
            // yield put({
            //     type: 'USER_GET_USER_INFO_TRIGGER',
            //     payload: {
            //         id: auth.user.uid
            //     }
            // });

            // yield put(NavigationActions.navigate({
            //     index: 0,
            //     routeName: 'Main'
            // }))
        }
    } catch ({ message, error }) {
        // yield put({
        //     type: 'USER_SET_LOADING',
        //     payload: false
        // });
        console.warn('[USERS_LOGIN_TRIGGER ERROR]', { message, error })

    }
}

function* alo({payload}) {

    console.log('PAYLOAD ON SAGA >>> ',payload.password, payload.email);

    try {
        let firePayload = {
            collection: 'users',
            where: [
                [],
            ]
        }

        let response = yield firebaseGet(firePayload)
        console.log('[USERS_SAGA RESPONSE]', response)

    } catch ({ message, error }) {
        console.warn('[USERS_SAGA ERROR]', { message, error })
    }
}

export default function* rootUser() {
    yield takeEvery('TEST_TRIGGER', alo)
    yield takeEvery('USERS_LOGIN_TRIGGER', login)
}
