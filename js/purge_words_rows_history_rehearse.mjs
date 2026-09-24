import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { purge_words_rows_words } from "./purge_words_rows_words.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { git_history_texts_replace_rehearse } from "./git_history_texts_replace_rehearse.mjs";
export async function purge_words_rows_history_rehearse(folder, rows_text) {
  "$plain folder";
  "$plain rows_text";
  "Rehearses taking named rows of the private word list out of everything a repository has ever held, on a copy nobody is using. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  ("★ ROWS ARE NAMED AND WORDS ARE NOT, BECAUSE A COMMAND LINE IS AMONG THE MOST TRAVELLED TEXT THERE IS - the reason is spelled at ",
    fn_name("purge_words_rows_words"),
    ", which is the only place a row becomes a word.");
  ("★ THE ANSWER LEAVES THE WORDS OUT TOO. What comes back names the rows it was asked for and the files that moved, and never once spells what was taken out - an answer is read aloud, pasted and summarised at least as often as a command line is.");
  ("★ THERE IS NO ACCEPTING TWIN HERE ON PURPOSE. Rehearsing is safe and accepting is not, so the step that replaces a real past with a rewritten one is asked for by its own name, by somebody who has read what this handed back.");
  ("The sibling ",
    fn_name("purge_words_rows_history_substitute_rehearse"),
    " exchanges the rows for an innocent word rather than emptying them, which is what reaches an occurrence written with a letter welded to its front.");
  arguments_assert(arguments, 2);
  let rows = text_split_comma(rows_text);
  let words = await purge_words_rows_words(rows_text);
  let words_text = list_join_comma(words);
  let rehearsed = await git_history_texts_replace_rehearse(folder, words_text);
  let r = {
    clone_folder: rehearsed.clone_folder,
    rows,
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
