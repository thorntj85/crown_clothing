import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyB84lUZaTP-sE8Ua6g467kn72tx2p8Jc4E",
	authDomain: "crown-db-87b04.firebaseapp.com",
	databaseURL: "https://crown-db-87b04.firebaseio.com",
	projectId: "crown-db-87b04",
	storageBucket: "crown-db-87b04.appspot.com",
	messagingSenderId: "956037332118",
	appId: "1:956037332118:web:1f62d2a9c385545d7cd6b7",
	measurementId: "G-E29P6BKGLE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
