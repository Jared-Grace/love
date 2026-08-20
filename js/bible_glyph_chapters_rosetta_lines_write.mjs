import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rosetta_lines_name } from "./bible_glyph_chapter_rosetta_lines_name.mjs";
import { function_exists } from "./function_exists.mjs";
import { bible_glyph_chapter_rosetta_lines_write } from "./bible_glyph_chapter_rosetta_lines_write.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_rosetta_lines_write() {
  arguments_assert(arguments, 0);
  "Writes out the two known Rosetta bands for every picture Bible chapter that has not had them written yet, and says which ones it wrote.";
  "IT FINDS ITS OWN SET rather than being handed one. The chapters that exist are already answered next door, so a chapter authored tomorrow is covered by running this again and by nothing else being edited. A list handed in here would be a second place the chapters are written down, and it would go stale the first time somebody added one.";
  "A chapter whose file is already there is stepped over rather than written again. These lines are authored Bible text: replacing them silently on every run would hide a change to the text inside a command that reads as a no-op.";
  "It hands back the names it wrote, so a run that found everything already done says so by handing back nothing at all rather than by looking exactly like a run that did the work.";
  let chapters = bible_glyph_chapters();
  let written = [];
  for (let chapter of chapters) {
    let f_name = bible_glyph_chapter_rosetta_lines_name(chapter.chapter_code);
    let exists = await function_exists(f_name);
    if (exists) {
      continue;
    }
    await bible_glyph_chapter_rosetta_lines_write(chapter.chapter_code);
    list_add(written, f_name);
  }
  return written;
}
