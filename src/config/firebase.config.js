import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAauSN97FpbMsH9I7gze9znvd6fd5xhduU",
  authDomain: "johuarts.firebaseapp.com",
  projectId: "johuarts",
  storageBucket: "johuarts.appspot.com",
  messagingSenderId: "957378430628",
  appId: "1:957378430628:web:7c84072f467d95e0d78831"
};

const app = initializeApp(firebaseConfig);

const auth = 