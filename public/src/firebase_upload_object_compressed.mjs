import { marker } from "../../../love/public/src/marker.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { json_compress_object } from "../../../love/public/src/json_compress_object.mjs";
export async function firebase_upload_object_compressed(destination, value) {
  marker("1");
  let c = await json_compress_object(value);
  await firebase_upload_object(destination, c);
}
