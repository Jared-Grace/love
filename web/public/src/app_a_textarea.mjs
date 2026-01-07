import { html_textarea } from "../../../love/public/src/html_textarea.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_input_generic } from "../../../love/public/src/app_a_input_generic.mjs";
export function app_a_textarea(body) {
  marker("1");
  let fn = html_textarea;
  let input = app_a_input_generic(fn, body);
  return input;
}
