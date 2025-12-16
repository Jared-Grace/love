import { html_on_pointerdown } from "../../../love/public/src/html_on_pointerdown.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_a_button } from "../../../love/public/src/app_a_button.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { html_on_keydown_stop_logic } from "../../../love/public/src/html_on_keydown_stop_logic.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
import { html_remove } from "../../../love/public/src/html_remove.mjs";
import { js_identifier_rename_imports_fix } from "../../../love/public/src/js_identifier_rename_imports_fix.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_select } from "../../../love/public/src/html_select.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { app_a_input } from "../../../love/public/src/app_a_input.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_a_button_wide } from "../../../love/public/src/app_a_button_wide.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
import { app_a_overlay_close_text } from "../../../love/public/src/app_a_overlay_close_text.mjs";
import { app_a_overlay } from "../../../love/public/src/app_a_overlay.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_identifier(node, parent, context, a, ast, parsed) {
  let name = object_property_get(node, "name");
  let span = html_span_text(parent, name);
  html_font_color_set(span, "#4a4affff");
  function lambda20() {
    let on_keydowns = object_property_get(context, "on_keydowns");
    let { overlay, overlay_close } = app_a_overlay(a, on_keydowns, on_keydown);
    let choices = [
      {
        shortcut: "c",
        text: app_a_overlay_close_text(),
        fn: overlay_close,
      },
      {
        shortcut: "r",
        text: "Rename",
        fn: async function lambda15() {
          overlay_close();
          let lambda22 = html_on_enter_lambda(lambda23);
          let { overlay, overlay_close: rename_overlay_close } = app_a_overlay(
            a,
            on_keydowns,
            lambda22,
          );
          let text5 = app_a_overlay_close_text();
          let component2 = app_a_button_wide(
            overlay,
            text5,
            rename_overlay_close,
          );
          let div3 = html_div(overlay);
          app_a_control_style(div3);
          html_style_background_color(div3, "white");
          html_centered(div3);
          let div2 = html_div_text(div3, "Rename from:");
          let div = html_div_text(div3, name);
          html_div_text(div3, "Rename to:");
          let input = app_a_input(overlay);
          html_centered(input);
          html_value_set(input, name);
          await html_select(input);
          async function lambda23() {
            let name_new = html_value_get(input);
            await js_identifier_rename_imports_fix(ast, name, name_new);
            html_remove(overlay);
            await file_js_unparse(parsed);
            rename_overlay_close();
            await app_a_function(context);
          }
          let component = app_a_button_wide(overlay, "Rename", lambda23);
        },
      },
    ];
    function on_keydown(e) {
      html_on_keydown_stop_logic(e);
      let key2 = object_property_get(e, "key");
      choices_each(on_choice);
      function on_choice(shortcut, text, fn) {
        if (equal(key2, shortcut)) {
          fn();
        }
      }
    }
    choices_each(on_choice);
    function on_choice(shortcut, text, fn) {
      let b3 = app_a_button(overlay, "(" + shortcut + ") " + text, fn);
      return b3;
    }
    function choices_each(on_choice) {
      function lambda21(c) {
        let shortcut = object_property_get(c, "shortcut");
        let text = object_property_get(c, "text");
        let fn = object_property_get(c, "fn");
        let b = on_choice(shortcut, text, fn);
      }
      each(choices, lambda21);
    }
  }
  html_on_pointerdown(span, lambda20);
}
