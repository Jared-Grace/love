import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { number_from_text } from "./number_from_text.mjs";
export async function git_folder_history_paths_commits_count(folder, paths) {
  "$plain folder";
  arguments_assert(arguments, 2);
  ("How many commits anywhere in a repository's whole history touch any of the named files, counting every branch it knows about rather than only the one it is standing on.");
  ("This is what makes the absence of a file provable rather than trusted. A rewrite that was told to take a file out of the past says it did, and nothing about the repository afterwards contradicts it unless somebody asks - so the asking is written down here and done, and none is the only answer that means the file has gone. It is also the one reading that a word purge cannot supply, because taking the words out of a file leaves the file, and leaves it standing under the name the words were in.");
  ("An empty list is refused rather than answered. Naming no files and asking how many commits touch them reads to the tool as naming every file, so the answer would be the whole history and it would look like the worst possible failure - or, asked the other way about, like a proof that passed when nothing was checked.");
  ("It walks the whole history and is slow in proportion to it: measured on ninety thousand commits, half a minute. The cost does not grow with the number of files named, because the walk is the cost and there is one walk however many are asked about, so ask about all of them at once.");
  let any = list_empty_not_is(paths);
  assert_json(any, {
    hint: "no files were named to ask about, and asking about none would be answered as though every file had been named - would you like to name the files whose absence is in question?",
    folder,
  });
  let asked = ["rev-list", "--all", "--count", "--"];
  list_add_multiple(asked, paths);
  let printed = await git_folder_run(folder, asked);
  let text = text_trim(printed);
  let count = number_from_text(text);
  return count;
}
