import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_includes } from "./text_includes.mjs";
export function app_code_happy_trail_quizzes_skipped(trail) {
  "the quiz screens a walk went past in a single press, read back out of the trail it left";
  "A quiz costs at least two presses: the answer, and then the way on. One press means the walk found the way on already standing there before the question had been answered, pressed it, and never answered anything - so the quiz was on the screen and was not taken.";
  "This is the check on the CHECK. The walk is kept honest by an ordering nothing enforces: every screen marks its way on, and a quiz marks its answer too, standing earlier in the page, so the earliest mark is the answer and the way on is only reached afterwards. Draw the same two the other way round and the walk still passes, still reports thousands of steps, and has quietly stopped asking any questions. Nothing else would go red, because from the outside a course walked without answering looks exactly like a course walked correctly.";
  "It reads the address rather than the screen, because the address is all a finished walk kept - and the address is enough: the quiz says which lesson and which question it is, so a run of steps sharing one says how many presses that one question took.";
  arguments_assert(arguments, 1);
  let key = app_code_screen_hash_key();
  let screen = fn_name("app_code_quiz");
  let quiz_marker = text_combine_multiple([key, "=", screen]);
  ("the steps are gathered into runs of one address rather than counted per address, because a course comes back: a review asks about a lesson already walked, and the same question answered properly twice would otherwise be one address seen four times and look fine even if each visit had been skipped");
  let runs = [];
  let run = null;
  function lambda(step) {
    let url = property_get(step, "url");
    let carrying = null_not_is(run);
    let same = false;
    if (carrying) {
      let url_run = property_get(run, "url");
      same = equal(url_run, url);
    }
    if (same) {
      let presses = property_get(run, "presses");
      property_set(run, "presses", presses + 1);
      return;
    }
    run = {
      url,
      presses: 1,
    };
    list_add(runs, run);
  }
  each(trail, lambda);
  function lambda2(r) {
    let presses = property_get(r, "presses");
    let one = equal(presses, 1);
    if (not(one)) {
      return false;
    }
    let url = property_get(r, "url");
    let quiz = text_includes(url, quiz_marker);
    return quiz;
  }
  let skipped = list_filter(runs, lambda2);
  return skipped;
}
