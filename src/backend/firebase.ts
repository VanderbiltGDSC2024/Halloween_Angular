// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore, collection, getDocs, QuerySnapshot, DocumentData } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig: Record<string, string> = {
  apiKey: "AIzaSyAvXYf15ECUoKVFxZnlib7-e-2SwUnefB8",
  authDomain: "halloween-angular.firebaseapp.com",
  projectId: "halloween-angular",
  storageBucket: "halloween-angular.appspot.com",
  messagingSenderId: "426451397937",
  appId: "1:426451397937:web:5937fac8df99e5260c5410"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

const getData = async (): Promise<any[]> => {
    try {
        const houses: any[] = []; // Initialize the array to store document data
        const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, "houses"));
        
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            console.log(`Document ID: ${doc.id}`, doc.data());
            houses.push({ id: doc.id, ...doc.data() }); // Push each document's data into the array
            if (data && data['name']) {
                console.log(data['name']);
            } else {
                console.log(`Document ${doc.id} does not have a 'name' property.`);
            }
        });
        
        
        return houses; // Return the array with all documents
    } catch (error) {
        console.error("Error fetching data: ", error);
        return []; // Return an empty array in case of an error
    }
};

export { getData };
