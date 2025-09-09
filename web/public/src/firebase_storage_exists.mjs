import { firebase_bucket } from "./firebase_bucket.mjs";
import { marker } from "./marker.mjs";
export async function firebase_storage_exists() {
  const bucket = await firebase_bucket();
  marker("1");
}
