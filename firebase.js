// src/firebase.js o src/config/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Si usas autenticación
import { getFirestore } from 'firebase/firestore'; // Si usas Firestore

// Tu configuración de Firebase, usando las variables de entorno
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios de Firebase que uses
export const auth = getAuth(app);
export const db = getFirestore(app);
// ... otros servicios como getStorage, getFunctions, etc.

// Opcional: También puedes exportar otras variables del entorno
export const isDebugMode = process.env.REACT_APP_DEBUG === 'true'; // Las variables de entorno son strings
export const isOfflineMode = process.env.REACT_APP_OFFLINE === 'true';
