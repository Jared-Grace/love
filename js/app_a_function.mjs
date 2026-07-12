import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { app_a_function_name_selected_key } from "./app_a_function_name_selected_key.mjs";
import { app_a_history } from "./app_a_history.mjs";
import { emoji_hourglass } from "./emoji_hourglass.mjs";
import { function_delete } from "./function_delete.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { app_a_function_import } from "./app_a_function_import.mjs";
import { function_new_js_name } from "./function_new_js_name.mjs";
import { app_a_functions_overlay } from "./app_a_functions_overlay.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
import { emoji_arrows_crossed } from "./emoji_arrows_crossed.mjs";
import { app_a_function_refresh_scroll } from "./app_a_function_refresh_scroll.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { html_bar_content } from "./html_bar_content.mjs";
import { app_api_fn } from "./app_api_fn.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_a_app_run } from "./app_a_app_run.mjs";
import { list_add } from "./list_add.mjs";
import { storage_local_exists } from "./storage_local_exists.mjs";
import { app_a } from "./app_a.mjs";
import { app_a_apps } from "./app_a_apps.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { each_async } from "./each_async.mjs";
import { app_a_function_on_keydown_remove } from "./app_a_function_on_keydown_remove.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { properties_from_empty } from "./properties_from_empty.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { app_a_overlay_container } from "./app_a_overlay_container.mjs";
import { app_a_choice_close } from "./app_a_choice_close.mjs";
import { app_a_overlay_keydown } from "./app_a_overlay_keydown.mjs";
import { html_loading } from "./html_loading.mjs";
import { emoji_run } from "./emoji_run.mjs";
import { app_a_buttons_shortcuts } from "./app_a_buttons_shortcuts.mjs";
import { app_a_on_keydown } from "./app_a_on_keydown.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { indexeddb_store_clear } from "./indexeddb_store_clear.mjs";
import { app_a_file_system_initialize_download } from "./app_a_file_system_initialize_download.mjs";
import { emoji_down } from "./emoji_down.mjs";
import { app_a_upload } from "./app_a_upload.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { json_decompress } from "./json_decompress.mjs";
import { app_a_file_system_store } from "./app_a_file_system_store.mjs";
import { app_a_indexeddb_initialize } from "./app_a_indexeddb_initialize.mjs";
import { indexeddb_get_all } from "./indexeddb_get_all.mjs";
import { emoji_up } from "./emoji_up.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { app_a_on_keydown_add } from "./app_a_on_keydown_add.mjs";
import { list_remove } from "./list_remove.mjs";
import { app_a_function_node } from "./app_a_function_node.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { app_a_button } from "./app_a_button.mjs";
import { emoji_search } from "./emoji_search.mjs";
import { app_a_functions } from "./app_a_functions.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function app_a_function(context) {
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let key = app_a_function_name_selected_key();
  let f_name = storage_local_get_context(context, key);
  let parsed = await function_parse_unaliased(f_name);
  let ast = property_get(parsed, "ast");
  let root = property_get(context, "root");
  html_clear(root);
  async function upload() {
    let store = app_a_file_system_store();
    let all = await indexeddb_get_all(app_a_indexeddb_initialize, store);
    async function lambda(item) {
      let compressed = property_get(item, "compressed");
      let f = await json_decompress(compressed);
      let versions = property_get(f, "versions");
      property_set_exists_not(item, "versions", versions);
      let m = list_multiple_is(versions);
      property_set_exists_not(item, "changed", m);
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
    let b = app_a_button(content, a, upload);
    let text = emoji_down();
    let b3 = app_a_button(content, text, download);
  }
  let bc = html_bar_content(root);
  let content = property_get(bc, "content");
  let bar = property_get(bc, "bar");
  async function sync() {
    await upload();
    await download();
    app_a_function_on_keydown_remove({
      context,
      app_a_function_on_keydown,
    });
    await app_a_function_refresh_scroll(content, context);
  }
  let preview_app = {
    shortcut: "p",
    text: emoji_mobile(),
    fn: screen_choose(app_a_app_run),
  };
  let screen_choose_open = screen_choose(app_a_functions);
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
          let overlay_close = property_get(o, "overlay_close");
          let overlay = property_get(o, "overlay");
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
        let overlay_result = property_get(v6, "overlay_result");
        let chooser_result = property_get(v6, "chooser_result");
        let input_set = property_get(chooser_result, "input_set");
        let combined = function_new_js_name("");
        input_set(combined);
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
    text: emoji_x_red(),
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
      await app_shared_screen_set(context, screen);
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
    js_visit_type_node(ast, "FunctionDeclaration", on_node);
    function on_node(n) {
      let id = property_get(n, "id");
      function lambda9() {
        let name = property_get(id, "name");
        la(name);
      }
      js_node_type_is_if(id, "Identifier", lambda9);
    }
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
  let v5 = {
    a,
  };
  return v5;
}
