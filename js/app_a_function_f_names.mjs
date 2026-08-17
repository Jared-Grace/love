import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_function_e } from "./app_a_function_e.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { functions_names } from "./functions_names.mjs";
export async function app_a_function_f_names(r) {
  arguments_assert(arguments, 1);
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
  let r3 = {
    app_a_function_on_keydown,
    parsed,
    ast,
    root,
    content,
    f_names,
  };
  return r3;
}
