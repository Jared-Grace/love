import { app_a_function_f_names_local } from "./app_a_function_f_names_local.mjs";
import { app_a_function_content } from "./app_a_function_content.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_on_keydown_add } from "./app_a_on_keydown_add.mjs";
import { app_a_function_node } from "./app_a_function_node.mjs";
export async function app_a_function(context) {
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let r = await app_a_function_content(context, on_keydowns, a);
  let content = property_get(r, "content");
  let r2 = app_a_function_f_names_local(r);
  let f_names_local = property_get(r2, "f_names_local");
  let f_names = property_get(r2, "f_names");
  let root = property_get(r2, "root");
  let ast = property_get(r2, "ast");
  let parsed = property_get(r2, "parsed");
  let app_a_function_on_keydown = property_get(r2, "app_a_function_on_keydown");
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
