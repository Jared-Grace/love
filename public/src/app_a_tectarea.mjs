import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_input_generic } from "../../../love/public/src/app_a_input_generic.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
export function app_a_tectarea(body) {
  marker("1");
  let fn = html_input;
  let input = app_a_input_generic(fn, body);
  return input;
}
