import { http } from "./http.mjs";
import { buffer_string_to } from "./buffer_string_to.mjs";
import { json_from } from "./json_from.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { browser_is } from "./browser_is.mjs";
import { firebase_path_fix } from "./firebase_path_fix.mjs";
import { firebase_storage_url } from "./firebase_storage_url.mjs";
export async function firebase_storage_download(destination) {
  destination = firebase_path_fix(destination);
  let b = browser_is();
  if (b) {
    let url = firebase_storage_url(destination);
    let buffer = await http(url);
    return buffer;
  }
  const bucket = await firebase_bucket();
  let [buffer] = await bucket.file(destination).download();
  const json = buffer_string_to(buffer);
  let o = json_from(json);
  return o;
}
