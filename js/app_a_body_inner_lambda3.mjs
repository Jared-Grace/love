import { arguments_assert } from "./arguments_assert.mjs";
import { ternary } from "./ternary.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_a_body_inner_lambda3(b, hidden) {
  arguments_assert(arguments, 2);
  let text = null;
  text = ternary(hidden, "Show", "Hide");
  text += " imports";
  html_text_set(b, text);
}
