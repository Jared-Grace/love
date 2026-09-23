import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { text_words_start_regex } from "./text_words_start_regex.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export async function git_folder_history_words_paths(folder, words_text) {
  "$plain folder";
  "$plain words_text";
  arguments_assert(arguments, 2);
  ("Every file a repository has ever held that any of these words was ever written into or taken out of, named once each and in order, reading a capital letter as the same letter as a small one and every branch it knows about rather than only the one it is standing on.");
  ("★ THIS IS THE ANSWER A PURGE MUST BE POINTED AT, AND WRITING THE LIST DOWN BY HAND INSTEAD IS THE FAULT IT WAS BUILT TO END. A queue of words to take out of a past was kept beside a table of the files holding them, written by the person who found them. Asked instead of read, the past named thirty-three files where the table named five - a built copy under the served folder, a second source copy beside it, a findings file nobody thought of, and the very file where the finding had been written up as a worked example. Every one of those would have been left behind by a rewrite scoped to the table, and every proof around that rewrite would have passed, because a proof scoped to the same table cannot see what the table left out.");
  ("★ IT IS ASKED AS ONE PATTERN RATHER THAN ONE WORD AT A TIME, BECAUSE THE PAST IS EXPENSIVE TO READ AND THE QUESTION IS NOT PER WORD. Which word sat in which file matters only once the files are few, and asking that afterwards costs almost nothing because the reading can then be pointed at the files this answers with. Asked per word first, the same reading is paid for once per word over the whole past.");
  ("A capital letter is set aside here by the flag the tool underneath offers, not inside the pattern, for the same reason it is set aside that way everywhere else that reads this rule: of the readers this pattern is handed to, only the one that rewrites the past will take such an instruction written in. The words worth asking about are names, and a name is capitalised wherever it stands in an ordinary sentence, so asking for the small spelling alone would hand back a shorter list and no sign that it was short.");
  ("The names come back as they were spelled in each commit, so a file that was moved is named at each place it stood. That is wanted rather than tidied away: a rewrite scoped to where a file stands today would walk straight past everything it held before it was moved.");
  ("★ WHAT COMES BACK IS WHERE TO LOOK, NEVER WHAT TO TAKE OUT. A word that identifies somebody in the short list it sat alone in is an ordinary word of the world in the long list beside it, and this answers with both files and no way to tell them apart. Reading this list as a list of files to purge would gut the vocabulary along with the name. It narrows the past from everything to a few files; which of those few deserve the rewrite is a judgment, and it is not made here.");
  let words = text_split_comma(words_text);
  let pattern = text_words_start_regex(words);
  let asked = [
    "log",
    "--all",
    "--format=",
    "-i",
    "-G" + pattern,
    "--name-only",
  ];
  let printed = await git_folder_run(folder, asked);
  let text = text_trim(printed);
  let empty = text_empty_is(text);
  if (empty) {
    let none = [];
    return none;
  }
  let lines = text_split_newline(text);
  function lambda(line) {
    let blank = text_empty_is(line);
    let kept = not(blank);
    return kept;
  }
  let named = list_filter(lines, lambda);
  let paths = list_unique_sorted(named);
  return paths;
}
