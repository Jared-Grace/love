import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_shared_validate_style_assign } from "./app_shared_validate_style_assign.mjs";
export function html_checkboxes_validate(valid, checkboxes, bn) {
  arguments_assert(arguments, 3);
  let containers = list_map_property(checkboxes, "container");
  app_shared_validate_style_assign(valid, containers, null, bn);
}
