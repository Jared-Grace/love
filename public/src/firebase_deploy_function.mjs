import { log } from "./log.mjs";
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
  async function uploadString(content, destinationPath) {
    const file = bucket.file(destinationPath);
    let v = Buffer.from(content);
    await file.save(v, {
      contentType: "text/plain",
      gzip: true,
      metadata: {
        cacheControl: "no-cache",
      },
    });
    console.log(`Uploaded string to ${destinationPath}`);
    const url = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
    console.log("Accessible at:", url);
  }
  const myString = "Hello, Firebase Storage!";
  uploadString(myString, "uploads/hello.txt");
}
