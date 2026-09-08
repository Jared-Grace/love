import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_titles } from "./app_code_lesson_titles.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_title_run_first } from "./app_code_lesson_title_run_first.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { not_equal } from "./not_equal.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_titles_lower() {
  arguments_assert(arguments, 0);
  ("the lessons whose home title opens with a small letter where a capital belongs: the lesson's name, the whole title as drawn, and the words that should have been capitalised");
  ("A title is a name on a list, and a list where some names open with a capital and some do not reads as two lists. Every one of these was written on its own day by whoever was writing that lesson, so the split is not a decision anybody made - it is what happens when nothing says.");
  ("A title that opens with code is left alone, and that is the whole of the exception. console.log, true and !== are spelled the way JavaScript spells them; capitalising one would make it a different word, and on this course a wrong spelling of a name is the thing being taught against. Whether a run is code is read off the drawing rather than guessed at from what it says, so the exception cannot be claimed by a run of ordinary writing that happens to look technical.");
  ("A title opening with a digit or a bracket is left alone too, and not by a rule of its own: those have no letter to change, so upper-casing the first character gives back what was already there and there is nothing to report.");
  let titles = app_code_lesson_titles();
  let lower = [];
  function judge(read) {
    let runs = property_get(read, "runs");
    let first = app_code_lesson_title_run_first(runs);
    if (not(first)) {
      return;
    }
    let code = property_get(first, "code");
    if (code) {
      return;
    }
    let text = property_get(first, "text");
    let words = text_trim(text);
    let capitalised = text_first_upper_to(words);
    let differs = not_equal(capitalised, words);
    if (not(differs)) {
      return;
    }
    let found = {
      fn: property_get(read, "fn"),
      title: property_get(read, "title"),
      words,
    };
    lower.push(found);
  }
  each(titles, judge);
  return lower;
}
