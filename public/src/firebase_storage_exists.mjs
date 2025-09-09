import { firebase_bucket } from "./firebase_bucket.mjs";
import { marker } from "./marker.mjs";
export function firebase_storage_exists() {
  const bucket = firebase_bucket();
  marker("1");
}
