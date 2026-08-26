import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { property_get } from "./property_get.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { bible_glyph_chapter_negations_draw } from "./bible_glyph_chapter_negations_draw.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_negations_draw() {
  "Every English negation left in plain letters across every chapter of the picture Bible already written, drawn as the picture the negation roots are seated on.";
  "IT FINDS ITS OWN SET RATHER THAN TAKING ONE. Which chapters have an undrawn negation in them is not a choice anybody makes - it is whatever seating a negation root left behind - so a caller handing over a list could only ever be repeating a reading it had just done, and would drift from it the moment the next chapter was authored.";
  "EACH CHAPTER COMMITS AS IT LANDS, under its own chapter code, because the chapters are independent of one another and a single commit at the end would claim one command for work spread over a folder many hands are editing at once. Anything already noted as changed is committed first under the bare word, so the first chapter cannot file somebody else's leftovers under its name.";
  "The verses one chapter could not settle are carried out with it rather than summed away, because they are the whole output a person still has to read: a verse where the count of plain negations and the count in the original disagree is a verse where nobody yet knows which English word came from which.";
  arguments_assert(arguments, 0);
  await ai_git_noted();
  let chapters = bible_glyph_chapters();
  let drawn = 0;
  let reports = [];
  for (let chapter of chapters) {
    let chapter_code = property_get(chapter, "chapter_code");
    let report = await function_call_commit(
      bible_glyph_chapter_negations_draw,
      [chapter_code],
    );
    let count = property_get(report, "drawn");
    drawn = add(drawn, count);
    let quiet = equal(count, 0);
    let left = property_get(report, "left");
    let settled = equal(left.length, 0);
    let news = not(quiet);
    let unsettled = not(settled);
    if (news) {
      list_add(reports, report);
      continue;
    }
    if (unsettled) {
      list_add(reports, report);
    }
  }
  let r = {
    drawn,
    reports,
  };
  return r;
}
