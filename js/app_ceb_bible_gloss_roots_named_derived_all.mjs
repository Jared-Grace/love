import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { add } from "./add.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_set } from "./property_set.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_ceb_bible_gloss_roots_named_derived_all() {
  "Every entry in the Cebuano gloss store naming a root that the dictionary on this disk says came from somewhere else, counted over the whole store rather than over the part of it that argues with itself, and gathered by the named root so a repeated habit shows as one row.";
  "★ EVERY READING BEFORE THIS ONE LOOKED ONLY WHERE THE STORE CONTRADICTED ITSELF, AND A HABIT DOES NOT CONTRADICT ANYTHING. The chain that found the causative pa being kept inside roots started from words given two different roots in two different chapters, so a word every chapter agrees about could not appear in it however wrong the agreement was. If every sentence naming pasalamat names pasalamat, there is no disagreement to notice and the fault is invisible. The 118 entries found that way were never the size of the fault.";
  "Nothing here needs the store to disagree with anybody. An entry is counted when the root it names is a word the dictionary has been asked about and answers with a source of its own, which shows the named form is derived whatever any other chapter said.";
  "Gathered by the named root, because the number worth having is how many wrong ideas there are and not how many times they were written. One rule kept about one prefix can account for hundreds of entries, and hundreds of entries is the cost of fixing it rather than the size of the thinking behind it.";
  "Measured: 258651 entries, 42484 of them naming a root, and 4159 name one the dictionary takes back further - from only 293 distinct named roots. Roots beginning pa account for 71 of those and 1856 of the entries, near enough half. Roots beginning ka account for 40 and 225.";
  "It is a candidate list and not a fault list, and the top of it is what shows why. One named root, paagi taken back to agi, is 952 entries by itself, which is near a quarter of the whole; and paagi is an ordinary Cebuano noun meaning a way of doing something, so a sentence naming it as the root of a word is defensible even though the dictionary derives it from agi. The same goes for tinuod, higugma, maayo, mahimo and matuod below it. These are words a reader knows, and the dictionary going behind them is the same stopping-short habit read from the other end.";
  "That correction lands on the reading beside this one and it is worth being plain about. The 43 rows found earlier were sharper because the store was also contradicting itself about those words, and being unsure is evidence: where every chapter agrees on paagi the agreement is probably a considered one, and where the chapters split the store had no settled idea to defend. The narrower reading was not a smaller window onto the same fault. It was a better-aimed one, and this wider count is the noisier number of the two.";
  "Nothing is asked of the site and nothing is written.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let known = await binisaya_words_known();
  let entries_seen = 0;
  let named_seen = 0;
  let by_root = {};
  let derived_entries = 0;
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
      entries_seen = add(entries_seen, 1);
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
      named_seen = add(named_seen, 1);
      let first = list_get(claimed, 0);
      let root = text_lower_to(first);
      let held = property_get_or_null(known, root);
      let unasked = null_is(held);
      if (unasked) {
        return;
      }
      let deeper = property_get(held, "root");
      let silent = equal(deeper, "");
      if (silent) {
        return;
      }
      let folded_root = gloss_word_folded(root);
      let folded_deeper = gloss_word_folded(deeper);
      let itself = equal(folded_root, folded_deeper);
      if (itself) {
        return;
      }
      derived_entries = add(derived_entries, 1);
      let word = property_get(entry, word_key);
      let lowered = text_lower_to(word);
      let held_root = property_get_or_null(by_root, root);
      let fresh = null_is(held_root);
      if (fresh) {
        let made = {
          said: root,
          under_it: deeper,
          words: [],
          entries: 0,
        };
        property_set(by_root, root, made);
        held_root = made;
      }
      let left = property_get(held_root, "entries");
      let value = add(left, 1);
      property_set(held_root, "entries", value);
      let words = property_get(held_root, "words");
      list_add_if_not_includes(words, lowered);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let root_names = object_property_names(by_root);
  let listed = [];
  function root_read(name) {
    let held = property_get(by_root, name);
    let list = property_get(held, "words");
    let value2 = list_size(list);
    property_set(held, "words_count", value2);
    list_add(listed, held);
  }
  each(root_names, root_read);
  function entries_of(held) {
    let count = property_get(held, "entries");
    return count;
  }
  list_sort_number_mapper_reverse(listed, entries_of);
  let r = {
    entries_seen: entries_seen,
    naming_a_root: named_seen,
    derived_entries: derived_entries,
    derived_roots: list_size(listed),
    listed: listed,
  };
  return r;
}
