import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { purge_words_rows_words } from "./purge_words_rows_words.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { git_history_paths_texts_blobs_kept_replace_rehearse } from "./git_history_paths_texts_blobs_kept_replace_rehearse.mjs";
import { list_size } from "./list_size.mjs";
export async function purge_words_rows_history_paths_blobs_kept_rehearse(
  folder,
  rows_text,
  paths_text,
  blobs_text,
) {
  "$plain folder";
  "$plain rows_text";
  "$plain paths_text";
  "$plain blobs_text";
  "Rehearses taking named rows of the private word list out of named files everywhere they have ever been, leaving alone the versions of those files named to be kept, on a copy nobody is using. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  ("★ ROWS ARE NAMED AND WORDS ARE NOT, BECAUSE A COMMAND LINE IS AMONG THE MOST TRAVELLED TEXT THERE IS - the reason is spelled at ",
    fn_name("purge_words_rows_words"),
    ", which is the only place a row becomes a word.");
  ("★ THE ANSWER LEAVES THE WORDS OUT TOO, AND HERE THAT MEANS COUNTING THE VERSIONS RATHER THAN LISTING THEM. What the rehearsal underneath hands back says which words each version was holding, and an answer is read aloud, pasted and summarised at least as often as a command line is. How many versions held a word before and how many after is the whole of what a reader needs from this, and it says nothing about any of them.");
  ("★ THE VERSIONS TO KEEP ARE FOUND FIRST, WITH ",
    fn_name("purge_words_rows_paths_versions"),
    ", AND JUDGED BY A READER. A rewrite scoped to a path reaches every version of it or none, so a path that carried something personal at one moment and something legitimate at another can only be cut by naming the versions. That naming is a judgment made once from evidence and written down, never one this command makes for itself.");
  ("★ THERE IS NO ACCEPTING TWIN HERE ON PURPOSE. Rehearsing is safe and accepting is not, so the step that replaces a real past with a rewritten one is asked for by its own name, by somebody who has read what this handed back.");
  ("Naming no versions to keep is spelled as an empty word and means every version holding a word loses it, which is the ordinary case.");
  arguments_assert(arguments, 4);
  let rows = text_split_comma(rows_text);
  let words = await purge_words_rows_words(rows_text);
  let words_text = list_join_comma(words);
  let rehearsed = await git_history_paths_texts_blobs_kept_replace_rehearse(
    folder,
    paths_text,
    words_text,
    blobs_text,
  );
  let held_before = list_size(rehearsed.holding_before);
  let held_after = list_size(rehearsed.holding_after);
  let r = {
    clone_folder: rehearsed.clone_folder,
    rows,
    paths: rehearsed.paths,
    kept: rehearsed.kept,
    commit: rehearsed.commit,
    tree: rehearsed.tree,
    commits_before: rehearsed.commits_before,
    commits_after: rehearsed.commits_after,
    held_before,
    held_after,
    changed: rehearsed.changed,
    remaining: rehearsed.remaining,
  };
  return r;
}
