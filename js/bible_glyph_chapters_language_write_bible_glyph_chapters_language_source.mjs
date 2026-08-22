import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_language_written_mark } from "./bible_glyph_language_written_mark.mjs";
export function bible_glyph_chapters_language_write_bible_glyph_chapters_language_source(
  name_written,
  word,
  chapters_json,
) {
  arguments_assert(arguments, 3);
  ("the whole text of the file being written, as source a person can read.");
  let head =
    "export function " +
    name_written +
    "() {\n" +
    '  "Every picture Bible chapter in plain ' +
    word +
    ", one entry a chapter, for the band a " +
    word +
    ' reader checks themselves against after they have guessed.";\n' +
    '  "' +
    bible_glyph_language_written_mark() +
    '";\n' +
    '  "IT IS COMMITTED RATHER THAN FETCHED because this Bible is meant to reach a phone with no network, and a reveal that needed one would fail in exactly the situation the pictures were chosen for.";\n' +
    '  "IT IS NOT A LINE OF PICTURES AND CANNOT BECOME ONE. A picture verse is marks interleaved into English word order, so a line of pictures in this language would have to be authored a chapter at a time exactly as the English ones were.";\n';
  let body = "  let chapters = " + chapters_json + ";\n  return chapters;\n}\n";
  let file_text = head + body;
  return file_text;
}
