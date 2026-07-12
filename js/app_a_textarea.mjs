import { html_textarea } from "./html_textarea.mjs";
import { app_a_input_generic } from "./app_a_input_generic.mjs";
export function app_a_textarea(body) {
  let fn = html_textarea;
  let input = app_a_input_generic(fn, body);
  return input;
}
