import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_interlinear_chapter_words } from "./bible_interlinear_chapter_words.mjs";
import { subtract } from "./subtract.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { bible_interlinear_verse_original_text } from "./bible_interlinear_verse_original_text.mjs";
import { bible_interlinear_verse_gloss_text } from "./bible_interlinear_verse_gloss_text.mjs";
import { list_add } from "./list_add.mjs";
import { json_to } from "./json_to.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { function_source_new } from "./function_source_new.mjs";
export async function bible_glyph_chapter_rosetta_lines_write(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter to read and to write out. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("Writes one chapter's two known Rosetta bands out as a committed function of their own, read from the downloaded interlinear beside the hand-written picture chapter.");
  ("THE POINT IS TO CUT THE INTERLINEAR OUT OF THE BROWSER. ",
    fn_name("bible_glyph_chapter_rosetta_verses"),
    " needed the original line and the word-for-word English line, and the only way it had to get them was to ask the interlinear, which is a walk over a table of a few hundred megabytes sitting on local disk. A page that asks that compiles the walk, the downloader, the unzipper and the package installer into itself, and then throws anyway, because the store a browser looks in starts empty. Written out once here, the browser reads two lines of text that are already in the page.");
  ("IT KEEPS ONLY THE VERSES THE PICTURES HAVE REACHED, matching what the reader is shown, because a picture Bible chapter is half written for most of its life and a band with nothing above it teaches nobody anything.");
  ("Running it again for a chapter that already has a file is refused where the file is written, and that is correct: these lines are authored Bible text, and a second run is either a mistake or a change somebody should see as a change.");
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
  let source = bible_glyph_chapter_rosetta_lines_source(f_name, written_json);
  await function_source_new(f_name, source);
  return f_name;
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
    let source = head + body;
    return source;
  }
}
