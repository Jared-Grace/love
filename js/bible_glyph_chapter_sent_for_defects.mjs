import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapter_references } from "./bible_glyph_chapter_references.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
export async function bible_glyph_chapter_sent_for_defects(
  f_name,
  sent_for,
  defect_of,
) {
  "$plain f_name";
  "the name is the sending-for function's own, written into every record this leaves behind. It is a word to print and does not run.";
  arguments_assert(arguments, 3);
  ("Sends for every picture Bible chapter one at a time and answers with what went wrong, as a list a gate can hold against empty. Read-only.");
  ("IT IS THE WALK AND NOT THE JUDGMENT. What counts as a wrong answer differs by what is being sent for - one gate compares the text against the text the repo holds, another asks whether what came back calls itself the chapter that was asked for - so the deciding is handed over and only the sending, the catching and the collecting live here.");
  ("A CHAPTER THAT REFUSES IS COLLECTED RATHER THAN LET OUT, AND THAT IS THE WHOLE REASON THIS IS ONE FUNCTION. A refusal let out still fails the gate, so nothing looks wrong - but it ends the walk where it happened, and the gate then reports one chapter and asks about nothing after it. Two gates were doing exactly that until the first of September 2026, and both promised in their own prose to collect everything before speaking. Written once, the promise is kept once and cannot come apart again in the copy nobody reread.");
  ("THE REFUSAL IS CARRIED BACK IN ITS OWN WORDS RATHER THAN COUNTED, because the reasons want opposite repairs. A code nothing has been written for is a line to add in the sending; a file that throws while loading itself is a fault inside that file and adding a line would not touch it. A catch that keeps only the fact of a refusal turns every reason into the same reason, and reports the second as the first in a sentence confident enough to be acted on.");
  ("EVERY RECORD NAMES THE FUNCTION AT FAULT. A red gate whose complaint names nobody cannot be shown to be about code some app does not carry, so it holds every app in the repo out of a deployment. A chapter code alone is worse than nothing there: it matches no app's reach, so the gate is set aside for every app instead of blocking the one it is really about.");
  let references = bible_glyph_chapter_references();
  let wrong = [];
  for (let chapter of references) {
    let chapter_code = chapter.chapter_code;
    async function chapter_sent_for() {
      let got = await sent_for(chapter_code);
      return got;
    }
    let answered = await catch_message_async(chapter_sent_for);
    let came = property_get(answered, "ok");
    if (not(came)) {
      list_add(wrong, {
        fn: f_name,
        asked_for: chapter_code,
        refused: property_get(answered, "message"),
      });
      continue;
    }
    let value = property_get(answered, "value");
    let defect = defect_of(chapter_code, value);
    let none = null_is(defect);
    if (none) {
      continue;
    }
    list_add(wrong, defect);
  }
  return wrong;
}
