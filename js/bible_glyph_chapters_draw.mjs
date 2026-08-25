import { bible_glyph_chapter_draw } from "./bible_glyph_chapter_draw.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_draw(traditions) {
  "$plain traditions";
  "the traditions are lists of glyph redrawings. They are data to read and do not run.";
  "Every picture Bible chapter drawn as the plain text a reader sees, one entry per chapter, in the order the chapters were written.";
  "IT EXISTS BECAUSE THE ONLY INSTRUMENT THAT FINDS A BAD LINE IS SOMEBODY READING ONE. Every gate here asks whether a chapter loads, parses, has bands, spells no group by accident; not one of them asks whether the drawn sentence means what the verse means. John 10 passed all of them holding a doubled prohibition mark that read as its own opposite, and a read of the page is what found it. Asking for one chapter at a time made that read cost a command per chapter, which is the reason it had never been done to the other twenty one.";
  "The chapter code rides with each drawing rather than being counted on from the order, so a reader who spots a bad line knows which file to open without going back to the list.";
  let chapters = bible_glyph_chapters();
  let drawings = [];
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let text = bible_glyph_chapter_draw(chapter_code, traditions);
    let drawing = {
      chapter_code,
      text,
    };
    list_add(drawings, drawing);
  }
  return drawings;
}
