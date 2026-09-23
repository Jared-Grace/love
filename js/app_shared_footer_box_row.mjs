import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_footer_row_attribute_name } from "./app_shared_footer_row_attribute_name.mjs";
import { html_marked_or_null } from "./html_marked_or_null.mjs";
export function app_shared_footer_box_row(footer) {
  "the row inside a foot box that its buttons go in.";
  "Found by its mark rather than handed back beside the box, so the box stays the one thing a screen keeps hold of and takes away when it draws itself again.";
  arguments_assert(arguments, 1);
  let name = app_shared_footer_row_attribute_name();
  let row = html_marked_or_null(footer, name);
  return row;
}
