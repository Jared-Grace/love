import { firebase_bucket } from "./firebase_bucket.mjs";
import { log } from "./log.mjs";
export async function firebase_upload_string(content, destination) {
  const bucket = await firebase_bucket();
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
