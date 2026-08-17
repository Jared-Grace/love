import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_identifier_generic_choices_get_e } from "./app_a_identifier_generic_choices_get_e.mjs";
import { property_get } from "./property_get.mjs";
export async function app_a_identifier_generic_choices_get_ast(
  a,
  o,
  name,
  lines_multiple,
  c,
  choices,
  replace,
) {
  arguments_assert(arguments, 7);
  let r3 = await app_a_identifier_generic_choices_get_e(
    a,
    o,
    name,
    lines_multiple,
    c,
    choices,
    replace,
  );
  let e = property_get(r3, "e");
  let overlay_close = property_get(r3, "overlay_close");
  let context = property_get(r3, "context");
  let f_names = property_get(r3, "f_names");
  let stack = property_get(r3, "stack");
  let ast = property_get(r3, "ast");
  let r = {
    e,
    overlay_close,
    context,
    f_names,
    stack,
    ast,
  };
  return r;
}
