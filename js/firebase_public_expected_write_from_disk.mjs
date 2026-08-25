import { apps_names } from "./apps_names.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { firebase_prod_app_disk_hashes } from "./firebase_prod_app_disk_hashes.mjs";
import { firebase_public_expected_path } from "./firebase_public_expected_path.mjs";
import { list_unique } from "./list_unique.mjs";
export async function firebase_public_expected_write_from_disk() {
  "Declares everything now waiting to be sent to be what was approved, for every app at once";
  "This is how the record is first made, and how a record that fell behind is put right. It is not part of promoting or of sending - it is somebody saying, deliberately, that the folder as it stands is the thing they meant.";
  "It has to be asked for rather than reached for. Every check that a sending is about to send approved bytes stands on this record, so running this makes any disagreement go away by agreeing with whatever is there - which is the right thing when a person has just looked at the folder and the wrong thing at every other moment. The moment it was written for is a folder proved to match what is already live, where declaring it approved claims nothing that was not already true.";
  "The names are made unique because an app can be reached by more than one path, and one name arriving twice would only write the same thing over itself.";
  let expected = await firebase_prod_apps_disk_hashes();
  let path = firebase_public_expected_path();
  await file_overwrite_json(path, expected);
  return expected;
}
