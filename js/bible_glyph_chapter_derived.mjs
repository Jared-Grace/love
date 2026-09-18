import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { bible_glyph_roots_drawn_lookup } from "./bible_glyph_roots_drawn_lookup.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { add } from "./add.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { bible_glyph_word_crasis_parts } from "./bible_glyph_word_crasis_parts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { bible_glyph_gloss_supplied_dropped } from "./bible_glyph_gloss_supplied_dropped.mjs";
import { bible_glyph_hebrew_word_english_keys } from "./bible_glyph_hebrew_word_english_keys.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_derived(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names a chapter to read and nothing that runs.");
  ("One picture Bible chapter BUILT rather than written: every original word of every verse, put in the order the English says it, carrying its Strong's number, its English, and the picture the root table seats under that number.");
  ("IT KEEPS THE NUMBER AND NOT ONLY THE PICTURE, which is the reason it exists. A chapter that stores a finished picture on an English word has to be edited every time the table seats something new, and a reader's own choice of picture has nothing to attach to. A chapter that stores the number is finished once: the picture is looked up when the page is drawn, from whatever table - or whatever reader's override - is in force then.");
  ("THE ORDER IS THE ENGLISH ORDER AND IT IS NOT GUESSED. Every interlinear row carries the place its English chunk takes in the Berean sentence, a number that runs without a gap or a repeat across the whole table, so sorting by it puts the original words in the order an English reader meets them.");
  ("A WORD WHOSE ENGLISH WAS PULLED INTO A NEIGHBOUR still has its own place in that order and still carries its number, so it keeps its picture; only its English is empty, because the neighbour already says it.");
  ("A GREEK WORD THAT IS KAI FUSED ONTO ANOTHER is drawn as the two words it is, when its English says the kai, so the and in and I keeps the picture kai has everywhere else. The splitting is ",
    fn_name("bible_glyph_word_crasis_parts"),
    ".");
  ("EACH WORD ALSO KEEPS THE KEYS OF ITS PARTS in the order English says them, so a Hebrew word with and or in joined to its front, or his at its end, draws that small word too rather than letting the stem's picture stand for the whole English chunk. The order is ",
    fn_name("bible_glyph_hebrew_word_english_keys"),
    "; a Greek word, already split at crasis, is its one number.");
  ("THE ENGLISH KEPT ON A WORD IS THE INTERLINEAR'S CHUNK WITH THE TRANSLATORS' OWN WORDS TAKEN OUT, by ",
    fn_name("bible_glyph_gloss_supplied_dropped"),
    ". It is dropped here rather than when the page is drawn because the English is a stand-in for a picture, and a stand-in for a word nobody wrote is not wanted at any later step either.");
  ("The verses are numbered by their place, the way the authoring draft numbers them, so the two can be laid side by side.");
  let testament_name = bible_chapter_testament_name(chapter_code);
  let right = ebible_testament_old_name();
  let hebrew = equal(testament_name, right);
  let roots = bible_glyph_roots_testament_table(testament_name);
  let drawn = bible_glyph_roots_drawn_lookup(roots);
  let verses_source = await bible_interlinear_chapter_words(chapter_code);
  function gloss_sort_of(word) {
    let sort = word.gloss_sort;
    return sort;
  }
  let verses = [];
  let verse_number = 0;
  for (let verse of verses_source) {
    verse_number = add(verse_number, 1);
    let ordered = list_copy(verse.words);
    list_sort_number_mapper(ordered, gloss_sort_of);
    let words = [];
    for (let word of ordered) {
      let parts = bible_glyph_word_crasis_parts(
        word.strong,
        word.gloss,
        testament_name,
      );
      for (let part of parts) {
        let seated = property_get_or_null(drawn, part.strong);
        let glyph = null_is(seated) ? "" : seated;
        let filler = bible_glyph_gloss_placeholder_is(part.gloss);
        let said = bible_glyph_gloss_supplied_dropped(part.gloss);
        let english = filler ? "" : said;
        let keys = hebrew
          ? bible_glyph_hebrew_word_english_keys(word)
          : [part.strong];
        list_add(words, {
          strong: part.strong,
          english,
          glyph,
          keys,
        });
      }
    }
    list_add(verses, {
      verse_number,
      words,
    });
  }
  let chapter = {
    chapter_code,
    verses,
  };
  return chapter;
}
