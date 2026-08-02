import { firebase_prod_app_hashes } from "./firebase_prod_app_hashes.mjs";
import { firebase_prod_hashes } from "./firebase_prod_hashes.mjs";
import { firebase_prod_hashes_path } from "./firebase_prod_hashes_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function firebase_prod_app_hashes_write(app_name) {
  "$plain app_name";
  "Looks at what one app is serving right now and writes that down beside what the other apps were last seen serving";
  "What is live is read first and the note is written from what came back - never from what somebody meant to send. A note written from an intention can be wrong and sure of itself at the same time, and the way it would be wrong is the way that lets a later deploy through without anybody having checked anything";
  "That is also why this is the whole repair. A note that fell behind - because whatever was writing it stopped between sending and noting - is put right by running this again, since it never trusts what it already held";
  "The other apps are carried over untouched rather than the record being written afresh, so looking at one app never quietly claims anything about the rest";
  "Reading and then writing the whole record is only safe while one of these runs at a time. It is meant to run where deploying already runs one at a time - two of these at once would each write what it read before the other wrote";
  let looked = await firebase_prod_app_hashes(app_name);
  let hashes = await firebase_prod_hashes();
  hashes[app_name] = looked;
  let path = firebase_prod_hashes_path();
  await file_overwrite_json(path, hashes);
  return hashes;
}
