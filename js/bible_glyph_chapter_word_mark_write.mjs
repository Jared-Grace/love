import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { bible_glyph_chapter_word_entry_replace } from "./bible_glyph_chapter_word_entry_replace.mjs";
export async function bible_glyph_chapter_word_mark_write(
  chapter_code,
  word,
  glyph,
) {
  "Draws one plain English word of one written picture Bible chapter with the mark its root has just been seated on, everywhere that word stands alone in the chapter.";
  "$plain chapter_code";
  "the code is a written chapter's own, spelled as the chapter list spells it. It names a file to read and nothing that runs.";
  "$plain word";
  "the word is the English the chapter currently spells out, given exactly as the chapter spells it, capital letter and all. It names text to find and nothing that runs.";
  "$plain glyph";
  "the glyph is a seated mark's own name, one picture or a group joined by a plus. It names what to write in place of the word and nothing that runs.";
  "SEATING A ROOT IS GLOBAL AND REDRAWING IS NOT, which is the whole reason this exists. The moment a Strong's number is given a picture, every chapter that spelled that word in letters is underdrawn, and the gate says so without saying which line. This turns the repair into one named command per chapter rather than one hand edit per occurrence, so the log records which chapters were redrawn for which word.";
  "ALL IT ADDS NOW IS THE DOLLAR, and that is the point of it rather than a sign it should go. A mark written into a chapter is the glyph name with a dollar in front, and knowing that is the one piece of knowledge this command has - everything else it used to do was the same work that badging a name does, and that work moved next door the day the second caller arrived. A name that says what it draws is worth keeping even when what is left under it is one line.";
  arguments_assert(arguments, 3);
  let entry = text_combine("$", glyph);
  let r = await bible_glyph_chapter_word_entry_replace(
    chapter_code,
    word,
    entry,
  );
  return r;
}
