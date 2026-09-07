import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_words_roots_self_disagreeing() {
  "The words the Cebuano gloss store takes back to one root in one place of a chapter and to a different root in another place of the same chapter, each named beside the roots it was given.";
  "★ THIS IS THE STORE DISAGREEING WITH ITSELF, WHICH NO CHECK AGAINST AN OUTSIDE DICTIONARY CAN FIND. The root comparisons beside this one ask whether an explanation matches what binisaya.com says, so a word the dictionary has never been asked about is invisible to them and two explanations that are both wrong in the same way come out clean. Here nothing outside is asked at all: one of the two sentences is wrong whatever the dictionary would have said, and the only thing needed to know that is the store itself.";
  "The first root a sentence names is the one compared, and a sentence naming none is passed over rather than counted as disagreeing. An explanation may mention several roots when it is unpicking a compound, and the first is the one it is about; a sentence that claims nothing is not evidence of anything and the reader it is handed to says so itself.";
  "Only sentences within one chapter are set against each other, because that is the reach of everything that rewrites them, and because two chapters may honestly be explaining two different words that happen to be spelled alike.";
  "Each disagreement is handed to the reader that says what kind it is, because they are not one thing and only some of them are faults. One sentence stopping at a form the other went further back through is a difference about how far to go and leaves both readers better off than silence; two roots with nothing in common is one sentence simply being wrong. Where more than two roots were named the first two are the pair read, since the count is already in the roots beside it.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let explain_key = gloss_entry_explain_key();
  let comparable = 0;
  let rows = [];
  function entries_pass(entries) {
    return entries;
  }
  async function chapter_read(chapter_code) {
    let entries = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      entries_pass,
    );
    let said = {};
    function entry_read(entry) {
      let explain = property_get_or_null(entry, explain_key);
      let none = null_is(explain);
      if (none) {
        return;
      }
      let word = property_get(entry, word_key);
      let sentences = property_initialize_list(said, word);
      list_add_if_not_includes(sentences, explain);
    }
    each(entries, entry_read);
    let said_words = object_property_names(said);
    function word_read(word) {
      let sentences = property_get(said, word);
      let ways = list_size(sentences);
      let one = equal(ways, 1);
      if (one) {
        return;
      }
      let named = [];
      let claims = 0;
      function sentence_read(sentence) {
        let claimed = gloss_explain_roots_claimed(sentence);
        let count = list_size(claimed);
        let empty = equal(count, 0);
        if (empty) {
          return;
        }
        claims = add(claims, 1);
        let first = list_get(claimed, 0);
        let lowered = text_lower_to(first);
        list_add_if_not_includes(named, lowered);
      }
      each(sentences, sentence_read);
      let few = less_than(claims, 2);
      if (few) {
        return;
      }
      comparable = add(comparable, 1);
      let roots = list_size(named);
      let agreed = equal(roots, 1);
      if (agreed) {
        return;
      }
      let first_root = list_get(named, 0);
      let second_root = list_get(named, 1);
      let relation = gloss_root_claimed_relation(first_root, second_root);
      list_add(rows, {
        chapter: chapter_code,
        word: word,
        roots: named,
        relation: relation,
      });
    }
    each(said_words, word_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    chapters: list_size(chapter_codes),
    comparable: comparable,
    disagreeing: list_size(rows),
    rows: rows,
  };
  return r;
}
