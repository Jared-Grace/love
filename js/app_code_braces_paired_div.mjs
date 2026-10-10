import { app_code_code_dark_lines_braces_paired_random } from "./app_code_code_dark_lines_braces_paired_random.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_braces_paired_div(container, text) {
  arguments_assert(arguments, 2);
  ("code with every pair of braces in a colour of its own, drawn as its own line inside container; the shape the worked example asks of what it shows as the answer");
  let div = html_div(container);
  app_code_code_dark_lines_braces_paired_random(div, text);
}
