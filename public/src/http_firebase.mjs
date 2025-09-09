import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { http } from "./http.mjs";
import { marker } from "./marker.mjs";
export async function http_firebase(url) {
  marker("1");
  let text = await http(url);
  await firebase_upload_object(version, destination_version);
  return text;
}
