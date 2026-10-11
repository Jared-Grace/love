import { app_code_braces_color_next } from "./app_code_braces_color_next.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_div_braces_painted } from "./app_code_div_braces_painted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_brace_marked } from "./app_code_brace_marked.mjs";
import { app_code_brace_lines_shown } from "./app_code_brace_lines_shown.mjs";
export function app_code_brace_lines_example(parent, code, nth) {
  arguments_assert(arguments, 3);
  ("a worked example for the opening of a lesson on the lines between braces: a sentence, then code with its nth { from 0 and the } closing it coloured, and every line between them coloured the same, so the answer is seen before it is asked for; asked for by the human 2026-10-11");
  ("The sentences around the code were written by the human 2026-10-11, their braces in the colour of the pair, replacing a first draft saying the lines between the coloured braces are coloured too.");
  let left = js_code_brace_left();
  let indexes = [];
  for (let i = 0; less_than(i, code.length); i++) {
    if (equal(code[i], left)) {
      list_add(indexes, i);
    }
  }
  let index = list_get(indexes, nth);
  let question = app_code_brace_marked(code, index);
  let color = app_code_braces_color_next();
  let right = js_code_brace_right();
  let left_painted = {
    brace: left,
    color,
  };
  let right_painted = {
    brace: right,
    color,
  };
  app_code_div_braces_painted(parent, [
    ["Below is a "],
    left_painted,
    [" "],
    right_painted,
  ]);
  app_code_div_braces_painted(parent, [
    ["The lines in between the "],
    left_painted,
    [" and "],
    right_painted,
    [" are colored"],
  ]);
  app_code_brace_lines_shown(parent, question, color);
}
