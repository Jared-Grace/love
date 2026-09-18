import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_name_badge_entry } from "./bible_glyph_name_badge_entry.mjs";
import { bible_glyph_chapter_word_entry_replace } from "./bible_glyph_chapter_word_entry_replace.mjs";
export async function bible_glyph_chapter_word_name_badge_write(
  chapter_code,
  word,
) {
  "Marks one proper name of one written picture Bible chapter with the name badge, keeping the letters beside it, everywhere that name stands alone in the chapter.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and nothing that runs.";
  "$plain word";
  "the word is the name the chapter currently spells out, given exactly as the chapter spells it, capital letter and all. It names text to find and is also written back out unchanged, and nothing about it runs.";
  "THE LETTERS STAY AND THAT IS THE WHOLE DIFFERENCE FROM SEATING A MARK. Drawing a word replaces it - the word for fire becomes the fire and the English is gone, because the picture says everything the word said. A name cannot be replaced, because there is no picture of David; so the badge is written in front of the letters rather than over them, and what the reader gains is not a picture but the knowledge that the letters are a name and are meant to stay letters.";
  "SO A CHAPTER IT HAS RUN OVER IS FINISHED RATHER THAN OWING A PICTURE, and that is what it is for. Before the badge, a name in a chapter looked exactly like a word nobody had drawn yet, and the coverage reading counted it as debt; after it, the same letters say a name stands here on purpose. Nothing about the page got more drawn - what changed is that a reader and a reading can both tell the difference.";
  arguments_assert(arguments, 2);
  let entry = bible_glyph_name_badge_entry(word);
  let r = await bible_glyph_chapter_word_entry_replace(
    chapter_code,
    word,
    entry,
  );
  return r;
}
