import { app_a_on_keydown } from "../../../love/public/src/app_a_on_keydown.mjs";
import { app_a_shortcuts_each } from "../../../love/public/src/app_a_shortcuts_each.mjs";
import { app_a_button_shortcut } from "../../../love/public/src/app_a_button_shortcut.mjs";
import { emoji_sync } from "../../../love/public/src/emoji_sync.mjs";
import { indexeddb_store_clear } from "../../../love/public/src/indexeddb_store_clear.mjs";
import { app_a_file_system_initialize_download } from "../../../love/public/src/app_a_file_system_initialize_download.mjs";
import { emoji_down } from "../../../love/public/src/emoji_down.mjs";
import { app_a_upload } from "../../../love/public/src/app_a_upload.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { object_properties_from } from "../../../love/public/src/object_properties_from.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { json_decompress } from "../../../love/public/src/json_decompress.mjs";
import { app_a_file_system_store } from "../../../love/public/src/app_a_file_system_store.mjs";
import { app_a_indexeddb_initialize } from "../../../love/public/src/app_a_indexeddb_initialize.mjs";
import { indexeddb_get_all } from "../../../love/public/src/indexeddb_get_all.mjs";
import { emoji_up } from "../../../love/public/src/emoji_up.mjs";
import { sleep_0 } from "../../../love/public/src/sleep_0.mjs";
import { app_a_on_keydown_add } from "../../../love/public/src/app_a_on_keydown_add.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
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
  async function upload() {
    let store = app_a_file_system_store();
    let all = await indexeddb_get_all(app_a_indexeddb_initialize, store);
    function lambda(item) {
      let compressed = object_property_get(item, "compressed");
      let f = json_decompress(compressed);
      let versions = object_property_get(f, "versions");
      object_property_set_exists_not(item, "versions", versions);
      let m = list_multiple_is(versions);
      object_property_set_exists_not(item, "changed", m);
    }
    each(all, lambda);
    let filtered = list_filter_property(all, "changed", true);
    function lambda2(item2) {
      let o = object_properties_from({}, ["key", "versions"], item2);
      return o;
    }
    let deltas = list_map(filtered, lambda2);
    let r = await app_api_fn(app_a_upload, [deltas]);
  }
  async function download() {
    let store = app_a_file_system_store();
    await indexeddb_store_clear(app_a_indexeddb_initialize, store);
    await app_a_file_system_initialize_download();
  }
  if (false) {
    let a = emoji_up();
    let b2 = app_a_button(root, a, upload);
    let text2 = emoji_down();
    let b3 = app_a_button(root, text2, download);
  }
  async function sync() {
    await upload();
    await download();
  }
  let choices = [
    {
      shortcut: "f",
      text: emoji_search(),
      fn: search,
    },
    {
      shortcut: "s",
      text: emoji_sync(),
      fn: sync,
    },
  ];
  function lambda3(shortcut, text, fn) {
    let b3 = app_a_button_shortcut(root, shortcut, text, fn);
  }
  app_a_shortcuts_each(choices, lambda3);
  function app_a_function_on_keydown(e) {
    app_a_on_keydown(e, choices);
  }
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
