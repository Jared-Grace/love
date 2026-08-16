import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_transition_transform_set(component, duration) {
  arguments_assert(arguments, 2);
  ("from here on, let any move of this piece take the given while rather than happening at once");
  let value = text_combine_multiple(["transform ", duration, "ms"]);
  html_style_set(component, "transition", value);
}
