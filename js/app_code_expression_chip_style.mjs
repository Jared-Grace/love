import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_chip_style(component) {
  arguments_assert(arguments, 1);
  ("the shape of a chip standing inside a line of code: a little room either side of the lettering and corners taken off");
  ("Shape only, no colour. An operator waiting to be pressed and the block a learner has just chosen are the same shape as each other and differ only in colour, so the shape is said once and the two colours are said where they differ.");
  html_style_padding(component, "0 0.35em");
  html_border_radius(component, "0.2em");
}
