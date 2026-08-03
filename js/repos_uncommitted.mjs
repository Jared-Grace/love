import { git_files_uncommitted_folder } from "./git_files_uncommitted_folder.mjs";
import { git_folder_is } from "./git_folder_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { folder_memory_backup } from "./folder_memory_backup.mjs";
import { not } from "./not.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
export async function repos_uncommitted() {
  "Every folder a sweep commits into that still has something waiting in it, with the files it is waiting on.";
  "This is the question a sweep cannot answer about itself. A sweep says which folders it committed, and false everywhere is the ordinary shape of a peer having got there a second earlier, so on its own it cannot be told from a sweep that failed - and reading that as failure was costing a hand-run status and a hand-run log after every commit, several times an afternoon.";
  "An empty answer is the proof. It says no folder anywhere is holding work, whoever's commit it was that took it, which is the thing actually wanted; a folder standing in the answer is the thing actually feared.";
  "The notes repo is asked about beside the source repos, because a sweep commits there too and a folder left out of the question can never appear in the answer.";
  "Folders that are not repos are dropped rather than carried as blanks, the same as the sweep does, so what comes back is a record per repo that was really asked.";
  let backup = folder_memory_backup();
  async function lambda(folder) {
    let repo = await git_folder_is(folder);
    if (not(repo)) {
      return null;
    }
    let files = await git_files_uncommitted_folder(folder);
    let none = list_empty_is(files);
    if (none) {
      return null;
    }
    let record = {
      folder,
      files,
    };
    return record;
  }
  let mapped = await repos_paths_map_unordered(lambda);
  let waiting = list_filter_null_not_is(mapped);
  let noted = await lambda(backup);
  let some = null_not_is(noted);
  if (some) {
    list_add(waiting, noted);
  }
  return waiting;
}
