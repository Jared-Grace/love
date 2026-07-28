import { git_add_folder_all } from "./git_add_folder_all.mjs";
import { git_files_staged_folder } from "./git_files_staged_folder.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { git_commit_folder } from "./git_commit_folder.mjs";
import { git_call_message } from "./git_call_message.mjs";
export async function git_ac_call_folder(f_name, args, folder) {
  "Sweeps the folder and answers with what the sweep actually took, in the same";
  "shape the by-name commit answers in. Until this it answered with nothing, so";
  "every sweep reported an empty list of repos however much it committed — a";
  "report that reads as a peer having got there first, which is the one thing the";
  "answer exists to make visible.";
  "The files are asked for after the add and before the commit, because that is the";
  "only moment git is holding exactly the set the commit will contain.";
  let message = git_call_message(f_name, args);
  await git_add_folder_all(folder);
  let files = await git_files_staged_folder(folder);
  let none = list_empty_is(files);
  if (none) {
    let nothing = {
      folder,
      committed: false,
      files,
    };
    return nothing;
  }
  await git_commit_folder(folder, message);
  let done = {
    folder,
    committed: true,
    files,
  };
  return done;
}
