import { data_given_reply_approvals_folder } from "./data_given_reply_approvals_folder.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
export function reply_approved_path(f_name) {
  "Where one reviewed file's verdict is kept, named after the file it is a verdict on.";
  "One file each rather than one file holding them all, because two verdicts are written at different moments by a person working through a list, and a single file would have the second read and rewrite the first. It also means a verdict can be looked at, or thrown away, by name.";
  let folder = data_given_reply_approvals_folder();
  let named = text_combine_multiple([f_name, ".json"]);
  let p = path_join([folder, named]);
  return p;
}
