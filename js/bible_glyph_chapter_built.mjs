import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_derived } from "./bible_glyph_chapter_derived.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapter_built(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code names one chapter, spelled as the chapter codes spell it. It names a chapter to build and nothing that runs.");
  ("One built picture Bible chapter in the form it is kept in: every verse as its words in English order, each word only its Strong's number and its English.");
  ("THE PICTURE IS LEFT OUT ON PURPOSE. A kept chapter that named its pictures would be stale the moment the table seated another word, and a reader's own choice of picture would have nothing to replace. So what is kept is the part that never changes - which word stands where - and the picture is looked up when the page is drawn.");
  ("Each word is a pair rather than an object with named fields, because a chapter holds some hundreds of words and the names would be most of its size.");
  let derived = await bible_glyph_chapter_derived(chapter_code);
  let verses = [];
  for (let verse of derived.verses) {
    let words = [];
    for (let word of verse.words) {
      list_add(words, [word.strong, word.english]);
    }
    list_add(verses, {
      verse_number: verse.verse_number,
      words,
    });
  }
  let built = {
    chapter_code,
    verses,
  };
  return built;
}
