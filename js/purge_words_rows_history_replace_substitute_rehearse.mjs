import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { list_set_difference } from "./list_set_difference.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { assert_json } from "./assert_json.mjs";
import { purge_words_rows_words } from "./purge_words_rows_words.mjs";
import { git_history_texts_replacements_text } from "./git_history_texts_replacements_text.mjs";
import { git_history_texts_substitute_replacements_text } from "./git_history_texts_substitute_replacements_text.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { git_history_replacements_rehearse } from "./git_history_replacements_rehearse.mjs";
export async function purge_words_rows_history_replace_substitute_rehearse(
  folder,
  rows_text,
  substitute_rows_text,
  replacement,
) {
  "$plain folder";
  "$plain rows_text";
  "$plain substitute_rows_text";
  "$plain replacement";
  "Rehearses one rewrite that empties some named rows of the private word list and exchanges the rest for an innocent word, in a single pass over everything a repository has ever held. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  ("★ THIS IS ONE PASS BECAUSE ONLY ONE PASS CAN BE ACCEPTED, and that is a fact about the accepting step rather than a preference. ",
    fn_name("git_history_rewrite_accept"),
    " refuses a rehearsal whose copy was taken at a commit the folder no longer stands on, which is what stops a rewrite throwing away a peer's afternoon. Running the emptying command over the exchanging command's copy does work and proves out, but the copy it hands back was taken at the *first* copy's commit and not at the folder's - so it can never be accepted, and discovering that after two rehearsals is discovering it in the most expensive order.");
  ("★ THE TWO KINDS OF LINE DIFFER IN HOW THEY MATCH, NOT ONLY IN WHAT THEY WRITE, which is why one list of rows could not have served. An emptied row is asked for only where it begins a word, because emptying letters inside an innocent longer word would hollow it out. An exchanged row is asked for wherever its letters stand, which is safe precisely because letters go in where letters came out. The reasoning belongs to ",
    fn_name("git_history_texts_substitute_rehearse"),
    " and is not repeated here.");
  ("★ A ROW NAMED IN BOTH LISTS IS REFUSED. Emptying it and exchanging it are contradictory instructions about the same word, and the rewriting tool would simply obey whichever line it read first - silently, and differently depending on the order the lines happened to be written in.");
  ("★ THE ANSWER LEAVES THE WORDS OUT. It names the rows of each kind, the replacement and the files that moved, and never spells what was taken out.");
  ("★ THERE IS NO ACCEPTING TWIN HERE ON PURPOSE. Rehearsing is safe and accepting is not, so the step that replaces a real past with a rewritten one is asked for by its own name, by somebody who has read what this handed back.");
  arguments_assert(arguments, 4);
  let rows = text_split_comma(rows_text);
  let substitute_rows = text_split_comma(substitute_rows_text);
  let known = list_unique_set(substitute_rows);
  let separate = list_set_difference(rows, known);
  let left = list_size(separate);
  let right = list_size(rows);
  let disjoint = equal(left, right);
  assert_json(disjoint, {
    hint: "a row was named both to be emptied and to be exchanged, which are contradictory instructions about the same word - would you like to name it in one list only?",
    rows,
    substitute_rows,
  });
  let emptied = await purge_words_rows_words(rows_text);
  let exchanged = await purge_words_rows_words(substitute_rows_text);
  let first = git_history_texts_replacements_text(emptied);
  let second = git_history_texts_substitute_replacements_text(
    exchanged,
    replacement,
  );
  let replacements = list_join_newline([first, second]);
  let words = [];
  list_add_multiple(words, emptied);
  list_add_multiple(words, exchanged);
  let rehearsed = await git_history_replacements_rehearse(
    folder,
    replacements,
    words,
  );
  let r = {
    clone_folder: rehearsed.clone_folder,
    rows,
    substitute_rows,
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
