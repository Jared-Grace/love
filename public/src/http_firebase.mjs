import { file_path_safe_to } from "./file_path_safe_to.mjs";
import { path_join } from "./path_join.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_firebase(url) {
  marker("1");
  let text = await http(url);
  let safe = file_path_safe_to(url);
  let joined = path_join(["http", url]);
  await firebase_upload_object(version, joined);
  return text;
}
