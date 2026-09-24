import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { git_history_texts_replacements_text } from "./git_history_texts_replacements_text.mjs";
import { git_history_replacements_rehearse } from "./git_history_replacements_rehearse.mjs";
export async function git_history_texts_replace_rehearse(folder, words_text) {
  "$plain folder";
  "$plain words_text";
  "Does the whole of a word purge on a copy nobody is using, and proves the result before anybody is asked to accept it. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  "The safe half of the job, and the half worth having on its own. It is the neighbour of the one that drops whole paths, for the case that path dropping cannot reach: a word sitting inside a file that has to go on existing. A path drop refuses a live path for exactly that reason, and until this existed the answer was to do it by hand.";
  ("EACH WORD IS ASKED FOR WHERE IT BEGINS A WORD AND NEVER AS LETTERS INSIDE A LONGER ONE, and what it is replaced by is the rewriting tool's own word for a thing removed. The sibling ",
    fn_name("git_history_texts_substitute_rehearse"),
    " is the one to reach for when a word has to be exchanged for an innocent one instead, and it asks wider because exchanging letters for letters cannot hollow out an innocent name the way emptying them would.");
  ("Everything after the instructions are written is ",
    fn_name("git_history_replacements_rehearse"),
    " and is deliberately not spelled again here - the copy, the counts, the four refusals and the list of what still holds a word at the end are the same proof for both siblings, and two copies of it would be two places for a refusal to be quietly weakened in one of them.");
  arguments_assert(arguments, 2);
  let words = text_split_comma(words_text);
  let any = list_empty_not_is(words);
  assert_json(any, {
    hint: "no words were named to take out of the history - would you like to pass them as one comma-joined word?",
    words_text,
  });
  let replacements = git_history_texts_replacements_text(words);
  let r = await git_history_replacements_rehearse(folder, replacements, words);
  return r;
}
