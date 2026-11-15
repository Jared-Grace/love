import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_shared_field(parent) {
  arguments_assert(arguments, 1);
  ('A box for one field - its label, its input and any hint under it - with space below, so a reader going down a form sees where one field ends and the next begins (human: "Can the fields have spacing or something so that vertically it\'s clear that this group is for one field?").');
  let field = html_div(parent);
  html_style_assign(field, {
    "margin-bottom": "1.2em",
  });
  return field;
}
