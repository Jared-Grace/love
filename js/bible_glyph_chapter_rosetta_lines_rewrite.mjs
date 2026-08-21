import { bible_glyph_chapter_rosetta_lines_file_source } from "./bible_glyph_chapter_rosetta_lines_file_source.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_source_formatted_write } from "./function_source_formatted_write.mjs";
export async function bible_glyph_chapter_rosetta_lines_rewrite(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter whose bands are to be built again. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("Builds one chapter's Rosetta bands again from the interlinear and puts them over the band file that is already there. Hands back the name of the file it wrote.");
  ("IT IS THE HALF ITS NEIGHBOUR REFUSES. The writer beside it lays a band down for a chapter that has none and refuses a chapter that already has one, and that refusal is right for a stray second run: these lines are Bible text, and replacing them silently on every run would hide a change to the text inside a command that reads as a no-op. But it is wrong for the case where the way the text is BUILT has been corrected, because then the file on disk is the old answer and nothing at all can reach it.");
  ("SO THE REFUSAL IS KEPT AND THE OVERRIDE IS NAMED. A caller has to say rewrite to get a rewrite, and the word is in the name of the command and in the commit message it leaves, which is what the neighbour's paragraph meant by a change somebody should see as a change. Turning the refusal into a flag on the writer would have made the same command mean two things depending on an argument, and the log would have stopped saying which.");
  ("IT IS WORTH RUNNING ONLY WHEN THE BUILDING HAS CHANGED. The interlinear underneath is a downloaded table that does not move, so two runs a minute apart write the same bytes and git records nothing. What moves is the reading of the interlinear's own filler notation, and on 2026-08-21 that reading was widened to drop the dash - which is what this was written for.");
  let source =
    await bible_glyph_chapter_rosetta_lines_file_source(chapter_code);
  let f_name = bible_glyph_chapter_rosetta_lines_name(chapter_code);
  await function_source_formatted_write(f_name, source);
  return f_name;
}
