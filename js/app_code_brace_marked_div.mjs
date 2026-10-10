import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_code_dark_lines_brace_marked } from "./app_code_code_dark_lines_brace_marked.mjs";
export function app_code_brace_marked_div(container, text) {
  arguments_assert(arguments, 2);
  ("a program with one brace pointed at, drawn as its own line inside container; the shape the worked example asks of what it shows as the answer");
  let div = html_div(container);
  app_code_code_dark_lines_brace_marked(div, text);
}
