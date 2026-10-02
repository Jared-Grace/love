import { arguments_assert } from "./arguments_assert.mjs";
import { folder_home_backup } from "./folder_home_backup.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { path_join } from "./path_join.mjs";
export function git_commit_maps_folder() {
  "Where the saved records of what each history rewrite renamed every commit to are kept, outside every repository.";
  "A rewrite writes that record inside the throwaway copy it works in, which sits in the machine's temporary folder and is wiped by a restart, so it is copied here as the last step of the rewrite. Here means outside the repositories on purpose: the record is the only surviving link between a name written down before a rewrite and the same commit afterwards, and a repository that was itself rewritten is the last place able to keep its own.";
  "★ THE ORDER OF THE RECORDS IS PART OF THE ANSWER, SO THE FILES ARE NUMBERED AND NOT ONLY DATED. Two rewrites were accepted within an hour of each other on 2026-09-25, and a name written before the first needs the first record and then the second, in that order. A date cannot separate them, and a name walked through them backwards is not found in either - which reads exactly like a name that was never a commit here at all.";
  "The folder is built up from the one that names where this repo's backups gather rather than written out whole. It was written out whole until 2026-10-02, and being a function of its own was not enough to make that safe: the one place a folder is spelled is still one machine's answer, so the folder moving leaves this saying the old thing and everything reading from the other side saying the records are looked after. Asking for the gathering folder makes this move with its neighbours instead - the memory repo next door is named the same way, and the home folder underneath both is asked of the machine rather than written anywhere.";
  arguments_assert(arguments, 0);
  let name = repo_love_name();
  let backup = folder_home_backup(name);
  let folder = path_join([backup, "commit_maps"]);
  return folder;
}
