import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { gloss_explain_root_before_said } from "./gloss_explain_root_before_said.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_roots_claimed_before_misread() {
  "Every Cebuano explanation where the root reader hands back a word that is not spelled in the word being explained while the sentence quotes one that is, immediately in front of the words is the root - the sightings where the store is right and the reading is wrong, said with the sentence and both readings so that no one has to take it on trust.";
  "★ NOTHING HERE IS A FAULT IN THE STORE AND EVERY ROW IS A FAULT IN THE READING. That is the opposite of what every other reading beside this one reports, and reading these rows as authoring mistakes would send somebody to correct sentences that are already correct. ‘Awit’ is the root ‘to sing’ says exactly the right thing in exactly the right order; the reader takes the quoted piece after the phrase, which in this shape is the English meaning.";
  "Three things have to hold together before a row is kept, and no one of them would be worth reporting alone. The reader's answer has to be absent from the word, which by itself is ordinary - a root loses a vowel under a suffix and thirteen in every hundred sightings are outside their word for honest reasons. The sentence has to put a quoted word in front of the phrase, which by itself only says the sentence has that shape. And that quoted word has to be spelled inside the word, which is what makes it the root and makes the reader's answer the meaning. Together they leave nothing to judge.";
  "It counts the sightings rather than the sentences, because one explanation is stored again for every place the word appears and the number a reader wants is how much of what people see is affected.";
  arguments_assert(arguments, 0);
  let fn = app_ceb_bible_gloss_generate;
  let chapter_codes = await gloss_chapters_stored(fn);
  let explain_key = gloss_entry_explain_key();
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let strict_total = 0;
  let shaped = 0;
  let rows = [];
  function entries_pass(entries) {
    return entries;
  }
  function folded_of(value) {
    let bare = gloss_word_bare(value);
    let lowered = text_lower_to(bare);
    let folded = gloss_word_folded(lowered);
    return folded;
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
      let claimed_count = list_size(claimed);
      let empty = equal(claimed_count, 0);
      if (empty) {
        return;
      }
      strict_total = add(strict_total, 1);
      let said = gloss_explain_root_before_said(explain);
      let unshaped = null_is(said);
      if (unshaped) {
        return;
      }
      shaped = add(shaped, 1);
      let read = list_get(claimed, 0);
      let word = property_get(entry, word_key);
      let word_folded = folded_of(word);
      let read_folded = folded_of(read);
      let read_inside = text_includes(word_folded, read_folded);
      if (read_inside) {
        return;
      }
      let said_folded = folded_of(said);
      let said_inside = text_includes(word_folded, said_folded);
      if (not(said_inside)) {
        return;
      }
      let row = {
        chapter: chapter_code,
        word,
        read,
        said,
        explain,
      };
      list_add(rows, row);
    }
    each(entries, entry_read);
  }
  await each_async(chapter_codes, chapter_read);
  let r = {
    chapters: list_size(chapter_codes),
    strict_total,
    shaped,
    misread: list_size(rows),
    rows,
  };
  return r;
}
