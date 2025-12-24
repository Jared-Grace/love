import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { html_on_pointerdown } from "../../../love/public/src/html_on_pointerdown.mjs";
import { app_a_buttons_shortcuts } from "../../../love/public/src/app_a_buttons_shortcuts.mjs";
import { app_a_on_keydown } from "../../../love/public/src/app_a_on_keydown.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { app_a_function_select } from "../../../love/public/src/app_a_function_select.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { app_a_function_on_keydown_remove } from "../../../love/public/src/app_a_function_on_keydown_remove.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_select } from "../../../love/public/src/html_select.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { app_a_input } from "../../../love/public/src/app_a_input.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { app_a_overlay_container } from "../../../love/public/src/app_a_overlay_container.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { app_a_overlay_close_text } from "../../../love/public/src/app_a_overlay_close_text.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { app_a_choice_close } from "../../../love/public/src/app_a_choice_close.mjs";
import { app_a_overlay } from "../../../love/public/src/app_a_overlay.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_a_identifier_generic(a, span, name, c) {
  marker("1");
  async function on_pointerdown() {
    let context = object_property_get(a, "context");
    let on_keydowns = object_property_get(context, "on_keydowns");
    let o = app_a_overlay(a, on_keydowns, on_keydown);
    let overlay_close = object_property_get(o, "overlay_close");
    let overlay = object_property_get(o, "overlay");
    let v = app_a_choice_close(overlay_close);
    const change = {
      fn: async function lambda15() {
        overlay_close();
        let lambda22 = html_on_enter_lambda(lambda23);
        let o2 = app_a_overlay(a, on_keydowns, lambda22);
        let rename_overlay_close = object_property_get(o2, "overlay_close");
        let overlay = object_property_get(o2, "overlay");
        let text5 = app_a_overlay_close_text();
        let component2 = app_a_button_wide(
          overlay,
          text5,
          rename_overlay_close,
        );
        let div3 = app_a_overlay_container(overlay);
        html_centered(div3);
        let text2 = object_property_get(change, "text");
        let div2 = html_div_text(div3, " from:");
        let div = html_div_text(div3, name);
        html_div_text(div3, " to:");
        let input = app_a_input(overlay);
        html_centered(input);
        html_value_set(input, name);
        await html_select(input);
        async function lambda23() {
          let parsed = object_property_get(a, "parsed");
          let value_new = html_value_get(input);
          let on_change = object_property_get(change, "on_change");
          await on_change(value_new);
          await file_js_unparse(parsed);
          rename_overlay_close();
          app_a_function_on_keydown_remove(a);
          await app_a_function(context);
        }
        let component = app_a_button_wide(overlay, "Rename", lambda23);
      },
    };
    let to2 = object_merge(change, c);
    let choices = [
      v,
      {
        shortcut: "c",
        text: "Copy",
        fn: async function lambda2() {
          await clipboard_copy(name);
          overlay_close();
        },
      },
      change,
    ];
    const choice_function_open = {
      shortcut: "o",
      text: "Open",
      fn: function lambda() {
        overlay_close();
        app_a_function_on_keydown_remove(a);
        app_a_function_select(context, name);
      },
    };
    let f_names = await functions_names();
    let includes = list_includes(f_names, name);
    if (includes) {
      list_add(choices, choice_function_open);
    }
    function on_keydown(e) {
      app_a_on_keydown(e, choices);
    }
    app_a_buttons_shortcuts(choices, overlay);
  }
  html_on_pointerdown(span, on_pointerdown);
}
