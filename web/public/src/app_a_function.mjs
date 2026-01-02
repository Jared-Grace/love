import { emoji_mobile } from "../../../love/public/src/emoji_mobile.mjs";
import { function_dependencies_externals_to_urls } from "../../../love/public/src/function_dependencies_externals_to_urls.mjs";
import { global_import_set } from "../../../love/public/src/global_import_set.mjs";
import { each_object } from "../../../love/public/src/each_object.mjs";
import { object_values_map_async } from "../../../love/public/src/object_values_map_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_dependencies_code_export } from "../../../love/public/src/function_dependencies_code_export.mjs";
import { app_a_function_on_keydown_remove } from "../../../love/public/src/app_a_function_on_keydown_remove.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { object_properties_from_empty } from "../../../love/public/src/object_properties_from_empty.mjs";
import { html_pre_text } from "../../../love/public/src/html_pre_text.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { app_a_overlay_container } from "../../../love/public/src/app_a_overlay_container.mjs";
import { app_a_choice_close } from "../../../love/public/src/app_a_choice_close.mjs";
import { app_a_overlay } from "../../../love/public/src/app_a_overlay.mjs";
import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { emoji_run } from "../../../love/public/src/emoji_run.mjs";
import { app_a_buttons_shortcuts } from "../../../love/public/src/app_a_buttons_shortcuts.mjs";
import { app_a_on_keydown } from "../../../love/public/src/app_a_on_keydown.mjs";
import { emoji_sync } from "../../../love/public/src/emoji_sync.mjs";
import { indexeddb_store_clear } from "../../../love/public/src/indexeddb_store_clear.mjs";
import { app_a_file_system_initialize_download } from "../../../love/public/src/app_a_file_system_initialize_download.mjs";
import { emoji_down } from "../../../love/public/src/emoji_down.mjs";
import { app_a_upload } from "../../../love/public/src/app_a_upload.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
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
import { app_a_functions } from "../../../love/public/src/app_a_functions.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
export async function app_a_function(context) {
  let app_fn = object_property_get(context, "app_fn");
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let f_name = storage_local_get(app_fn, "f_name_selected");
  let parsed = await function_parse_unaliased(f_name);
  let ast = object_property_get(parsed, "ast");
  marker("1");
  let root = object_property_get(context, "root");
  html_clear(root);
  async function upload() {
    let store = app_a_file_system_store();
    let all = await indexeddb_get_all(app_a_indexeddb_initialize, store);
    async function lambda(item) {
      let compressed = object_property_get(item, "compressed");
      let f = await json_decompress(compressed);
      let versions = object_property_get(f, "versions");
      object_property_set_exists_not(item, "versions", versions);
      let m = list_multiple_is(versions);
      object_property_set_exists_not(item, "changed", m);
    }
    await each_async(all, lambda);
    let filtered = list_filter_property(all, "changed", true);
    function lambda2(item2) {
      let o = object_properties_from_empty(item2, ["key", "versions"]);
      return o;
    }
    let deltas = list_map(filtered, lambda2);
    let ne = list_empty_not_is(deltas);
    if (ne) {
      let r = await app_api_fn(app_a_upload, [deltas]);
    }
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
    app_a_function_on_keydown_remove({
      context,
      app_a_function_on_keydown,
    });
    await app_a_function(context);
  }
  let choices = [
    {
      shortcut: "o",
      text: emoji_search(),
      fn: async function open() {
        list_remove(on_keydowns, app_a_function_on_keydown);
        await sleep_0();
        app_generic_screen_set(context, app_a_functions);
      },
    },
    {
      shortcut: "s",
      text: emoji_sync(),
      fn: sync,
    },
    {
      shortcut: "r",
      text: emoji_run(),
      fn: async function lambda3() {
        async function lambda5() {
          let i = 0;
          let v2 = await function_dependencies_code_export(f_name);
          let externals = object_property_get(v2, "externals");
          let get = object_property_get(v2, "get");
          let o = app_a_overlay(
            {
              root,
              app_a_function_on_keydown,
            },
            on_keydowns,
            on_keydown,
          );
          let overlay_close = object_property_get(o, "overlay_close");
          let overlay = object_property_get(o, "overlay");
          let v = app_a_choice_close(overlay_close);
          let choices = [v];
          function on_keydown(e) {
            app_a_on_keydown(e, choices);
          }
          let div = app_a_overlay_container(overlay);
          let v3 = await get();
          let global = object_property_get(v3, "global");
          let imports = function_dependencies_externals_to_urls(externals);
          async function lambda6(url) {
            let v4 = await import(url);
            return v4;
          }
          let modules = await object_values_map_async(imports, lambda6);
          function lambda4(m, name) {
            global_import_set(name, m, global);
          }
          each_object(modules, lambda4);
          let fn = object_property_get(v3, "fn");
          let r = await fn();
          let j = json_format_to(r);
          let pre = html_pre_text(div, j);
          app_a_buttons_shortcuts(choices, overlay);
        }
        let result = await html_loading(lambda5);
      },
    },
    {
      shortcut: "a",
      text: emoji_mobile(),
      fn: async function open() {
        list_remove(on_keydowns, app_a_function_on_keydown);
        await sleep_0();
        app_generic_screen_set(context, app_a_functions);
      },
    },
  ];
  app_a_buttons_shortcuts(choices, root);
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
