import { app_a_function_e } from "./app_a_function_e.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_function_key } from "./app_a_function_key.mjs";
import { app_a_function_lambda8 } from "./app_a_function_lambda8.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_a_on_keydown_add } from "./app_a_on_keydown_add.mjs";
import { app_a_function_node } from "./app_a_function_node.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
export async function app_a_function(context) {
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let r = await app_a_function_key(
    context,
    app_a_function_on_keydown,
    on_keydowns,
    a,
  );
  let key = property_get(r, "key");
  let r2 = app_a_function_e(r, key);
  let app_a_function_on_keydown = property_get(r2, "app_a_function_on_keydown");
  let parsed = property_get(r2, "parsed");
  let ast = property_get(r2, "ast");
  let root = property_get(r2, "root");
  let content = property_get(r2, "content");
  html_font_jetbrains_mono(content);
  html_style_assign(content, {
    "overflow-wrap": "break-word",
    "word-break": "break-word",
    "font-weight": "500",
  });
  let f_names = await functions_names();
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
