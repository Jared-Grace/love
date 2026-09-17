import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_derived } from "./bible_glyph_chapter_derived.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { bible_glyph_word_original_keys } from "./bible_glyph_word_original_keys.mjs";
import { bible_interlinear_verse_original_text } from "./bible_interlinear_verse_original_text.mjs";
import { bible_interlinear_verse_gloss_text } from "./bible_interlinear_verse_gloss_text.mjs";
export async function bible_glyph_chapter_built(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names a chapter to build and nothing that runs.");
  ("One built picture Bible chapter in the form it is kept in: every verse as its words in English order, each word only its Strong's number and its English.");
  ("THE PICTURE IS LEFT OUT ON PURPOSE. A kept chapter that named its pictures would be stale the moment the table seated another word, and a reader's own choice of picture would have nothing to replace. So what is kept is the part that never changes - which word stands where - and the picture is looked up when the page is drawn.");
  ("Each word is a list rather than an object with named fields, because a chapter holds some hundreds of words and the names would be most of its size.");
  ("A WORD'S THIRD ELEMENT IS THE KEYS OF ITS PARTS IN ENGLISH ORDER, so a Hebrew word with and or a joined pronoun draws those parts too. It comes third and not first because chapters already kept hold only the first two, and a page reading one of those must still find the number and the English where they were.");
  ("EACH VERSE ALSO KEEPS ITS WHOLE ORIGINAL LINE AND ITS WHOLE ENGLISH LINE, because the key under a verse shows both and a page on a phone has no interlinear to build them from. The derived chapter walks the interlinear verses in order and makes one verse for each, so the two lists line up by place.");
  ("EACH VERSE ALSO KEEPS ITS WORDS IN THE ORDER THEY WERE WRITTEN, for a reader of the original rather than of the English. Each written word is its letters followed by the keys of its parts, from ",
    fn_name("bible_glyph_word_original_keys"),
    ", so a Hebrew word with and joined to its front keeps and as a part of its own.");
  let testament_name = bible_chapter_testament_name(chapter_code);
  let derived = await bible_glyph_chapter_derived(chapter_code);
  let source = await bible_interlinear_chapter_words(chapter_code);
  let verses = [];
  let index = 0;
  for (let verse of derived.verses) {
    let words = [];
    for (let word of verse.words) {
      list_add(words, [word.strong, word.english, word.keys]);
    }
    let row = list_get(source, index);
    index = add(index, 1);
    let original_words = [];
    for (let word of row.words) {
      let keys = bible_glyph_word_original_keys(word, testament_name);
      list_add(original_words, [word.original, ...keys]);
    }
    list_add(verses, {
      verse_number: verse.verse_number,
      original: bible_interlinear_verse_original_text(row),
      english: bible_interlinear_verse_gloss_text(row),
      words,
      original_words,
    });
  }
  let built = {
    chapter_code,
    verses,
  };
  return built;
}
