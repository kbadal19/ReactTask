import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYEk_HfaICT9znByqF2w55t-NKUeoDTyI",
  authDomain: "reactauth-a8d47.firebaseapp.com",
  projectId: "reactauth-a8d47",
  storageBucket: "reactauth-a8d47.appspot.com",
  messagingSenderId: "130257213747",
  appId: "1:130257213747:web:920aac7f0a0a11c5e60646",
  measurementId: "G-FW8D9EG5VK",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInGoogle = async () => {
  let result = await signInWithPopup(auth, provider);
  console.log("fskjfhsn", result);
  const name = result.user.displayName;
  const photo = result.user.photoURL;
  localStorage.setItem("name", name);
  localStorage.setItem("ProfilePic", photo);
  return result;
};
