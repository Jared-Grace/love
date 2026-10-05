import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_name_badges_seated_draw } from "./bible_glyph_chapter_name_badges_seated_draw.mjs";
export async function bible_glyph_chapters_name_badges_seated_draw() {
  "Draws every name badge whose name the table now draws, over every written picture Bible chapter, committing each chapter as it lands.";
  "IT IS THE SAME LOOP AS THE BADGE DRAWER'S AND FOR THE SAME REASON: each chapter is one file and one idea, so each turn commits itself under the chapter drawer's own name and chapter code, a message that replays. A chapter with no seated badges changes nothing and commits nothing, so this is safe to run again after another name is seated.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let chapters = bible_glyph_chapters();
  let touched = 0;
  let marks = 0;
  for (let chapter of chapters) {
    let told = await function_call_commit(
      bible_glyph_chapter_name_badges_seated_draw,
      [chapter.chapter_code],
    );
    if (equal(told.marks, 0)) {
      continue;
    }
    marks = marks + told.marks;
    touched = touched + 1;
  }
  let r = {
    chapters: chapters.length,
    touched,
    marks,
  };
  return r;
}
