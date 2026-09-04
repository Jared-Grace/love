import { arguments_assert } from "./arguments_assert.mjs";
import { uuid } from "./uuid.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
export async function git_folder_clone_bare_temp(folder) {
  "$plain folder";
  "A whole repository copied to a folder nobody is using, under a name nothing else will pick, and handed back by the way to it.";
  "This is what a rehearsal stands on. A history rewrite cannot be undone and cannot be tried, so the way to try one is to do the whole of it somewhere the answer does not matter and prove the result before anybody is asked to accept it.";
  "THE COPY IS MADE ON THE MACHINE'S OWN SCRATCH FOLDER AND NEVER INSIDE THE REPOSITORY. Making it inside was how four copies of this repository once ended up committed into it, and they were the largest thing in its history for the better part of a year.";
  "Nothing is shared with the original on purpose, so that a rewrite in the copy cannot reach back into the folder people are working in. That is what the second of the two words asks for, and it is the difference between a rehearsal and an accident.";
  "The copy carries no working files, because a rewrite reads and writes history and never opens one - and a repository of this size costs a great deal more to lay out on disk than to copy.";
  "It is left standing afterwards rather than cleared away. A proof that failed is only worth having if the thing it failed on is still there to look at.";
  arguments_assert(arguments, 1);
  let name = await uuid();
  let folder2 = await folder_machine_temp();
  let clone_folder = path_join([folder2, name]);
  await git_folder_run(folder, [
    "clone",
    "--no-hardlinks",
    "--bare",
    folder,
    clone_folder,
  ]);
  return clone_folder;
}
