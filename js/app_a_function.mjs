import { app_a_function_download } from "./app_a_function_download.mjs";
import { app_a_function_lambda8 } from "./app_a_function_lambda8.mjs";
import { app_a_function_lambda10 } from "./app_a_function_lambda10.mjs";
import { app_a_function_upload } from "./app_a_function_upload.mjs";
import { app_a_function_screen_choose } from "./app_a_function_screen_choose.mjs";
import { app_a_app_selected_key } from "./app_a_app_selected_key.mjs";
import { app_a_function_name_selected } from "./app_a_function_name_selected.mjs";
import { app_a_history } from "./app_a_history.mjs";
import { emoji_hourglass } from "./emoji_hourglass.mjs";
import { function_delete } from "./function_delete.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { app_a_function_import } from "./app_a_function_import.mjs";
import { emoji_arrows_crossed } from "./emoji_arrows_crossed.mjs";
import { app_a_function_refresh_scroll } from "./app_a_function_refresh_scroll.mjs";
import { html_bar_content } from "./html_bar_content.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_a_app_run } from "./app_a_app_run.mjs";
import { list_add } from "./list_add.mjs";
import { storage_session_exists } from "./storage_session_exists.mjs";
import { app_a } from "./app_a.mjs";
import { app_a_apps } from "./app_a_apps.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { app_a_function_on_keydown_remove } from "./app_a_function_on_keydown_remove.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { app_a_overlay_container } from "./app_a_overlay_container.mjs";
import { app_a_choice_close } from "./app_a_choice_close.mjs";
import { app_a_overlay_keydown } from "./app_a_overlay_keydown.mjs";
import { html_loading } from "./html_loading.mjs";
import { emoji_run } from "./emoji_run.mjs";
import { app_a_buttons_shortcuts } from "./app_a_buttons_shortcuts.mjs";
import { app_a_on_keydown } from "./app_a_on_keydown.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { app_a_on_keydown_add } from "./app_a_on_keydown_add.mjs";
import { app_a_function_node } from "./app_a_function_node.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { app_a_button } from "./app_a_button.mjs";
import { emoji_search } from "./emoji_search.mjs";
import { app_a_functions } from "./app_a_functions.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { json_format_to } from "./json_format_to.mjs";
export async function app_a_function(context) {
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let f_name = app_a_function_name_selected(context);
  let parsed = await function_parse_unaliased(f_name);
  let ast = property_get(parsed, "ast");
  let root = property_get(context, "root");
  html_clear(root);
  async function upload() {
    let r2 = await app_a_function_upload();
    return r2;
  }
  async function download() {
    let r5 = await app_a_function_download();
    return r5;
  }
  if (false) {
    let a2 = emoji_arrow_up();
    app_a_button(content, a2, upload);
    let text = emoji_arrow_down();
    app_a_button(content, text, download);
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
    fn: app_a_function_screen_choose(
      app_a_app_run,
      on_keydowns,
      app_a_function_on_keydown,
      context,
    ),
  };
  let screen_choose_open = app_a_function_screen_choose(
    app_a_functions,
    on_keydowns,
    app_a_function_on_keydown,
    context,
  );
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
          let choices_overlay = [v];
          function on_keydown(e) {
            app_a_on_keydown(e, choices_overlay);
          }
          let div = app_a_overlay_container(overlay);
          let fn = await app_a_function_import(f_name);
          let r = await fn();
          let j = json_format_to(r);
          html_pre_text(div, j);
          app_a_buttons_shortcuts(overlay, choices_overlay);
        }
        await html_loading(lambda5);
      },
    },
    {
      shortcut: "a",
      text: emoji_mobile(),
      fn: app_a_function_screen_choose(
        app_a_apps,
        on_keydowns,
        app_a_function_on_keydown,
        context,
      ),
    },
    {
      shortcut: "t",
      text: emoji_arrows_crossed(),
      fn: async function lambda10() {
        let r3 = await app_a_function_lambda10(a, ast);
        return r3;
      },
    },
    {
      shortcut: "h",
      text: emoji_hourglass(),
      fn: app_a_function_screen_choose(
        app_a_history,
        on_keydowns,
        app_a_function_on_keydown,
        context,
      ),
    },
  ];
  let key = app_a_app_selected_key();
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
  let v5 = {
    a,
  };
  return v5;
}
