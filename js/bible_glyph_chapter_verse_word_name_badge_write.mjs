import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_name_badge_entry } from "./bible_glyph_name_badge_entry.mjs";
import { bible_glyph_chapter_verse_word_entry_replace } from "./bible_glyph_chapter_verse_word_entry_replace.mjs";
export async function bible_glyph_chapter_verse_word_name_badge_write(
  chapter_code,
  verse_number,
  word,
) {
  "Marks one proper name with the name badge, keeping the letters beside it, everywhere that name stands in ONE verse of a written picture Bible chapter.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and write back, and nothing that runs.";
  "$plain verse_number";
  "the number of the verse within that chapter, counted from one. It is compared against the numbers the file carries and nothing about it runs.";
  "$plain word";
  "the word is the name the verse currently spells out, given exactly as the verse spells it, capital letter and trailing punctuation and all. It names text to find and is written back out unchanged behind the badge, and nothing about it runs.";
  "THE LETTERS STAY AND THAT IS THE WHOLE DIFFERENCE FROM SEATING A MARK. Drawing a word replaces it - the word for fire becomes the fire and the English is gone, because the picture says everything the word said. A name cannot be replaced, because there is no picture of David; so the badge is written in front of the letters rather than over them, and what the reader gains is not a picture but the knowledge that the letters are a name and are meant to stay letters.";
  "IT IS THE VERSE-SIZED TWIN AND THE VERSE IS THE SIZE THE READING ANSWERS IN. The name reading says which verse of the original carries a name; the chapter-wide twin can only be told the word, so it must be held back wherever the English spells a name more often than the original does, and in Genesis twenty seven that held back Isaac, Esau, Rebekah and Jacob. Asked verse by verse there is nothing to hold back.";
  arguments_assert(arguments, 3);
  let entry = bible_glyph_name_badge_entry(word);
  let r = await bible_glyph_chapter_verse_word_entry_replace(
    chapter_code,
    verse_number,
    word,
    entry,
  );
  return r;
}
