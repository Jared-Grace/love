import { text_word_start_regex } from "./text_word_start_regex.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
export async function git_folder_history_paths_word_commits_count(
  folder,
  paths,
  word,
) {
  "$plain folder";
  "$plain word";
  arguments_assert(arguments, 3);
  ("How many commits anywhere in a repository's whole history change how many times a word appears in any of the named files, counting every branch it knows about rather than only the one it is standing on.");
  ("★ THIS IS THE READING THAT SAYS A PURGE DID ANYTHING AT ALL. Every other proof around a scoped replacement is a proof that nothing broke: no file added, none dropped, no commit gained or lost, the present unchanged. All of those pass perfectly for a rewrite that ran for an hour and replaced nothing - a mistyped path, a word spelled a way the repository never used, instructions that hand every file back untouched. Asked before and after, this one tells the two apart: it has to be more than nothing to begin with, and nothing when the work is done.");
  ("It counts commits rather than occurrences because that is what the tool underneath can be asked cheaply, and because the number is only ever compared against nothing. Anything above nothing means the word is still somewhere in the past of these files, and how far above says nothing more useful than that.");
  ("★ IT ASKS BY THE SAME RULE THE WORD WAS TAKEN OUT BY, AND ASKING FOR THE PLAIN SPELLING INSTEAD IS WRONG IN A WAY THAT LOOKS CAUTIOUS. The first version of this looked for the letters as they are spelled, anywhere, reasoning that a proof should not be cleverer than the thing it is checking. That reasoning is backwards. The replacement deliberately leaves the word alone where it sits inside a longer one, because that is where it is innocent - so a reading that counts those finds them all still there and calls a finished purge unfinished. Measured on a real note, a correct rewrite reported two commits still holding the word, and both were the file name it was named after. A proof that fails correct work is worse than no proof, because it is believed.");
  ("An empty list of files is refused rather than answered. Naming no files and asking what they hold reads to the tool as naming every file, which is the opposite question and would answer it confidently.");
  let any = list_empty_not_is(paths);
  assert_json(any, {
    hint: "no files were named to ask about, and asking with no files named would be read as asking about every file - would you like to name the files?",
    folder,
    word,
  });
  let pattern = text_word_start_regex(word);
  let asked = ["log", "--all", "--format=%H", "-G" + pattern, "--"];
  list_add_multiple(asked, paths);
  let printed = await git_folder_run(folder, asked);
  let text = text_trim(printed);
  let empty = text_empty_is(text);
  if (empty) {
    let r = 0;
    return r;
  }
  let lines = text_split_newline(text);
  let count = list_size(lines);
  return count;
}
