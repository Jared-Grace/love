import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_word_bare } from "./gloss_word_bare.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { gloss_explain_root_before_said } from "./gloss_explain_root_before_said.mjs";
import { null_is } from "./null_is.mjs";
import { list_get } from "./list_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { gloss_chapters_roots_claimed_entries_generic } from "./gloss_chapters_roots_claimed_entries_generic.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
export async function app_ceb_bible_gloss_roots_claimed_before_misread() {
  "Every Cebuano explanation where the root reader hands back a word that is not spelled in the word being explained while the sentence quotes one that is, immediately in front of the words is the root - the sightings where the store is right and the reading is wrong, said with the sentence and both readings so that no one has to take it on trust.";
  "★ NOTHING HERE IS A FAULT IN THE STORE AND EVERY ROW IS A FAULT IN THE READING. That is the opposite of what every other reading beside this one reports, and reading these rows as authoring mistakes would send somebody to correct sentences that are already correct. ‘Awit’ is the root ‘to sing’ says exactly the right thing in exactly the right order; the reader takes the quoted piece after the phrase, which in this shape is the English meaning.";
  "Three things have to hold together before a row is kept, and no one of them would be worth reporting alone. The reader's answer has to be absent from the word, which by itself is ordinary - a root loses a vowel under a suffix and thirteen in every hundred sightings are outside their word for honest reasons. The sentence has to put a quoted word in front of the phrase, which by itself only says the sentence has that shape. And that quoted word has to be spelled inside the word, which is what makes it the root and makes the reader's answer the meaning. Together they leave nothing to judge.";
  "The sentences that have the shape and are then let go are handed back beside the ones that are kept, each with the test that let it go. A count of what a reading passed over is a number nobody can walk back to the text, and this reading had that defect itself - it said four sentences had the shape and named three, leaving the fourth reachable only by writing another reading. Whichever test let a sentence go is the interesting half: a sentence let go because the reader's answer is already inside the word is ordinary, and one let go because the word it calls the root is not spelled in the word at all is the one shape in this family that would be the store's fault rather than the reading's.";
  "It counts the sightings rather than the sentences, because one explanation is stored again for every place the word appears and the number a reader wants is how much of what people see is affected.";
  "The word is read off the entry with the reader that throws when it is absent, and that is this reading's own choice rather than the shared walk's: the walk hands the whole entry over precisely so that each reading keeps the reader it had.";
  arguments_assert(arguments, 0);
  let word_key = app_shared_gloss_bible_generate_generic_word();
  let strict_total = 0;
  let shaped = 0;
  let rows = [];
  let spared = [];
  function folded_of(value) {
    let bare = gloss_word_bare(value);
    let lowered = text_lower_to(bare);
    let folded = gloss_word_folded(lowered);
    return folded;
  }
  function entry_read(found) {
    let chapter_code = property_get(found, "chapter_code");
    let entry = property_get(found, "entry");
    let explain = property_get(found, "explain");
    let claimed = property_get(found, "claimed");
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
      let let_go = {
        chapter: chapter_code,
        word,
        read,
        said,
        spared_by: "read inside the word",
        explain,
      };
      list_add(spared, let_go);
      return;
    }
    let said_folded = folded_of(said);
    let said_inside = text_includes(word_folded, said_folded);
    if (not(said_inside)) {
      let let_go = {
        chapter: chapter_code,
        word,
        read,
        said,
        spared_by: "said outside the word",
        explain,
      };
      list_add(spared, let_go);
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
  let walked = await gloss_chapters_roots_claimed_entries_generic(
    app_ceb_bible_gloss_generate,
    entry_read,
  );
  let r = {
    chapters: property_get(walked, "chapters"),
    strict_total,
    shaped,
    misread: list_size(rows),
    spared_count: list_size(spared),
    rows,
    spared,
  };
  return r;
}
