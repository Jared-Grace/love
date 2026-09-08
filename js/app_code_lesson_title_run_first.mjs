import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_title_run_first(runs) {
  arguments_assert(arguments, 1);
  ("the first thing a lesson's home title says after the category word: the run itself, so a caller can see both what it says and whether it is code; null when the title says nothing after the category");
  ("The category is found by the colon that closes it rather than by being counted off the front, because it is drawn as its own run in some titles and joined to the space after it in others - and the colon is the one thing every one of them ends with.");
  ("Runs holding nothing but space are stepped over. The word after the category is nearly always preceded by one, and a caller asking what the title starts with means the writing, not the gap.");
  let found = null;
  let past_category = false;
  function look(run) {
    let text = property_get(run, "text");
    let tidy = text_trim(text);
    if (found) {
      return;
    }
    if (past_category) {
      if (tidy) {
        found = run;
      }
      return;
    }
    let code = property_get(run, "code");
    if (code) {
      return;
    }
    if (text_ends_with(tidy, ":")) {
      past_category = true;
    }
  }
  each(runs, look);
  return found;
}
