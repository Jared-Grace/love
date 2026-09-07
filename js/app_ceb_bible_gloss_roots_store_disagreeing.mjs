import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_get } from "./list_get.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
export async function app_ceb_bible_gloss_roots_store_disagreeing() {
  "Every word the Cebuano gloss store takes back to one root in one chapter and to a different root in another, named beside all the roots it was given, what kind of difference it is, and what the dictionary already on this disk says about it.";
  "★ THE CHAPTER WAS NEVER THE RIGHT BOUNDARY FOR THIS QUESTION AND WAS BORROWED FROM SOMETHING ELSE. Its sibling compares sentences inside one chapter because that is as far as a handed-in correction reaches, which is the right scope for asking what a correction would damage and the wrong one for asking whether the store is telling the truth. A word given one root in Psalms and another in John is exactly as contradictory as one given two roots in the same psalm, and only the first of those was being looked for.";
  "A word may honestly be two words spelled alike, and across a whole bible that is likelier than within one chapter. This is why the kind of difference is reported beside the roots rather than the count being handed over on its own - two roots with nothing in common is where that reading belongs, and it is also where a genuine pair of look-alike words would show up.";
  "Two of the rows are the root reader handing back an English phrase rather than a root, from sentences that said root \"to give\" and root \"to sing\", and they are left in rather than filtered out. A filter would have to guess which spaced answers are wrong, and the two here are visible at a glance beside their real roots. Dropping them takes the count from 326 to 324, which is small enough that no reading of this changes.";\n  "The dictionary is read off the disk and nothing is asked of the site. Where it names one of the roots the store gave, the disagreement is over without anybody reading it.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let said = {};
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
      let claimed = gloss_explain_roots_claimed(explain);
      let count = list_size(claimed);
      let empty = equal(count, 0);
      if (empty) {
        return;
      }
      let word = property_get(entry, word_key);
      let lowered = text_lower_to(word);
      let first = list_get(claimed, 0);
      let root = text_lower_to(first);
      let roots = property_initialize_list(said, lowered);
      list_add_if_not_includes(roots, root);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let known = await binisaya_words_known();
  let said_words = object_property_names(said);
  let rows = [];
  let settled = 0;
  let silent = 0;
  function word_read(word) {
    let roots = property_get(said, word);
    let ways = list_size(roots);
    let one = equal(ways, 1);
    if (one) {
      return;
    }
    let first_root = list_get(roots, 0);
    let second_root = list_get(roots, 1);
    let relation = gloss_root_claimed_relation(first_root, second_root);
    let held = property_get_or_null(known, word);
    let none = null_is(held);
    let root = none ? "" : property_get(held, "root");
    let bare = equal(root, "");
    if (bare) {
      silent = add(silent, 1);
    }
    if (not(bare)) {
      let folded = gloss_word_folded(root);
      function matches_is(named) {
        let named_folded = gloss_word_folded(named);
        let same = equal(named_folded, folded);
        return same;
      }
      let hits = list_filter(roots, matches_is);
      let hit_count = list_size(hits);
      let b = equal(hit_count, 0);
      let found = not(b);
      if (found) {
        settled = add(settled, 1);
      }
    }
    list_add(rows, {
      word: word,
      roots: roots,
      relation: relation,
      dictionary: root,
    });
  }
  each(said_words, word_read);
  let r = {
    words_claimed: list_size(said_words),
    disagreeing: list_size(rows),
    settled: settled,
    silent: silent,
    rows: rows,
  };
  return r;
}
