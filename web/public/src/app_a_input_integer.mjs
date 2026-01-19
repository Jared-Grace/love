import { html_input_integer } from "../../../love/public/src/html_input_integer.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_input_generic } from "../../../love/public/src/app_a_input_generic.mjs";
export function app_a_input_integer(body) {
  marker("1");
  let fn = html_input_integer;
  let input = app_a_input_generic(fn, body);
  return input;
}
