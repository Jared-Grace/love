import { bible_glyph_chapter_lines } from "./bible_glyph_chapter_lines.mjs";
export function bible_glyph_chapter_draw(chapter_code, traditions) {
  "$plain chapter_code";
  "$plain traditions";
  "the code names one chapter and the traditions are lists of glyph redrawings. Both are data to read and neither runs.";
  "One picture Bible chapter drawn as the plain text a reader sees, one verse per line with its number in front.";
  "This is the whole chain in one call - look the chapter up, parse its shorthand, lay any tradition over the vocabulary, draw every verse - and it exists so that reading a chapter costs one command. Before a page exists to show this Bible on, this IS the reader.";
  let lines = bible_glyph_chapter_lines(chapter_code, traditions);
  let text = lines.join("\n");
  return text;
}
