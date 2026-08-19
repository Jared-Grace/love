import { app_a_function_choices_finish_draw } from "./app_a_function_choices_finish_draw.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_function_parsed_bar_content } from "./app_a_function_parsed_bar_content.mjs";
import { app_a_function_sync } from "./app_a_function_sync.mjs";
import { app_a_function_lambda3 } from "./app_a_function_lambda3.mjs";
import { app_a_function_lambda8 } from "./app_a_function_lambda8.mjs";
import { app_a_function_lambda10 } from "./app_a_function_lambda10.mjs";
import { app_a_function_screen_choose } from "./app_a_function_screen_choose.mjs";
import { app_a_history } from "./app_a_history.mjs";
import { emoji_hourglass } from "./emoji_hourglass.mjs";
import { emoji_arrows_crossed } from "./emoji_arrows_crossed.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_a_app_run } from "./app_a_app_run.mjs";
import { app_a_apps } from "./app_a_apps.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { emoji_run } from "./emoji_run.mjs";
import { app_a_on_keydown } from "./app_a_on_keydown.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { app_a_on_keydown_add } from "./app_a_on_keydown_add.mjs";
import { app_a_function_node } from "./app_a_function_node.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { emoji_search } from "./emoji_search.mjs";
import { app_a_functions } from "./app_a_functions.mjs";
export async function app_a_function(context) {
  let on_keydowns = app_a_on_keydown_add(context, app_a_function_on_keydown);
  let r = await app_a_function_parsed_bar_content(context);
  let bar = property_get(r, "bar");
  let content = property_get(r, "content");
  let download = property_get(r, "download");
  let upload = property_get(r, "upload");
  let root = property_get(r, "root");
  let ast = property_get(r, "ast");
  let parsed = property_get(r, "parsed");
  let f_name = property_get(r, "f_name");
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
  app_a_function_choices_finish_draw(
    choices,
    preview_app,
    f_name,
    screen_choose_open,
    bar,
  );
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
