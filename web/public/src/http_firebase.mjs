import { string_base64_to } from "./string_base64_to.mjs";
import { log } from "./log.mjs";
import { firebase_storage_download_property } from "./firebase_storage_download_property.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { path_join } from "./path_join.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_firebase(url) {
  let safe = string_base64_to(url);
  let joined = path_join(["http", safe]);
  let exists = await firebase_storage_exists(joined);
  if (exists) {
    log("not downloading");
    let result = await firebase_storage_download_property(joined, "text");
    return result;
  }
  log("downloading");
  marker("1");
  let text = await http(url);
  await firebase_upload_object(
    {
      text,
    },
    joined,
  );
  let result = await firebase_storage_download_property(joined, "text");
  return result;
}
