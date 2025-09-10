import { object_merge } from "./object_merge.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { log } from "./log.mjs";
export async function firebase_upload_string(content, destination) {
  destination = firebase_path_fix(destination);
  const bucket = await firebase_bucket();
  const file = bucket.file(destination);
  let b = Buffer.from(content);
  const newLocal = {
    contentType: "text/plain",
    gzip: true,
    metadata: {
      cacheControl: "no-cache",
    },
  };
  let to2 = object_merge(to, from2);
  await file.save(b, newLocal);
  console.log(`Uploaded string to ${destination}`);
  const url = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
  console.log("Accessible at:", url);
}
