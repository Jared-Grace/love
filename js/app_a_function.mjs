import { property_get } from "./property_get.mjs";
import { app_a_function_f_names } from "./app_a_function_f_names.mjs";
import { app_a_function_key } from "./app_a_function_key.mjs";
import { app_a_function_lambda8 } from "./app_a_function_lambda8.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
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
  let f_names = property_get(r2, "f_names");
  let content = property_get(r2, "content");
  let root = property_get(r2, "root");
  let ast = property_get(r2, "ast");
  let parsed = property_get(r2, "parsed");
  let app_a_function_on_keydown = property_get(r2, "app_a_function_on_keydown");
  function lambda8(la) {
    let r4 = app_a_function_lambda8(la, ast);
    return r4;
  }
  let fds = list_adder_unique(lambda8);
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
