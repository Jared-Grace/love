import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { text_is } from "./text_is.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_all } from "./list_all.mjs";
export function app_code_lesson_steps_braces_is(lesson) {
  arguments_assert(arguments, 1);
  ("whether a lesson runs programs a line at a time and every one of its programs has two or more pairs of braces: the lessons the first milestone gathers, asked for by the human 2026-10-22");
  ("Read off the lesson rather than listed, because the human asked for a milestone chosen by what lessons hold, where a review is chosen by where they stand: a new lesson of this kind joins the milestone without anybody adding it. Measured 2026-10-22: 12 lessons, braces_step to braces_step_thrice.");
  ("Every program and not just one, because a batch is drawn fresh each time, so a test of one program could answer differently from one draw to the next.");
  let guided = property_get_or_null(lesson, "examples_guided");
  let stepped = equal(guided, true);
  if (not(stepped)) {
    return false;
  }
  let batch = property_get(lesson, "batch");
  let items = batch();
  let brace = js_code_brace_left();
  function braces_two_is(item) {
    let question = property_get(item, "question");
    let code = text_is(question);
    if (not(code)) {
      return false;
    }
    let count = text_occurrences_count(question, brace);
    let enough = greater_than_equal(count, 2);
    return enough;
  }
  let all = list_all(items, braces_two_is);
  return all;
}
