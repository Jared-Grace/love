import { arguments_assert } from "./arguments_assert.mjs";
import { g_generate_upload_hashes_folder } from "./g_generate_upload_hashes_folder.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
export function g_generate_upload_hash_path(fn, name) {
  "Where the record of one sent file is kept - one file per sent file, named the same way the sent file is.";
  "ONE FILE EACH RATHER THAN ONE LIST OF THEM ALL, BECAUSE THE SENDS HAPPEN ONE AT A TIME AND MAY STOP IN THE MIDDLE. A single list would have to be read, added to and written back for every file, so a run cut off part way leaves the list saying either nothing went up or everything did, and several commands sending at once would each overwrite the other's additions. A file of its own is written once and read once, and a run that stops leaves exactly the records of the files that really went.";
  arguments_assert(arguments, 2);
  let folder = g_generate_upload_hashes_folder(fn);
  let base = text_combine(name, ".json");
  let joined = path_join([folder, base]);
  return joined;
}
