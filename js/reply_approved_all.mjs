import { data_given_reply_approvals_folder } from "./data_given_reply_approvals_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function reply_approved_all() {
  "Every verdict left on the bench so far, as a lookup from a file's name to the lines that were passed.";
  "Asked for once and answered whole rather than a file at a time, because the page draws every waiting change at once and asking per file would be one round trip per file for an answer that is a few lines long.";
  "A folder that is not there yet answers with nothing rather than throwing. Nothing having been approved is the state this bench starts in, and it is not a fault to be reported.";
  let folder = data_given_reply_approvals_folder();
  let files = await folder_read_files_exists_ensure(folder);
  let by_name = {};
  for (let named of files) {
    let p = path_join([folder, named]);
    let stored = await file_read_json(p);
    let f_name = property_get(stored, "f_name");
    let text = property_get(stored, "text");
    property_set(by_name, f_name, text);
  }
  return by_name;
}
