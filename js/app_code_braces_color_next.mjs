import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { app_code_braces_colors_next } from "./app_code_braces_colors_next.mjs";
import { list_first } from "./list_first.mjs";
export function app_code_braces_color_next() {
  arguments_assert(arguments, 0);
  ("one colour for a pair of braces, taken from the one bag every pair of braces in the app draws from, so a single pair shown on its own changes colour from one program to the next like every other pair");
  let left = js_code_brace_left();
  let colors = app_code_braces_colors_next(left);
  let color = list_first(colors);
  return color;
}
