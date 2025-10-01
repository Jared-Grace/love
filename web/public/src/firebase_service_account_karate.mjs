import { marker } from "./marker.mjs";
import { firebase_service_account_love_generic } from "./firebase_service_account_love_generic.mjs";
export async function firebase_service_account_karate() {
  marker("1");
  const name = "karate-code";
  let file_path = await firebase_service_account_love_generic(name);
  return file_path;
}
