import { gloss_rows_ranked } from "./gloss_rows_ranked.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_named } from "./gloss_explain_roots_named.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { text_regex_first_groups } from "./text_regex_first_groups.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_root_named_reversed_is } from "./gloss_root_named_reversed_is.mjs";
import { text_punctuation_edges_removed } from "./text_punctuation_edges_removed.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
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
  ("$plain sample_size");
  ("the count says how many roots to print. It names nothing that runs.");
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let opening_pattern = new RegExp(
    "^\\s*['‘\"]([^'’\"]+?)[,.;:!?]?['’\"]",
    "g",
  );
  let bare_total = 0;
  let opened_quoted = 0;
  let refused = 0;
  let reversed = 0;
  let by_root = {};
  function entries_pass(entries) {
    return entries;
  }
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_pass,
    );
    function entry_read(entry) {
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let named = gloss_explain_roots_named(explain);
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
      let row = property_get_or_null(by_root, root);
      let fresh = null_is(row);
      if (fresh) {
        let made = {
          named_root: root,
          sightings: 0,
          words: [],
          explain: explain,
        };
        property_set(by_root, root, made);
        row = made;
      }
      let seen = property_get(row, "sightings");
      let value = add(seen, 1);
      property_set(row, "sightings", value);
      let words = property_get(row, "words");
      list_add_if_not_includes(words, word);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
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
