import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
export function html_on_enter(search, input) {
  let f = html_on_enter_lambda(search);
  html_on_keydown(input, f);
}
