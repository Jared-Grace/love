import { arguments_assert } from "./arguments_assert.mjs";
import { git_commit_maps_read } from "./git_commit_maps_read.mjs";
import { file_read } from "./file_read.mjs";
import { git_commit_names_text_after } from "./git_commit_names_text_after.mjs";
import { property_get } from "./property_get.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_folder_commit_known_is } from "./git_folder_commit_known_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function git_commit_names_file_repair(file_path) {
  "$plain file_path";
  "Rewrites one file so that every commit name in it names the commit it used to name, after however many rewrites of the history have happened since it was written, and says what it changed.";
  "★ THE FILE IS NAMED BY THE CALLER AND THAT NAMING IS THE WHOLE OF THE PERMISSION. Nothing here can tell a pointer from a story about a rename, and nothing ever will, because the two are spelled identically. Only whoever owns a text knows which it holds. So there is deliberately no sweep of the folder to go with this: a command that found its own files would reach the memory notes, which are almost entirely stories, and turn each one into a sentence that never happened.";
  "★ A REPLACEMENT THIS REPOSITORY CANNOT RESOLVE IS REFUSED BEFORE ANYTHING IS WRITTEN. The silent failure this exists to stop is a name of exactly the right shape that resolves to nothing: the records are asked in order, and one missed record leaves a name that is forty digits long, looks perfectly ordinary, and points nowhere. Asking the repository whether it holds the answer is the one check that catches that, and it has to happen before the write, because after it the old name that could have been chased is gone.";
  "★ WHAT IT DID COMES BACK IN FULL, INCLUDING WHAT IT COULD NOT DO. A shortened name that is the beginning of two commits is left exactly as it was and listed, because a file half repaired that says it is repaired is worse than one that was never touched.";
  "A file with nothing to change is read and put down again unwritten, so this can be run over a list of files again and again without making a commit out of nothing.";
  arguments_assert(arguments, 1);
  let reads = await git_commit_maps_read();
  let before = await file_read(file_path);
  let worked = git_commit_names_text_after(reads, before);
  let renamings = property_get(worked, "renamings");
  let ambiguous = property_get(worked, "ambiguous");
  let changed = property_get(worked, "changed");
  let folder = await git_folder_love();
  let unresolved = [];
  for (let renaming of renamings) {
    let to_name = property_get(renaming, "after");
    let known = await git_folder_commit_known_is(folder, to_name);
    let missing = not(known);
    if (missing) {
      list_add(unresolved, renaming);
    }
  }
  let resolved = list_empty_is(unresolved);
  true_is_assert_json(resolved, {
    hint: "the records rename a commit name in this file to a name this repository does not hold, so following the records would swap one dead name for another - the chain of saved records is probably missing one",
    file_path,
    unresolved,
  });
  if (changed) {
    let after = property_get(worked, "after");
    await file_overwrite(file_path, after);
  }
  let r = {
    file_path,
    changed,
    renamings,
    ambiguous,
  };
  return r;
}
