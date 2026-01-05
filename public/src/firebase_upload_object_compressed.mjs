import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { json_compress_object } from "../../../love/public/src/json_compress_object.mjs";
export async function firebase_upload_object_compressed(value, destination) {
  let c = await json_compress_object(value);
  await firebase_upload_object(destination, c);
}
