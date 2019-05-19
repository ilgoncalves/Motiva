import { call, put, takeEvery, select } from 'redux-saga/effects'
import { StackActions, NavigationActions } from 'react-navigation'
// impot
import firebase from 'react-native-firebase'
import { firebaseGet, firebaseAdd, firebaseEdit, firebaseDelete, firebaseGetById, firebaseGetPhotoByPath, firebaseSetPhoto } from '@services/FirebaseServices'


// function* login({ payload }) {
//     // yield put({
//     //     type: 'USER_SET_LOADING',
//     //     payload: true
//     // })


    try {
        const auth = yield firebase.auth()
            .signInWithEmailAndPassword('lima-igor@hotmail.com', '123123');

        if (auth) {
        console.log('[USERS_LOGIN_TRIGGER RESPONSE]', auth)

            // yield put({
            //     type: 'USER_SET_LOADING',
            //     payload: false
            // });

//     try {
//         const auth = yield firebase.auth()
//             .signInWithEmailAndPassword('lima-igor@hotmail.com', '123123');


//         if (auth) {
//             console.log('[USERS_LOGIN_TRIGGER RESPONSE]', auth)

//             // yield put({
//             //     type: 'USER_SET_LOADING',
//             //     payload: false
//             // });

//             // Get user info
//             // yield put({
//             //     type: 'USER_GET_USER_INFO_TRIGGER',
//             //     payload: {
//             //         id: auth.user.uid
//             //     }
//             // });

//             // yield put(NavigationActions.navigate({
//             //     index: 0,
//             //     routeName: 'Main'
//             // }))
//         }
//     } catch ({ message, error }) {
//         // yield put({
//         //     type: 'USER_SET_LOADING',
//         //     payload: false
//         // });
//         console.warn('[USERS_LOGIN_TRIGGER ERROR]', { message, error })

//     }
// }

function* getUsers() {
    try {
        yield put({
            type:'USER_SET_LOADING',
            payload:true
        })
        
        let firePayload = {
            collection: 'users',
            where: [
                [],
            ]
        }

        let response = yield firebaseGet(firePayload)
        console.log('[GET_USERS_TRIGGER RESPONSE]', response)

        if (response) {
            let aux = yield [].concat(response)
            yield aux.sort((a, b) => {
                return b.current_score - a.current_score
            })
            console.log(aux)
            yield put({
                type:'USER_SET_USERS_SORTED',
                payload:aux
            })
            yield put({
                type:'USER_SET_LOADING',
                payload:false
            })

        }

    } catch ({ message, error }) {
        yield put({
            type:'USER_SET_LOADING',
            payload:false
        })
        console.warn('[USERS_SAGA ERROR]', { message, error })
    }
}

export default function* rootUser() {
    yield takeEvery('GET_USERS_TRIGGER', getUsers)
}
