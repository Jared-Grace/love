import { firebase_service_account } from "./firebase_service_account.mjs";
import { marker } from "./marker.mjs";
export async function firebase_deploy_function() {
  const admin = await import("firebase-admin");
  marker("1");
  let data = await firebase_service_account();
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
  });
  const bucket = admin.storage().bucket();
  await bucket.upload("./local-file.txt", {
    destination: "uploads/file.txt",
  });
  return data;
}
