import { http_firebase_file_name } from "./http_firebase_file_name.mjs";
import { firebase_storage_download_property } from "./firebase_storage_download_property.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { http } from "./http.mjs";
export async function http_firebase(url) {
  let joined = http_firebase_file_name(url);
  let exists = await firebase_storage_exists(url);
  let get = async function lambda(key) {
    let result = await firebase_storage_download_property(
      joined,
      property_name,
    );
  };
  const property_name = "text";
  if (exists) {
    let result = await firebase_storage_download_property(
      joined,
      property_name,
    );
    return result;
  }
  let text = await http(url);
  await firebase_upload_object(
    {
      [property_name]: text,
    },
    joined,
  );
  let result = await firebase_storage_download_property(joined, property_name);
  return result;
}
