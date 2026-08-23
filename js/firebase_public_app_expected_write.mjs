import { firebase_prod_app_disk_hashes } from "./firebase_prod_app_disk_hashes.mjs";
import { firebase_public_expected } from "./firebase_public_expected.mjs";
import { firebase_public_expected_path } from "./firebase_public_expected_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function firebase_public_app_expected_write(app_name) {
  "$plain app_name";
  "Writes down what one app now has waiting to be sent, which is what promoting it has just made true";
  "Promoting is the act of approving: somebody looked at this app at the stage it was checked and moved it into the folder that goes out. Reading the folder straight afterwards and writing that down is what turns an approval into something a later sending can check itself against - without it, approving leaves no mark and every sending has to take the folder's word for what it holds.";
  "It is read from the folder rather than from the stage it was copied from, so the note describes the bytes that would actually be sent. A note written from the source would agree with a copy that only half happened.";
  "The other apps are carried over untouched rather than the record being written afresh, so promoting one app never quietly claims anything about the rest - the whole point is that the rest are still whatever they were last approved as.";
  "Reading and then writing the whole record is only safe while one of these runs at a time. It is meant to run where promoting already runs one at a time, holding the same block that stops anything else writing that folder - two of these at once would each write what it read before the other wrote.";
  let disk = await firebase_prod_app_disk_hashes(app_name);
  let expected = await firebase_public_expected();
  expected[app_name] = disk;
  let path = firebase_public_expected_path();
  await file_overwrite_json(path, expected);
  return expected;
}
