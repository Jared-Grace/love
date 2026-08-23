import { firebase_public_expected_path } from "./firebase_public_expected_path.mjs";
import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
export async function firebase_public_expected() {
  "What every app was last approved to have waiting to be sent, as one short word standing for each of its files";
  "An empty record is written the first time rather than treated as a fault, because having approved nothing yet is the ordinary state of a thing that has just begun.";
  "An app missing here means nobody has promoted it since this record began - it does not mean the app has nothing waiting. Of the two ways to read an absence, the one to choose is the one that holds a sending rather than the one that lets it by, so a reader deciding whether to send treats a missing app as unapproved and not as agreed.";
  let path = firebase_public_expected_path();
  let expected = await file_read_json_initialize(path, {});
  return expected;
}
