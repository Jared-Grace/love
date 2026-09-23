import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { child_output_wait_code } from "./child_output_wait_code.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export async function git_folder_grep_case_blind_paths(folder, pattern) {
  "$plain folder";
  "$plain pattern";
  "Which of the files a repository is tracking right now hold something matching a pattern, ignoring the difference between a capital and a small letter.";
  "★ FINDING NOTHING IS AN ANSWER HERE, NOT A FAILURE, AND THAT IS WHY IT CANNOT USE THE SHARED WAITER. A search that matched nowhere finishes on one, and the waiter every other git call goes through reads any ending but nothing as a fault and throws. For a search, the ending that means nothing was found is the commonest good day there is - so this reads the number itself, calls nothing a fault only when it is neither of the two endings a search has, and hands back an empty list for the quiet one.";
  "Only the pattern is a parameter. The program is git and the thing asked of it is a search, both spelled here, so this cannot be talked into running anything else whatever arrives.";
  "It looks only at what git is tracking. A sweep over the folder would reach build output, downloaded copies and everything a repository deliberately ignores, and a word found in one of those says nothing about what this repository is carrying.";
  "Files git considers binary are left out, because a match inside one is a run of bytes that happens to spell the letters rather than a word anybody wrote, and it cannot be read back to check.";
  arguments_assert(arguments, 2);
  let cp = await import("child_process");
  let spawn = property_get(cp, "spawn");
  let words = [
    "-C",
    folder,
    "grep",
    "-I",
    "-i",
    "-l",
    "-E",
    pattern,
    "--",
    ".",
  ];
  let child = spawn("git", words, {
    shell: false,
  });
  let heard = await child_output_wait_code(child);
  let code = heard.code;
  let none = equal(code, 1);
  if (none) {
    let empty = [];
    return empty;
  }
  let found = equal(code, 0);
  if (not(found)) {
    let message = text_combine_multiple([
      "git grep in ",
      folder,
      " exited with code ",
      code,
      ", which is neither a match nor an empty search\n\nSTDERR:\n",
      heard.said,
    ]);
    throw new Error(message);
  }
  let text = text_trim(heard.out);
  let blank = text_empty_is(text);
  if (blank) {
    let empty = [];
    return empty;
  }
  let lines = text_split_newline(text);
  function lambda(line) {
    let nothing = text_empty_is(line);
    let kept = not(nothing);
    return kept;
  }
  let named = list_filter(lines, lambda);
  let paths = list_unique_sorted(named);
  return paths;
}
