import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_shared_field_title(parent, title) {
  "$plain parent";
  "$plain title";
  "The line of words over a box saying what the box is for, in bold so it reads as a heading rather than as something written in the box - the one way every box in the apps is titled.";
  arguments_assert(arguments, 2);
  let div = html_div_text(parent, title);
  html_bold(div);
  return div;
}
