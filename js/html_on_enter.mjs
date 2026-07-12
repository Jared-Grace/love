import { html_on_keydown } from "./html_on_keydown.mjs";
import { html_on_enter_lambda } from "./html_on_enter_lambda.mjs";
export function html_on_enter(input, search) {
  let f = html_on_enter_lambda(search);
  html_on_keydown(input, f);
}
