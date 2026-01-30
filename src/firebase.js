import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGAhkR5vsRMaVV_fHd4RQx9dF9wPYrTTc",
  authDomain: "to-do-new-62a7f.firebaseapp.com",
  projectId: "to-do-new-62a7f",
  storageBucket: "to-do-new-62a7f.appspot.com",
  messagingSenderId: "743548462153",
  appId: "1:743548462153:web:eb99a4f12ae659d979cb98"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
