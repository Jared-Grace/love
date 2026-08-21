import { bible_glyph_chapter_rosetta_lines_file_source } from "./bible_glyph_chapter_rosetta_lines_file_source.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
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
  ("THE TEXT OF THE FILE IS BUILT NEXT DOOR AND NOT HERE, because the command that puts a corrected band over a chapter that already has one needs exactly the same text and must not spell it a second time. What is left here is the one thing that makes this the writer for a chapter with no band: it ends in the writer that refuses a name the repo already answers to.");
  let source =
    await bible_glyph_chapter_rosetta_lines_file_source(chapter_code);
  let f_name = bible_glyph_chapter_rosetta_lines_name(chapter_code);
  await function_source_new(f_name, source);
  return f_name;
}
