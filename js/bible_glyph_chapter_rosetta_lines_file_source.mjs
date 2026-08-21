import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { subtract } from "./subtract.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_interlinear_verse_original_text } from "./bible_interlinear_verse_original_text.mjs";
import { bible_interlinear_verse_gloss_text } from "./bible_interlinear_verse_gloss_text.mjs";
import { list_add } from "./list_add.mjs";
import { json_to } from "./json_to.mjs";
export async function bible_glyph_chapter_rosetta_lines_file_source(
  chapter_code,
) {
  "$plain chapter_code";
  "the code names one chapter to read. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("The whole text of one chapter's Rosetta band file, built from the downloaded interlinear beside the hand-written picture chapter, as source a person can read. It writes nothing.");
  ("IT IS SEPARATE FROM THE WRITING BECAUSE TWO COMMANDS NEED THE SAME TEXT AND MUST NOT SPELL IT TWICE. One of them lays a band file down for a chapter that has none and refuses a chapter that already has one; the other puts a corrected band over a chapter that already has one. Those two differ by which writer they end in and by nothing else, and the part they share is four paragraphs of prose stamped into the file - which is exactly the shape that drifts when somebody improves one copy.");
  ("IT KEEPS ONLY THE VERSES THE PICTURES HAVE REACHED, matching what the reader is shown, because a picture Bible chapter is half written for most of its life and a band with nothing above it teaches nobody anything.");
  ("WHAT COMES OUT DEPENDS ON THE INTERLINEAR AND ON THE READING OF ITS FILLER, so it is not fixed for all time. On 2026-08-21 the reading of filler was widened to drop the dash the tables print where the original says a word English does not say, and every band file written before that day held those dashes in its English line - which read as scripture with punctuation in it that nobody had put there. That is why the second command exists.");
  let chapter = bible_glyph_chapter(chapter_code);
  let verses = await bible_interlinear_chapter_words(chapter_code);
  let lines = [];
  for (let verse of chapter.verses) {
    let index = subtract(verse.verse_number, 1);
    let interlinear = list_get_or_null(verses, index);
    let missing = null_is(interlinear);
    if (missing) {
      continue;
    }
    let original = bible_interlinear_verse_original_text(interlinear);
    let english = bible_interlinear_verse_gloss_text(interlinear);
    let line = {
      verse_number: verse.verse_number,
      original,
      english,
    };
    list_add(lines, line);
  }
  let written = {
    chapter_code,
    verses: lines,
  };
  let written_json = json_to(written);
  let f_name = bible_glyph_chapter_rosetta_lines_name(chapter_code);
  let file_text = bible_glyph_chapter_rosetta_lines_source(
    f_name,
    written_json,
  );
  return file_text;
  function bible_glyph_chapter_rosetta_lines_source(
    name_written,
    chapter_json,
  ) {
    "the whole text of the file being written, as source a person can read.";
    let head =
      "export function " +
      name_written +
      "() {\n" +
      '  "One chapter of the picture Bible as its two known Rosetta bands: each verse in the language it was written in, and the same verse word for word in English.";\n' +
      '  "THIS FILE IS WRITTEN BY A COMMAND AND NOT BY HAND. It is the interlinear read once, at authoring time, for the verses the hand-written picture chapter has reached.";\n' +
      '  "IT IS COMMITTED RATHER THAN FETCHED because the browser is the one place these lines are read and the thing that builds them cannot run there. Authored Bible text already lives as committed functions here, and this is authored Bible text.";\n' +
      '  "Both bands are text anybody may be shown: the original is the public-domain base text, and the English is the interlinear own word-for-word column rather than a published translation.";\n';
    let body = "  let chapter = " + chapter_json + ";\n  return chapter;\n}\n";
    let file_text2 = head + body;
    return file_text2;
  }
}
