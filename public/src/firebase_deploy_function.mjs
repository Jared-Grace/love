import { firebase_admin } from "./firebase_admin.mjs";
import { log } from "./log.mjs";
export async function firebase_deploy_function() {
  {
    await firebase_admin();
  }
  const admin = await import("firebase-admin");
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
