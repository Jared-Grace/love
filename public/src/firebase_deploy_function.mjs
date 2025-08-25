import { firebase_admin } from "./firebase_admin.mjs";
import { log } from "./log.mjs";
export async function firebase_deploy_function() {
  async function firebase_upload_string(content, destination) {
    const admin = await firebase_admin();
    const bucket = admin.storage().bucket();
    const file = bucket.file(destination);
    let v = Buffer.from(content);
    await file.save(v, {
      contentType: "text/plain",
      gzip: true,
      metadata: {
        cacheControl: "no-cache",
      },
    });
    console.log(`Uploaded string to ${destination}`);
    const url = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
    console.log("Accessible at:", url);
  }
  const myString = "Hello, Firebase Storage!";
  firebase_upload_string(myString, "uploads/hello.txt");
}
