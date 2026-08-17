import { app_a_function_root } from "./app_a_function_root.mjs";
import { property_get } from "./property_get.mjs";
import { list_difference } from "./list_difference.mjs";
import { app_a_on_keydown_add } from "./app_a_on_keydown_add.mjs";
import { app_a_function_node } from "./app_a_function_node.mjs";
export async function app_a_function(context) {
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let r = await app_a_function_root(context, on_keydowns, a);
  let root = property_get(r, "root");
  let ast = property_get(r, "ast");
  let parsed = property_get(r, "parsed");
  let app_a_function_on_keydown = property_get(r, "app_a_function_on_keydown");
  let fds = property_get(r, "fds");
  let r3 = property_get(r, "r3");
  let content = property_get(r3, "content");
  let f_names = property_get(r3, "f_names");
  let f_names_local = list_difference(fds, f_names);
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
