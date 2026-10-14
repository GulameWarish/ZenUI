```javascript
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "gwui-ad19d.firebaseapp.com",
  projectId: "gwui-ad19d",
  storageBucket: "gwui-ad19d.firebasestorage.app",
  messagingSenderId: "265205589721",
  appId: "1:265205589721:web:3b9c3e10f5283c710f00c8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
```