import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
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
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { list_filter } from "./list_filter.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
export async function app_ceb_bible_gloss_roots_store_outvoted_chapters() {
  "Every chapter of the Cebuano gloss store that takes a word back to a root the dictionary on this disk contradicts, where some other chapter already takes the same word back to the root the dictionary gives.";
  "★ A COUNT OF DISAGREEMENTS IS NOT A WORK LIST AND CANNOT BE TURNED INTO ONE WITHOUT SAYING WHICH SIDE IS WRONG. The reader beside this one gathers a word's roots from the whole store and asks whether the dictionary names any of them, which answers whether the disagreement can be settled and says nothing about where the wrong sentence is. The chapter is thrown away in the gathering, and the chapter is the only thing that would let anybody act. This one keeps it.";
  "Only words the store itself already contradicts are looked at, and only where the dictionary names one of the roots that were given. Both conditions matter. A word every chapter agrees on is not evidence of anything here even if the dictionary disagrees with all of them, because then the dictionary is the outsider and that is a different question with a different answer. A word the dictionary is silent on cannot be settled at all.";
  "The rows are candidates and not corrections. What is proven is that a chapter names a root while the dictionary names another and a sibling chapter agrees with the dictionary; what is not proven is that the sentence around that root says nothing else worth keeping. Nothing here is written to the store.";
  "Measured over the store: 682 entries in 150 chapters, covering 269 distinct words. By kind, 295 name a deeper root than the dictionary, 133 a shallower one, 63 a kin form, and 191 something apart. The 191 is not a fault count. Nine of them are the same word carrying an accent - tamay written as támay, buhi as buhì, kini as kiní - and six more are one root sitting inside the other once the accent is gone, dá inside dala. That leaves 176, because the folding these are compared through evens out the o against the u and the d against the r and does nothing at all about a diacritic.";
  "The walk over the chapters repeats the one in the reader beside it, and the two want collapsing into a single pass that hands back the words with their chapters. That is left undone rather than done badly, because the collapse changes a unit that has already been measured against and the two answers should be seen to agree first.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
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
      let places = property_initialize_list(said, lowered);
      list_add(places, {
        chapter: chapter_code,
        root: root,
      });
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let known = await binisaya_words_known();
  let said_words = object_property_names(said);
  let rows = [];
  let chapters_touched = [];
  function word_read(word) {
    let places = property_get(said, word);
    let roots = [];
    function root_hold(place) {
      let root = property_get(place, "root");
      list_add_if_not_includes(roots, root);
    }
    each(places, root_hold);
    let ways = list_size(roots);
    let one = equal(ways, 1);
    if (one) {
      return;
    }
    let held = property_get_or_null(known, word);
    let none = null_is(held);
    if (none) {
      return;
    }
    let given = property_get(held, "root");
    let bare = equal(given, "");
    if (bare) {
      return;
    }
    let folded = gloss_word_folded(given);
    function agrees_is(root) {
      let root_folded = gloss_word_folded(root);
      let same = equal(root_folded, folded);
      return same;
    }
    let agreeing = list_filter(roots, agrees_is);
    let agreed = list_size(agreeing);
    let unsupported = equal(agreed, 0);
    if (unsupported) {
      return;
    }
    function place_read(place) {
      let root = property_get(place, "root");
      let matches = agrees_is(root);
      if (matches) {
        return;
      }
      let chapter = property_get(place, "chapter");
      let relation = gloss_root_claimed_relation(given, root);
      list_add_if_not_includes(chapters_touched, chapter);
      list_add(rows, {
        chapter: chapter,
        word: word,
        said: root,
        dictionary: given,
        relation: relation,
      });
    }
    each(places, place_read);
  }
  each(said_words, word_read);
  let r = {
    words_claimed: list_size(said_words),
    entries: list_size(rows),
    chapters: list_size(chapters_touched),
    rows: rows,
  };
  return r;
}
