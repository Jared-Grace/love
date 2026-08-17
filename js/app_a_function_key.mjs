import { arguments_assert } from "./arguments_assert.mjs";
import { app_a_function_name_selected } from "./app_a_function_name_selected.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_a_function_upload } from "./app_a_function_upload.mjs";
import { app_a_function_download } from "./app_a_function_download.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { app_a_button } from "./app_a_button.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { html_bar_content } from "./html_bar_content.mjs";
import { app_a_function_sync } from "./app_a_function_sync.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { app_a_function_screen_choose } from "./app_a_function_screen_choose.mjs";
import { app_a_app_run } from "./app_a_app_run.mjs";
import { app_a_functions } from "./app_a_functions.mjs";
import { emoji_search } from "./emoji_search.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { emoji_run } from "./emoji_run.mjs";
import { app_a_function_lambda3 } from "./app_a_function_lambda3.mjs";
import { app_a_apps } from "./app_a_apps.mjs";
import { emoji_arrows_crossed } from "./emoji_arrows_crossed.mjs";
import { app_a_function_lambda10 } from "./app_a_function_lambda10.mjs";
import { emoji_hourglass } from "./emoji_hourglass.mjs";
import { app_a_history } from "./app_a_history.mjs";
import { app_a_app_selected_key } from "./app_a_app_selected_key.mjs";
export async function app_a_function_key(
  context,
  app_a_function_on_keydown,
  on_keydowns,
  a,
) {
  arguments_assert(arguments, 4);
  let f_name = app_a_function_name_selected(context);
  let parsed = await function_parse_unaliased(f_name);
  let ast = property_get(parsed, "ast");
  let root = property_get(context, "root");
  html_clear(root);
  async function upload() {
    let r = await app_a_function_upload();
    return r;
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
    let r2 = await app_a_function_sync(
      upload,
      download,
      context,
      app_a_function_on_keydown,
      content,
    );
    return r2;
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
        let r6 = await app_a_function_lambda3(
          content,
          app_a_function_on_keydown,
          context,
          f_name,
        );
        return r6;
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
  let r4 = {
    f_name,
    parsed,
    ast,
    root,
    content,
    bar,
    preview_app,
    screen_choose_open,
    choices,
    key,
  };
  return r4;
}
