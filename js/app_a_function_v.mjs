import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_function_node } from "./app_a_function_node.mjs";
export function app_a_function_v(r, content, context, f_names, f_names_local) {
  arguments_assert(arguments, 5);
  let root = property_get(r, "root");
  let ast = property_get(r, "ast");
  let parsed = property_get(r, "parsed");
  let app_a_function_on_keydown = property_get(r, "app_a_function_on_keydown");
  let a = {
    node: ast,
    content,
    parent: content,
    context,
    indent: 0,
    root,
    ast,
    parsed,
    app_a_function_on_keydown,
    f_names,
    f_names_local,
  };
  app_a_function_node(a);
  let v = {
    a,
  };
  return v;
}
