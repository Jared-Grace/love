import { property_get } from "./property_get.mjs";
import { app_a_function_fds } from "./app_a_function_fds.mjs";
import { app_a_function_f_names } from "./app_a_function_f_names.mjs";
import { app_a_function_key } from "./app_a_function_key.mjs";
import { list_difference } from "./list_difference.mjs";
import { app_a_on_keydown_add } from "./app_a_on_keydown_add.mjs";
import { app_a_function_node } from "./app_a_function_node.mjs";
export async function app_a_function(context) {
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let r = await app_a_function_key(
    context,
    app_a_function_on_keydown,
    on_keydowns,
    a,
  );
  let r2 = await app_a_function_f_names(r);
  let r3 = app_a_function_fds(r2);
  let fds = property_get(r3, "fds");
  let app_a_function_on_keydown = property_get(r3, "app_a_function_on_keydown");
  let parsed = property_get(r3, "parsed");
  let ast = property_get(r3, "ast");
  let root = property_get(r3, "root");
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
