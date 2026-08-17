import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_a_identifier_generic_choices_get_includes(r3, name) {
  arguments_assert(arguments, 2);
  let ast = property_get(r3, "ast");
  let stack = property_get(r3, "stack");
  let f_names = property_get(r3, "f_names");
  let context = property_get(r3, "context");
  let overlay_close = property_get(r3, "overlay_close");
  let e = property_get(r3, "e");
  let includes = list_includes(f_names, name);
  let r = {
    ast,
    stack,
    context,
    overlay_close,
    e,
    includes,
  };
  return r;
}
