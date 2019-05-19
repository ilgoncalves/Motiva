import firebase from 'react-native-firebase'
import {
  isString,
  isArray,
} from 'lodash';

const moment = require('moment')

export function firebaseGetTimestamp(date) {
    let newDate = new Date()

    if(date)
        newDate = new Date(moment(date).toISOString())

    return newDate = new firebase.firestore.Timestamp.fromDate(newDate)
}

export function firebaseGetById({ collection, uid, ...payload }) {
  let data = firebase.firestore()
    .collection(collection).doc(uid);

  return data.get()
    .then(result => result.data())
    .catch(e => console.warn('[error]', e))

}

export function firebaseSetPhoto({ path, collection, uri }) {
  let storage = firebase.storage().ref(collection)
  storage = addChildToRef(storage, path)

  return storage.putFile(uri)
    .then(i => {
      return i
    })
    .catch(e => console.warn('[error]', e))
}

export function firebaseGetPhotoByPath({ path, ...payload }) {
  let photoRef = firebase.storage().ref(path);

  return photoRef.getDownloadURL()
    .then(i => {
      return i
    })
    .catch(e => console.warn('[error]', e))
}

export function firebaseGet({ collection, where, orderBy, orderDirection, startAt, endAt, limit, ...payload }) {
    let data = firebase.firestore()
    .collection(collection)

    if (where)
        data = addWhereToRef(data, where)

    if (orderBy) {
        if(orderDirection) {
            data = data.orderBy(orderBy, orderDirection)
        } else {
            data = data.orderBy(orderBy)
        }
    }

    if (startAt) {
        data = data.startAt(startAt)
    }

    if (endAt) {
        data = data.endAt(endAt)
    }

    if (limit) {
        data = data.limit(limit)
    }

  return data
    .get()
    .then(result => {
      console.log('RESULST >>> ', result);
      return result.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
    })
    .catch(e => {
      console.warn('[error]', e)
      return { error: e }
    })
}

export function firebaseAdd({ collection, params, ...payload }) {
  return firebase.firestore()
    .collection(collection)
    .add(params)
    .then(result => {
        if(result.id)
            return {
              uid: result.id,
              ...params
            };

        return false
    })
    .catch(e => {
      console.warn('[error]', e)
      return { error: e }
    })
}

export function firebaseEdit({ uid, collection, params, ...payload }) {

  const ref = firebase
    .firestore()
    .collection(collection)
    .doc(uid)

  return firebase
    .firestore()
    .runTransaction(async transaction => {
      const doc = await transaction.get(ref);

      if (doc.exists == false) {
        return Promise.reject(new Error('not found'));
      }

      transaction.update(ref, params)

      return {
        ...doc.data(),
        ...params
      };
    })
    .then(response => {
      return response
    })
    .catch(error => {
      console.warn('Transaction failed: ', error);
    });
}


export function firebaseDelete({ uid, collection }) {

  const ref = firebase
    .firestore()
    .collection(collection)
    .doc(uid)

  return firebase
    .firestore()
    .runTransaction(async transaction => {
      const doc = await transaction.get(ref);

      if (doc.exists == false) {
        return Promise.reject(new Error('not found'));
      }

      transaction.update(ref, { active: false })

      return {
        ...doc.data(),
        ...params
      };
    })
    .then(response => {
      return response
    })
    .catch(error => {
      console.warn('Transaction failed: ', error);
    });
}

export function firebaseDefinitiveDelete({ uid, collection }) {
  let validate = false
  const ref = firebase
    .firestore()
    .collection(collection)
    .doc(uid)

  return firebase
    .firestore()
    .runTransaction(async transaction => {
      const doc = await transaction.get(ref);

      if (doc.exists == false) {
        return Promise.reject(new Error('not found'));
      }

      transaction.delete(ref)
      return true
    })
    .then(response => {
      return response
    })
    .catch(error => {
      console.warn('Transaction failed: ', error);
    });
}

function addWhereToRef(ref, where) {
  if (!isArray(where)) {
    throw new Error('where parameter must be an array.');
  }
  if (isString(where[0])) {
    return where.length > 1 ? ref.where(...where) : ref.where(where[0]);
  }

  return where.reduce((acc, whereArgs) => addWhereToRef(acc, whereArgs), ref);
}

function addChildToRef(ref, child) {
  if (!isArray(child)) {
    throw new Error('child parameter must be an array.');
  }
  if (isString(child[0])) {
    return child.length > 1 ? ref.child(...child) : ref.child(child[0]);
  }
  return child.reduce((acc, childArgs) => addChildToRef(acc, childArgs), ref);
}

// =============== EDIT ===============
//
// let firePayload = {
//   uid: 'icvSeaGJXRD1UjSS7aLA',
//   collection: 'profile',
//   params: {
//     name: 'NEW EDIT HEUHEUEEHUEHEU'
//   }
// }
//
// firebaseEdit(firePayload)

// =============== DELETE ===============
//
// let firePayload = {
//   uid: 'icvSeaGJXRD1UjSS7aLA',
//   collection: 'profile',
// }
//
// firebaseDelete(firePayload)

// =============== DEFINITIVE DELETE ===============
//
// let firePayload = {
//   uid: 'icvSeaGJXRD1UjSS7aLA',
//   collection: 'profile',
// }
//
// firebaseDelete(firePayload)

// ============== ADD ===============
//
// const firePayload = {
//   collection: 'profile',
//   params: {
//     name: payload.name,
//     surname: payload.surname,
//     user_uid: user.user.uid
//   }
// }
//
// firebaseAdd(firePayload)

// ============== GET ===============
//
// let firePayload = {
//   collection: 'profile',
//   where: [
//     ['user_uid', '==', payload.id],
//   ]
// }
//
// firebaseGet(firePayload)

// ============== GET BY ID ===============
// let firePayload = {
//   collection,
//   uid
// }
//
// firebaseGetById(firePayload)

// ============== GET PHOTO BY PATH ===============
// let firePhotoPayload = {
//   path: 'KDA-Ahri.jpg'
// }
//
// firebaseGetPhotoByPath(firePhotoPayload)

// ============== FIRE BASE SET PHOTO ===============
// let firePayload = {
//   collection: `users`,
//   uri: payload,
//   path: [
//       [
//           'hoje'
//       ],
//       [
//           'amanha'
//       ],
//       [
//           'aqui.png'
//       ]
//   ]
// }
// let res = yield firebaseSetPhoto(firePayload);
