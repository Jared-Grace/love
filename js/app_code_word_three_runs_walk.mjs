import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { json_to } from "./json_to.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_braces_dots } from "./app_learn_js_braces_dots.mjs";
export function app_code_word_three_runs_walk(
  box,
  word,
  comparison_symbol,
  start,
  step,
) {
  arguments_assert(arguments, 5);
  ("Each run of a program that writes out one word three times, told in turn: the question is true three times, each time writing out the word and changing n by step, and then false.");
  let name = "n";
  let right = multiply(step, 3);
  let bound = add(start, right);
  function said(value) {
    "the question is true, so it writes out the word, and n becomes the next value";
    let condition = js_code_binary_spaced_nb(value, comparison_symbol, bound);
    let after = add(value, step);
    let json = json_to(after);
    app_learn_js_div_cycle_code(box, [
      "",
      condition,
      " is ",
      "true",
      ", so it writes out ",
      word,
      ", and ",
      name,
      " becomes ",
      json,
    ]);
  }
  said(start);
  let sum = add(start, step);
  said(sum);
  let right2 = multiply(step, 2);
  let sum2 = add(start, right2);
  said(sum2);
  let check = js_code_binary_spaced_nb(bound, comparison_symbol, bound);
  let r = app_learn_js_braces_dots();
  app_learn_js_div_cycle_code(box, [
    "",
    check,
    " is ",
    "false",
    ", so the ",
    r,
    " is skipped, and the code continues after it",
  ]);
  let r2 = app_learn_js_braces_dots();
  app_learn_js_div_cycle_code(box, [
    "The word was written out three times, so the ",
    r2,
    " ran three times",
  ]);
}
