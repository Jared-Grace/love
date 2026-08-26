import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { app_code_quiz_string_tokens_merge } from "./app_code_quiz_string_tokens_merge.mjs";
import { js_tokens_to_code } from "./js_tokens_to_code.mjs";
import { text_index_of_from_start } from "./text_index_of_from_start.mjs";
import { list_reduce } from "./list_reduce.mjs";
import { text_take } from "./text_take.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_quiz_token_select_code_show(
  variations,
  chosen,
  answer_div,
  correction_code_set,
) {
  "Write the line of code the student has built so far into the panel above the pieces, and hand the whole line the quiz is aiming at to whatever shows a correction.";
  "The first order still standing is the one written out, because every order still standing begins with what has been tapped, so any of them would show the same beginning - and the one that is shown must be reachable from the taps already made, or the screen would tell the student their own correct pieces were a mistake.";
  "What is shown is the finished line cut off at the student's place in it, not the pieces joined up. So the spacing and the punctuation are the ones the finished line will have, and a piece that real code writes without a space beside its neighbour appears that way while it is being built.";
  "The cut is found by walking the taps through the line one at a time, each search beginning where the last one ended, so a piece that occurs twice in the line is matched at its second place the second time it is tapped.";
  arguments_assert(arguments, 4);
  let variation_first = list_first(variations);
  let merged = app_code_quiz_string_tokens_merge(variation_first);
  let code = js_tokens_to_code(merged);
  correction_code_set(code);
  function lambda(index, token_each) {
    let sum = text_index_of_from_start(code, token_each, index);
    return sum;
  }
  let reduced = list_reduce(chosen, lambda, 0);
  let taken = text_take(code, reduced);
  html_clear(answer_div);
  html_span_text(answer_div, taken);
}
