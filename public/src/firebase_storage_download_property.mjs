import {object_property_get} from "./object_property_get.mjs";
import {firebase_storage_download} from "./firebase_storage_download.mjs";
export async function firebase_storage_download_property(destination_version, property_name) {
  let parsed = await firebase_storage_download(destination_version);
  let destination = object_property_get(parsed, property_name);
  return destination;
}
