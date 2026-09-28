import { arguments_assert } from "./arguments_assert.mjs";
export function git_commit_maps_folder() {
  "Where the saved records of what each history rewrite renamed every commit to are kept, outside every repository.";
  "A rewrite writes that record inside the throwaway copy it works in, which sits in the machine's temporary folder and is wiped by a restart, so it is copied here as the last step of the rewrite. Here means outside the repositories on purpose: the record is the only surviving link between a name written down before a rewrite and the same commit afterwards, and a repository that was itself rewritten is the last place able to keep its own.";
  "★ THE ORDER OF THE RECORDS IS PART OF THE ANSWER, SO THE FILES ARE NUMBERED AND NOT ONLY DATED. Two rewrites were accepted within an hour of each other on 2026-09-25, and a name written before the first needs the first record and then the second, in that order. A date cannot separate them, and a name walked through them backwards is not found in either - which reads exactly like a name that was never a commit here at all.";
  arguments_assert(arguments, 0);
  let folder = "/home/j/a/backup/love/commit_maps";
  return folder;
}
