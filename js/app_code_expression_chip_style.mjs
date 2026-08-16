import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { app_shared_code_padding_x } from "./app_shared_code_padding_x.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_chip_style(component) {
  arguments_assert(arguments, 1);
  ("the shape of a chip standing inside a line of code: a little room either side of the lettering and corners taken off");
  ("Shape only, no colour. An operator waiting to be pressed and the block a learner has just chosen are the same shape as each other and differ only in colour, so the shape is said once and the two colours are said where they differ.");
  ("rounded as much as the line of code it stands in is rounded, from the one radius both read, because a chip cornered more sharply than the block around it reads as a different kind of thing set into the code rather than as a piece of the code lifted out of it");
  ("the room either side is the room any piece of code has either side of its lettering, read from the one place every piece of code reads it, so a block named in a sentence and the same block standing on the line are the same width as each other");
  ("They used to be a hundredth of an em apart - close enough that nobody would call either one wrong, and far enough that the two of them side by side read as very slightly different things.");
  html_style_padding_y(component, "0");
  let value = app_shared_code_padding_x();
  html_style_padding_x(component, value);
  let border_radius = app_shared_border_radius();
  html_border_radius(component, border_radius);
}
