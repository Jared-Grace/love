import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { emoji_up } from "../../../love/public/src/emoji_up.mjs";
import { sleep_0 } from "../../../love/public/src/sleep_0.mjs";
import { app_a_on_keydown_add } from "../../../love/public/src/app_a_on_keydown_add.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { html_on_keydown_stop_logic } from "../../../love/public/src/html_on_keydown_stop_logic.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { app_a_function_node } from "../../../love/public/src/app_a_function_node.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
import { emoji_search } from "../../../love/public/src/emoji_search.mjs";
import { app_a_home } from "../../../love/public/src/app_a_home.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_parse } from "../../../love/public/src/function_parse.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
export async function app_a_function(context) {
  let app_fn = object_property_get(context, "app_fn");
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  function app_a_function_on_keydown(e) {
    html_on_keydown_stop_logic(e);
    let k = object_property_get(e, "key");
    if (equal(k, "s")) {
      search();
    }
  }
  let f_name = storage_local_get(app_fn, "f_name_selected");
  let parsed = await function_parse(f_name);
  let ast = object_property_get(parsed, "ast");
  marker("1");
  let root = object_property_get(context, "root");
  html_clear(root);
  async function search() {
    list_remove(on_keydowns, app_a_function_on_keydown);
    await sleep_0();
    app_generic_screen_set(context, app_a_home);
  }
  let text = emoji_search();
  let b = app_a_button(root, text, search);
  let a = emoji_up();
  async function upload() {
    let v3 = await indexeddb_get_all(app_a_indexeddb_initialize, store);
  }
  let b2 = app_a_button(root, a, upload);
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
    ast,
    parsed,
    app_a_function_on_keydown,
  });
}
