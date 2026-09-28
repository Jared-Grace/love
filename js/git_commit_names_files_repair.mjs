import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { git_commit_names_file_repair } from "./git_commit_names_file_repair.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function git_commit_names_files_repair(file_paths_comma) {
  "$plain file_paths_comma";
  "Repairs the commit names in several named files, committing each file as its own change under the command that made it.";
  "★ THE LIST IS GIVEN AND NEVER FOUND, WHICH IS THE OPPOSITE OF THE USUAL RULE HERE. A command that works out its own set is normally the better of the two shapes, because it cannot drift from what is actually broken. This is the case the other shape is for: the set is a real choice rather than something derivable. No reading of a file can tell a commit name that is a pointer to follow from one written down as the record of a rename, so a sweep that found its own files would rewrite the memory notes into sentences that never happened.";
  "★ EACH FILE IS ONE CHANGE AND SO EACH FILE IS ONE COMMIT. These are separate changes that happen to be asked for together, not one change spread across files, so committing them singly is what keeps each entry a command with its real arguments that can be run again by itself. Whatever was already noted as written is committed first under the bare word, so the first file cannot file somebody else's work under its own name.";
  "The saved records are read again for every file rather than once for the run, which costs about twenty megabytes of reading per file. That is the price of each step being a command in its own right, and for the handful of files that hold commit names it is not worth taking the price back.";
  arguments_assert(arguments, 1);
  let file_paths = text_split_comma(file_paths_comma);
  await ai_git_noted();
  let repaired = [];
  for (let file_path of file_paths) {
    let args = [file_path];
    let one = await function_call_commit(git_commit_names_file_repair, args);
    list_add(repaired, one);
  }
  let looked_at = list_size(file_paths);
  let r = {
    looked_at,
    repaired,
  };
  return r;
}
