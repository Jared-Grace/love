import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_brace_marked } from "./app_code_brace_marked.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_brace_lines_shown } from "./app_code_brace_lines_shown.mjs";
export function app_code_brace_lines_example(parent, code, nth) {
  arguments_assert(arguments, 3);
  ("a worked example for the opening of a lesson on the lines between braces: a sentence, then code with its nth { from 0 and the } closing it coloured, and every line between them coloured the same, so the answer is seen before it is asked for; asked for by the human 2026-10-11");
  let left = js_code_brace_left();
  let indexes = [];
  for (let i = 0; less_than(i, code.length); i++) {
    if (equal(code[i], left)) {
      list_add(indexes, i);
    }
  }
  let index = list_get(indexes, nth);
  let question = app_code_brace_marked(code, index);
  html_div_text(
    parent,
    "Here the lines between the coloured braces are coloured too:",
  );
  app_code_brace_lines_shown(parent, question);
}
