import { call, put, takeEvery, select } from 'redux-saga/effects'
import { StackActions, NavigationActions } from 'react-navigation'

import firebase from 'react-native-firebase'
import { firebaseGet, firebaseAdd, firebaseEdit, firebaseDelete, firebaseGetById, firebaseGetPhotoByPath, firebaseSetPhoto } from '@services/FirebaseServices'



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
}
