import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_verse_numbers } from "./ebible_chapter_verse_numbers.mjs";
import { property_get } from "./property_get.mjs";
import { text_digits_leading } from "./text_digits_leading.mjs";
import { null_is } from "./null_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function ebible_chapter_verse_marks_displaced(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  arguments_assert(arguments, 2);
  ("Every verse mark on one chapter's page whose id names a different verse from the one it prints.");
  ("This is the whole fault stated directly, where the two finders beside it each catch only a symptom of it. A displaced id collides with another mark sometimes, and that is a repeat; it leaves a number unused sometimes, and that is a gap; and often it does neither, and then nothing sees it at all. uigara's Genesis 9 prints 14-15 under id V13, which is not a repeat because V13 is used once and not a gap because every number still appears - and a link to 14 lands nowhere while a link to 13 lands on 14-15.");
  ("Nothing has to be judged to call this wrong, which is what the other two cannot say. A missing number may be a tradition that numbers its verses differently, so a gap has to be held against how many translations share it before it means anything. A mark disagreeing with its own id has no such defence in any language.");
  ("The number a mark prints is read as the digits it starts with, so a part-verse and a merged range both answer for the verse they begin at. A mark printing no digits at all is passed over rather than counted, because there is nothing to compare it against.");
  let opened = await ebible_chapter_verse_numbers(bible_folder, chapter_code);
  let verse_numbers = property_get(opened, "verse_numbers");
  function displaced_is(verse_number) {
    let name = property_get(verse_number, "name");
    let leading = text_digits_leading(name);
    let unreadable = null_is(leading);
    if (unreadable) {
      return false;
    }
    let number = property_get(verse_number, "number");
    let agree = equal(leading, number);
    let disagrees = not(agree);
    return disagrees;
  }
  let displaced = list_filter(verse_numbers, displaced_is);
  return displaced;
}
