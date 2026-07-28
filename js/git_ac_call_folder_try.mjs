import { git_ac_call_folder } from "./git_ac_call_folder.mjs";
import { git_folder_is } from "./git_folder_is.mjs";
export async function git_ac_call_folder_try(folder, f_name, args) {
  "A folder that is not a repo answers with nothing at all rather than with a";
  "record saying it committed nothing, so the two are told apart upstream the same";
  "way the by-name commit tells them apart: nothing here means there was never a";
  "question, where a record saying nothing was committed means the question was";
  "asked and the answer was empty.";
  let is = await git_folder_is(folder);
  if (is) {
    let result = await git_ac_call_folder(f_name, args, folder);
    return result;
  }
  let skipped = null;
  return skipped;
}
