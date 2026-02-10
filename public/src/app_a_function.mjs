import { app_a_function_name_selected_key } from "../../../love/public/src/app_a_function_name_selected_key.mjs";
import { app_a_history } from "../../../love/public/src/app_a_history.mjs";
import { emoji_hourglass } from "../../../love/public/src/emoji_hourglass.mjs";
import { function_delete } from "../../../love/public/src/function_delete.mjs";
import { emoji_delete } from "../../../love/public/src/emoji_delete.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { app_a_function_import } from "../../../love/public/src/app_a_function_import.mjs";
import { function_new_js_name } from "../../../love/public/src/function_new_js_name.mjs";
import { app_a_functions_overlay } from "../../../love/public/src/app_a_functions_overlay.mjs";
import { app_a_function_on_change } from "../../../love/public/src/app_a_function_on_change.mjs";
import { emoji_arrows_crossed } from "../../../love/public/src/emoji_arrows_crossed.mjs";
import { app_a_function_refresh_scroll } from "../../../love/public/src/app_a_function_refresh_scroll.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { html_bar_content } from "../../../love/public/src/html_bar_content.mjs";
import { app_api_fn } from "../../../love/public/src/app_api_fn.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_adder_unique } from "../../../love/public/src/list_adder_unique.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { app_a_app_run } from "../../../love/public/src/app_a_app_run.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { storage_local_exists } from "../../../love/public/src/storage_local_exists.mjs";
import { app_a } from "../../../love/public/src/app_a.mjs";
import { app_a_apps } from "../../../love/public/src/app_a_apps.mjs";
import { emoji_mobile } from "../../../love/public/src/emoji_mobile.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_a_function_on_keydown_remove } from "../../../love/public/src/app_a_function_on_keydown_remove.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { properties_from_empty } from "../../../love/public/src/properties_from_empty.mjs";
import { html_pre_text } from "../../../love/public/src/html_pre_text.mjs";
import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { app_a_overlay_container } from "../../../love/public/src/app_a_overlay_container.mjs";
import { app_a_choice_close } from "../../../love/public/src/app_a_choice_close.mjs";
import { app_a_overlay_keydown } from "../../../love/public/src/app_a_overlay_keydown.mjs";
import { html_loading } from "../../../love/public/src/html_loading.mjs";
import { emoji_run } from "../../../love/public/src/emoji_run.mjs";
import { app_a_buttons_shortcuts } from "../../../love/public/src/app_a_buttons_shortcuts.mjs";
import { app_a_on_keydown } from "../../../love/public/src/app_a_on_keydown.mjs";
import { emoji_sync } from "../../../love/public/src/emoji_sync.mjs";
import { indexeddb_store_clear } from "../../../love/public/src/indexeddb_store_clear.mjs";
import { app_a_file_system_initialize_download } from "../../../love/public/src/app_a_file_system_initialize_download.mjs";
import { emoji_down } from "../../../love/public/src/emoji_down.mjs";
import { app_a_upload } from "../../../love/public/src/app_a_upload.mjs";
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
import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
import { emoji_search } from "../../../love/public/src/emoji_search.mjs";
import { app_a_functions } from "../../../love/public/src/app_a_functions.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
export async function app_a_function(context) {
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let key = app_a_function_name_selected_key();
  let f_name = storage_local_get_context(context, key);
  let parsed = await function_parse_unaliased(f_name);
  let ast = object_property_get(parsed, "ast");
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
      let o = properties_from_empty(item2, ["key", "versions"]);
      return o;
    }
    let deltas = list_map(filtered, lambda2);
    let ne = list_empty_not_is(deltas);
    if (ne) {
      let r = await app_api_fn({
        fn: app_a_upload,
        args: [deltas],
      });
    }
  }
  async function download() {
    let store = app_a_file_system_store();
    await indexeddb_store_clear(app_a_indexeddb_initialize, store);
    await app_a_file_system_initialize_download();
  }
  if (false) {
    let a = emoji_up();
    let b2 = app_a_button(content, a, upload);
    let text2 = emoji_down();
    let b3 = app_a_button(content, text2, download);
  }
  let bc = html_bar_content(root);
  let content = object_property_get(bc, "content");
  let bar = object_property_get(bc, "bar");
  async function sync() {
    await upload();
    await download();
    app_a_function_on_keydown_remove({
      context,
      app_a_function_on_keydown,
    });
    await app_a_function_refresh_scroll(content, context);
  }
  const preview_app = {
    shortcut: "p",
    text: emoji_mobile(),
    fn: screen_choose(app_a_app_run),
  };
  const screen_choose_open = screen_choose(app_a_functions);
  let choices = [
    {
      shortcut: "o",
      text: emoji_search(),
      fn: screen_choose_open,
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
          let o = app_a_overlay_keydown(
            {
              root: content,
              app_a_function_on_keydown,
              context,
            },
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
          let fn = await app_a_function_import(f_name);
          let r = await fn();
          let j = json_format_to(r);
          let pre = html_pre_text(div, j);
          app_a_buttons_shortcuts(overlay, choices);
        }
        let result = await html_loading(lambda5);
      },
    },
    {
      shortcut: "a",
      text: emoji_mobile(),
      fn: screen_choose(app_a_apps),
    },
    {
      shortcut: "t",
      text: emoji_arrows_crossed(),
      fn: async function lambda10() {
        let v6 = await app_a_functions_overlay(a, lambda11);
        let overlay_result = object_property_get(v6, "overlay_result");
        let chooser_result = object_property_get(v6, "chooser_result");
        let input_set = object_property_get(chooser_result, "input_set");
        let combined2 = function_new_js_name("");
        input_set(combined2);
        async function lambda11(f_name_call) {
          let fn = await app_a_function_import(f_name_call);
          await fn(ast);
          let code = js_unparse(ast);
          await app_a_function_on_change(a, overlay_result);
        }
      },
    },
    {
      shortcut: "h",
      text: emoji_hourglass(),
      fn: screen_choose(app_a_history),
    },
  ];
  let e = storage_local_exists(app_a, "app_selected");
  if (e) {
    list_add(choices, preview_app);
  }
  list_add(choices, {
    shortcut: "d",
    text: emoji_delete(),
    fn: async function lambda4() {
      await function_delete(f_name);
      await screen_choose_open();
    },
  });
  app_a_buttons_shortcuts(bar, choices);
  function screen_choose(screen) {
    let f = async function screen_choose_inner() {
      list_remove(on_keydowns, app_a_function_on_keydown);
      await sleep_0();
      app_shared_screen_set(context, screen);
    };
    return f;
  }
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
    function lambda7(v) {
      let n = object_property_get(v, "node");
      let id = object_property_get(n, "id");
      function lambda9() {
        let name2 = object_property_get(id, "name");
        la(name2);
      }
      js_node_type_is_if(id, "Identifier", lambda9);
    }
    js_visit_type(ast, "FunctionDeclaration", lambda7);
  }
  let fds = list_adder_unique(lambda8);
  let f_names_local = list_difference(fds, f_names);
  const a = {
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
  let v5 = {
    a,
  };
  return v5;
}
