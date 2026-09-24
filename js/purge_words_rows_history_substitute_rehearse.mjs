import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { purge_words_rows_words } from "./purge_words_rows_words.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { git_history_texts_substitute_rehearse } from "./git_history_texts_substitute_rehearse.mjs";
export async function purge_words_rows_history_substitute_rehearse(
  folder,
  rows_text,
  replacement,
) {
  "$plain folder";
  "$plain rows_text";
  "$plain replacement";
  "Rehearses putting one innocent word in the place of named rows of the private word list, everywhere a repository has ever written them, on a copy nobody is using. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  ("★ ROWS ARE NAMED AND WORDS ARE NOT, and the replacement is named in full because it is innocent. That asymmetry is the whole shape of this command: a row number says which word without being it, while the word going in is a large town or an ordinary name that identifies nobody and may safely be typed, read back and quoted. The reason the first half is a number is spelled at ",
    fn_name("purge_words_rows_words"),
    ".");
  ("★ THIS REACHES WHAT THE EMPTYING TWIN CANNOT. ",
    fn_name("purge_words_rows_history_rehearse"),
    " asks for a row only where it begins a word, so an occurrence written with a letter welded to its front survives and nothing in the counts says so. This asks wherever the letters stand, which is only safe because what goes in is a word rather than nothing - the reasoning for that is at ",
    fn_name("git_history_texts_substitute_rehearse"),
    " and is not repeated here.");
  ("★ THE ANSWER LEAVES THE WORDS OUT. It names the rows asked for, the replacement, and the files that moved, and never spells what was exchanged away.");
  ("★ THERE IS NO ACCEPTING TWIN HERE ON PURPOSE. Rehearsing is safe and accepting is not, so the step that replaces a real past with a rewritten one is asked for by its own name, by somebody who has read what this handed back.");
  arguments_assert(arguments, 3);
  let rows = text_split_comma(rows_text);
  let words = await purge_words_rows_words(rows_text);
  let words_text = list_join_comma(words);
  let rehearsed = await git_history_texts_substitute_rehearse(
    folder,
    words_text,
    replacement,
  );
  let r = {
    clone_folder: rehearsed.clone_folder,
    rows,
    replacement,
    commit: rehearsed.commit,
    tree: rehearsed.tree,
    commits_before: rehearsed.commits_before,
    commits_after: rehearsed.commits_after,
    holding: rehearsed.holding,
    changed: rehearsed.changed,
    remaining: rehearsed.remaining,
  };
  return r;
}
