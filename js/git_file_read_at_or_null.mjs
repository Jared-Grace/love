import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { git_file_read_at } from "./git_file_read_at.mjs";
export async function git_file_read_at_or_null(folder, commit, path) {
  "$plain folder";
  "$plain commit";
  "$plain path";
  "One file as it stood at one commit, read out of the history - or nothing at all, where the history has no such file at that moment to give.";
  "IT IS THE HALF THAT ANSWERS WHETHER THE FILE WAS THERE. Reading and parsing were one step before, so a file that did not exist yet and a file that would not parse came back as the same nothing, and a reading of the history counted every new file written as a file it could not understand - sixty six of them in fifteen hundred commits, the second largest thing it thought it had found.";
  arguments_assert(arguments, 3);
  async function read_lambda() {
    let file_text = await git_file_read_at(folder, commit, path);
    return file_text;
  }
  let found = await catch_null_async(read_lambda);
  return found;
}
