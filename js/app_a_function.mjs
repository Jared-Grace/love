import { property_get } from "./property_get.mjs";
import { app_a_function_key } from "./app_a_function_key.mjs";
import { app_a_function_lambda8 } from "./app_a_function_lambda8.mjs";
import { function_delete } from "./function_delete.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_add } from "./list_add.mjs";
import { storage_session_exists } from "./storage_session_exists.mjs";
import { app_a } from "./app_a.mjs";
import { app_a_buttons_shortcuts } from "./app_a_buttons_shortcuts.mjs";
import { app_a_on_keydown } from "./app_a_on_keydown.mjs";
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
  let choices = property_get(r, "choices");
  let screen_choose_open = property_get(r, "screen_choose_open");
  let preview_app = property_get(r, "preview_app");
  let bar = property_get(r, "bar");
  let content = property_get(r, "content");
  let root = property_get(r, "root");
  let ast = property_get(r, "ast");
  let parsed = property_get(r, "parsed");
  let f_name = property_get(r, "f_name");
  let selected_exists = storage_session_exists(app_a, key);
  if (selected_exists) {
    list_add(choices, preview_app);
  }
  list_add(choices, {
    shortcut: "d",
    text: emoji_x_red(),
    fn: async function lambda4() {
      await function_delete(f_name);
      await screen_choose_open();
    },
  });
  app_a_buttons_shortcuts(bar, choices);
  function app_a_function_on_keydown(e) {
    app_a_on_keydown(e, choices);
  }
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
