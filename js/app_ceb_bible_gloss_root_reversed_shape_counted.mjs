import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_root_named_reversed_is } from "./gloss_root_named_reversed_is.mjs";
import { text_punctuation_edges_removed } from "./text_punctuation_edges_removed.mjs";
import { gloss_root_row_note } from "./gloss_root_row_note.mjs";
import { gloss_chapters_roots_named_entries_generic } from "./gloss_chapters_roots_named_entries_generic.mjs";
import { gloss_rows_ranked } from "./gloss_rows_ranked.mjs";
import { list_take } from "./list_take.mjs";
export async function app_ceb_bible_gloss_root_reversed_shape_counted(
  sample_size,
) {
  "How many explanations the four wordings still call bare open by naming a root before they name anything else, which is the one shape that puts the root first and so could never be read from the sentence alone.";
  ("★ THIS ASKED THE QUESTION INLINE ONCE AND GOT IT WRONG BY 155 SIGHTINGS, WHICH IS WHY THE JUDGMENT NOW SITS IN A FUNCTION WITH A GATE UNDER IT. The first answer was 6715 and this one is smaller. The difference is entirely three classes that a first quoted token cannot be told apart from a root by containment alone - a headword repeated back with the punctuation the store filed it under, an affix quoted in place of the thing it was added to, and the first half of a two word entry. ",
    fn_name("gloss_root_named_reversed_is"),
    " holds all five marks now and ",
    fn_name("gloss_root_named_reversed_gate_run"),
    " pins them, so a later widening fails a gate instead of quietly reporting a bigger number.");
  ("The three classes were found by reading the rarest answers, not the commonest. The forty most sighted roots were read first and every one of them was a genuine root naming, which is exactly the reading that would have settled the matter if the tail had not been read afterwards.");
  ("Entries the four wordings already read are passed over untouched, so this only ever looks at what is still called bare. That is the same move that found each of the four wordings in turn - print what the readers before you still call silence - and it is the only one of those rounds that could not be done until the word itself was on hand.");
  ("The shared walk asks the four wordings of every explained entry and hands the answer over, which is exactly the question asked first here, so this reading now begins where that answer is empty.");
  ("$plain sample_size");
  ("the count says how many roots to print. It names nothing that runs.");
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let opening_pattern = new RegExp(
    "^\\s*['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let bare_total = 0;
  let opened_quoted = 0;
  let refused = 0;
  let reversed = 0;
  let by_root = {};
  function entry_read(found) {
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let named = property_get(found, "named");
    let named_count = list_size(named);
    let named_empty = equal(named_count, 0);
    if (not(named_empty)) {
      return;
    }
    bare_total = add(bare_total, 1);
    let opening = text_regex_first_groups(explain, opening_pattern);
    let opening_count = list_size(opening);
    let opening_none = equal(opening_count, 0);
    if (opening_none) {
      return;
    }
    opened_quoted = add(opened_quoted, 1);
    let first = list_get(opening, 0);
    let token = text_lower_to(first);
    let s = property_get(entry, word_key);
    let word = text_lower_to(s);
    let names_root = gloss_root_named_reversed_is(word, token);
    if (not(names_root)) {
      refused = add(refused, 1);
      return;
    }
    reversed = add(reversed, 1);
    let root = text_punctuation_edges_removed(token);
    gloss_root_row_note(by_root, root, word, explain);
  }
  await gloss_chapters_roots_named_entries_generic(fn, entry_read);
  let listed = gloss_rows_ranked(by_root);
  let count = Number(sample_size);
  let r = {
    bare_total: bare_total,
    opened_quoted: opened_quoted,
    refused: refused,
    reversed: reversed,
    reversed_roots: list_size(listed),
    reversed_shown: list_take(listed, count),
  };
  return r;
}
