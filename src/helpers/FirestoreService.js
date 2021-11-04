import firebase from '../firebase/config';
import {
  getDocs,
  collection,
  addDoc,
} from 'firebase/firestore';

const db = firebase.db;

const createDocument = (collectionName, docData) => {
  return addDoc(collection(db, collectionName), docData);
};

const readDocuments = async collectionName => {
  try {
    let data = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach(doc => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ id: doc.id, data: doc.data() });
      //console.log(doc.id, ' => ', doc.data());
    });

    return data;
  } catch (error) {
    throw error;
  }
};

const FirestoreService = {
  createDocument,
  readDocuments,

};

export default FirestoreService;

