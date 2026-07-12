import { html_input_integer } from "./html_input_integer.mjs";
import { app_a_input_generic } from "./app_a_input_generic.mjs";
export function app_a_input_integer(body) {
  let fn = html_input_integer;
  let input = app_a_input_generic(fn, body);
  return input;
}
