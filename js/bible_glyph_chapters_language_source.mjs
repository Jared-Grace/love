import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_language_written_mark } from "./bible_glyph_language_written_mark.mjs";
import { json_to } from "./json_to.mjs";
import { each } from "./each.mjs";
export function bible_glyph_chapters_language_source(
  name_written,
  word,
  chapters_json,
  credit_lines,
) {
  arguments_assert(arguments, 4);
  ("the whole text of the file being written, as source a person can read.");
  ("THE CREDIT COMES IN RATHER THAN BEING SPELLED HERE. Who the text belongs to and on what terms is a property of the translation that was fetched, and this function never learns which one that was - it is handed a name, a word and the chapters. A sentence about the terms written into this function would be one claim standing for every language at once, which is how the mark above it came to say 'public-domain bible' over two translations that are offered under Creative Commons Attribution Share-Alike.");
  ("THE CREDIT LINES ARE WRITTEN OUT AS JSON AND THE REST BY HAND, and the difference is not tidiness. These lines are somebody else's words - Arabic script, a copyright sign, whatever punctuation the publisher used - and a quote in one of them written out by joining strings makes a file that does not parse. The sentences above them are this repo's own and hold nothing that needs escaping.");
  ("THE CREDIT SITS ABOVE THE CHAPTERS AND NOT BELOW, so that the first thing a person opening the file reads is whose words the rest of it is.");
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
    '";\n';
  let credit = "";
  function lambda(line) {
    credit = credit + "  " + json_to(line) + ";\n";
  }
  each(credit_lines, lambda);
  let sentences =
    '  "IT IS COMMITTED RATHER THAN FETCHED because this Bible is meant to reach a phone with no network, and a reveal that needed one would fail in exactly the situation the pictures were chosen for.";\n' +
    '  "IT IS NOT A LINE OF PICTURES AND CANNOT BECOME ONE. A picture verse is marks interleaved into English word order, so a line of pictures in this language would have to be authored a chapter at a time exactly as the English ones were.";\n';
  let body = "  let chapters = " + chapters_json + ";\n  return chapters;\n}\n";
  let file_text = head + credit + sentences + body;
  return file_text;
}
