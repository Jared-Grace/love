import { object_merge } from "./object_merge.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { log } from "./log.mjs";
export async function firebase_upload_string(content, destination) {
  let b = Buffer.from(content);
  const settings = {
    contentType: "text/plain",
    gzip: true,
  };
  destination = firebase_path_fix(destination);
  const bucket = await firebase_bucket();
  const file = bucket.file(destination);
  let merged = object_merge(
    {
      metadata: {
        cacheControl: "no-cache",
      },
    },
    settings,
  );
  await file.save(b, merged);
  console.log(`Uploaded data to ${destination}`);
  const url = `https://storage.googleapis.com/${bucket.name}/${file.name}`;
  console.log("Accessible at:", url);
}
