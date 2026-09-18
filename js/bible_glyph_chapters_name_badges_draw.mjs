import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_name_badges_draw } from "./bible_glyph_chapter_name_badges_draw.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
export async function bible_glyph_chapters_name_badges_draw() {
  "Marks every proper name standing in plain English letters with the name badge, over every written picture Bible chapter, committing each chapter as it lands.";
  "IT IS A LOOP AND THE COMMAND IS THE THING INSIDE IT, which is the only shape this could honestly take. Each chapter is one file and one idea - these are its names - and no chapter's names have anything to do with any other's, so each turn commits itself under the chapter drawer's own name and its own chapter code. That is a message that replays. The loop around it has no arguments of its own and claims none.";
  "THE NOTE IS SPENT BEFORE THE FIRST CHAPTER, so the first chapter's commit cannot file somebody else's uncommitted work under its name. Anything already waiting goes in as a plain hand-made commit, and from then on each chapter's commit holds exactly that chapter.";
  "A CHAPTER WITH NO NAMES IN LETTERS CHANGES NOTHING AND COMMITS NOTHING, which is what makes this safe to run again after more chapters are written. Most chapters will be in that state the second time round, and the answer then says so by counting no marks rather than by refusing.";
  "WHAT WAS HELD BACK IS GATHERED FROM EVERY CHAPTER, INCLUDING THE ONES THAT DREW NOTHING, and that ordering is the whole of why the gathering sits before the skip. A chapter whose every name was held is a chapter with nought marks, so a skip that came first would drop exactly the chapters with the most to say.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let chapters = bible_glyph_chapters();
  let touched = [];
  let marks = 0;
  let held = [];
  for (let chapter of chapters) {
    let chapter_code = chapter.chapter_code;
    let told = await function_call_commit(
      bible_glyph_chapter_name_badges_draw,
      [chapter_code],
    );
    for (let one of told.held) {
      list_add(held, {
        chapter_code,
        word: one.word,
        named: one.named,
        spelled: one.spelled,
      });
    }
    let none = equal(told.marks, 0);
    if (none) {
      continue;
    }
    marks = add(marks, told.marks);
    list_add(touched, chapter_code);
  }
  let r = {
    chapters: chapters.length,
    touched: touched.length,
    marks,
    held,
  };
  return r;
}
