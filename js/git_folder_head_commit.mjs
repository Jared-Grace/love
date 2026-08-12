import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function git_folder_head_commit(folder) {
  "$plain folder";
  arguments_assert(arguments, 1);
  ("The full name of the commit one folder is standing on.");
  ("The full name rather than the short one, because a short name is only unique until the day it is not, and this one is used as a key.");
  ("Which folder is a parameter because the neighbouring repos are asked this as well as this one. A name in another repo is found by stepping out of here and back down by name, so what a run of the gates saw is not this repo's commit alone - it is this one and every neighbour's together.");
  let asked = ["rev-parse", "HEAD"];
  let printed = await git_folder_run(folder, asked);
  let commit = text_trim(printed);
  return commit;
}
