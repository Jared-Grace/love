import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { git_files_changed_folder } from "./git_files_changed_folder.mjs";
import { git_add_folder_paths } from "./git_add_folder_paths.mjs";
import { git_call_message } from "./git_call_message.mjs";
import { git_commit_folder } from "./git_commit_folder.mjs";
export async function git_ac_call_folder_files(folder, f_name, args, files) {
  "Commits the files a command wrote, and only those. Sweeping the whole folder";
  "instead is what makes the message a story rather than a record: it gathers up";
  "whatever a peer happened to be part-way through and files it under the name of";
  "a command that never touched it.";
  "Files belonging to another folder are set aside first, because git refuses a";
  "path from outside the folder it is asked about and would fail on the whole set.";
  "Answering with what was committed is the other half. A commit of nothing looks";
  "exactly like a commit that worked, and this is the only place that can tell";
  "them apart.";
  "the folder arrives named from where the caller stands, and the written files are named from the root, so one of the two has to be moved before they can be compared at all. Comparing them as they came reads every file as belonging to no folder, which asks git about nothing, which git answers with everything";
  let rooted = await path_resolve(folder);
  let inside = list_filter_starts_with(files, rooted);
  let changed = await git_files_changed_folder(folder, inside);
  let none = list_empty_is(changed);
  if (none) {
    let nothing = {
      folder,
      committed: false,
      files: changed,
    };
    return nothing;
  }
  await git_add_folder_paths(folder, changed);
  let message = git_call_message(f_name, args);
  await git_commit_folder(folder, message);
  let done = {
    folder,
    committed: true,
    files: changed,
  };
  return done;
}
