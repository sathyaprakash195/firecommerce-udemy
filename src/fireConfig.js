import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhpP_9HpD9TPhbiClU4LMSrOmRacpkqi4",
  authDomain: "firecommerce-d3219.firebaseapp.com",
  projectId: "firecommerce-d3219",
  storageBucket: "firecommerce-d3219.appspot.com",
  messagingSenderId: "667285674766",
  appId: "1:667285674766:web:cca456fed54c084edc155f",
  measurementId: "G-VECTKQMSX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB