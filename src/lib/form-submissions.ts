import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { db, firebaseReady, missingFirebaseConfigKeys } from "@/lib/firebase";

type SubmissionCollection = "inquiries" | "meeting_requests";

export function getFirebaseSetupMessage() {
  if (firebaseReady) {
    return "";
  }

  return `Firebase is not configured yet. Add these values in .env.local: ${missingFirebaseConfigKeys.join(", ")}.`;
}

export async function submitToFirebase(
  collectionName: SubmissionCollection,
  payload: Record<string, unknown>
) {
  if (!firebaseReady || !db) {
    throw new Error(getFirebaseSetupMessage());
  }

  try {
    const writeOperation = addDoc(collection(db, collectionName), {
      ...payload,
      createdAt: serverTimestamp()
    });

    const timeoutOperation = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Firebase request timed out. Check your internet connection, Firebase config, and Firestore rules."));
      }, 15000);
    });

    await Promise.race([writeOperation, timeoutOperation]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    const normalizedMessage = message.toLowerCase();

    if (normalizedMessage.includes("permission")) {
      throw new Error("Firestore denied this request. Update your Firestore rules to allow website form submissions.");
    }

    if (normalizedMessage.includes("timed out")) {
      throw error;
    }

    if (normalizedMessage.includes("network")) {
      throw new Error("Firebase could not connect to the network. Check your internet connection and try again.");
    }

    throw new Error("We couldn't save your submission to Firebase right now. Please check your Firebase config and Firestore rules.");
  }
}
