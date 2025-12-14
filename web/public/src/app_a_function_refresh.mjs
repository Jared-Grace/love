import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_function_node } from "../../../love/public/src/app_a_function_node.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
import { emoji_search } from "../../../love/public/src/emoji_search.mjs";
import { app_a_home } from "../../../love/public/src/app_a_home.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export function app_a_function_refresh(context, ast) {
  marker("1");
  let root = object_property_get(context, "root");
  html_clear(root);
  function lambda2() {
    app_generic_screen_set(context, app_a_home);
  }
  let text = emoji_search();
  let b = app_a_button(root, text, lambda2);
  let div = html_div(root);
  html_font_jetbrains_mono(div);
  html_style_assign(div, {
    "overflow-wrap": "break-word",
    "word-break": "break-word",
    "font-weight": "500",
  });
  app_a_function_node({
    node: ast,
    parent: div,
    context,
    indent: 0,
    root,
  });
}
