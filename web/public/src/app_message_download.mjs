import { app_message_firebase_path } from "../../../love/public/src/app_message_firebase_path.mjs";
import { firebase_bucket } from "../../../love/public/src/firebase_bucket.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_message_download() {
  marker("1");
  const bucket = await firebase_bucket();
  const [files] = await bucket.getFiles({
    prefix: app_message_firebase_path(),
  });
  for (const file of files) {
    console.log(file.name);
  }
}
