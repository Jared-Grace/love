import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { property_get } from "./property_get.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_all } from "./list_all.mjs";
export function app_code_batch_braces_two_is(items) {
  arguments_assert(arguments, 1);
  ("whether every program of a lesson's batch has two or more pairs of braces: what the milestones gather from, asked for by the human 2026-10-22");
  ("Read off the lesson rather than listed, because the human asked for a milestone chosen by what lessons hold, where a review is chosen by where they stand: a new lesson of this kind joins the milestone without anybody adding it.");
  ("Every program and not just one, because a batch is drawn fresh each time, so a test of one program could answer differently from one draw to the next.");
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
