import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_to_visitor_stack } from "./js_node_to_visitor_stack.mjs";
import { app_a_identifier_generic_choices_get_f_names } from "./app_a_identifier_generic_choices_get_f_names.mjs";
export async function app_a_identifier_generic_choices_get_e(
  a,
  o,
  name,
  lines_multiple,
  c,
  choices,
  replace,
) {
  arguments_assert(arguments, 7);
  let node = property_get(a, "node");
  let ast = property_get(a, "ast");
  let stack = js_node_to_visitor_stack(ast, node);
  let r3 = await app_a_identifier_generic_choices_get_f_names(
    stack,
    o,
    name,
    a,
    lines_multiple,
    c,
    choices,
    replace,
  );
  let f_names = property_get(r3, "f_names");
  let context = property_get(r3, "context");
  let overlay_close = property_get(r3, "overlay_close");
  let e = property_get(r3, "e");
  let r = {
    ast,
    stack,
    f_names,
    context,
    overlay_close,
    e,
  };
  return r;
}
