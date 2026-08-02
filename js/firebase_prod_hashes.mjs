import { firebase_prod_hashes_path } from "./firebase_prod_hashes_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
export async function firebase_prod_hashes() {
  "What every app was serving the last time anybody looked and wrote it down";
  "An empty record is written the first time rather than treated as a fault, because having looked at nothing yet is the ordinary state of a thing that has just begun";
  "This is a note of what is live and never the deciding word on it. An app missing here means nobody has looked yet - it does not mean the app is serving nothing - so a reader wanting certainty asks what is live instead of asking this";
  let path = firebase_prod_hashes_path();
  let hashes = await file_read_json_initialize(path, {});
  return hashes;
}
