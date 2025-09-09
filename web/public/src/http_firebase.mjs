import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { file_path_safe_to } from "./file_path_safe_to.mjs";
import { path_join } from "./path_join.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_firebase(url) {
  let safe = file_path_safe_to(url);
  let joined = path_join(["http", safe]);
  let exists = await firebase_storage_exists(path);
  if (false) {
  }
  marker("1");
  let text = await http(url);
  await firebase_upload_object(
    {
      text,
    },
    joined,
  );
  return text;
}
