import { app_a_input_generic } from "./app_a_input_generic.mjs";
import { html_input } from "./html_input.mjs";
export function app_a_input(body) {
  let fn = html_input;
  let input = app_a_input_generic(fn, body);
  return input;
}
