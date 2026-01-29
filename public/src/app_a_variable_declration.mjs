import { marker } from "../../../love/public/src/marker.mjs";
import { app_a_semicolon } from "../../../love/public/src/app_a_semicolon.mjs";
import { app_a_nodes_list } from "../../../love/public/src/app_a_nodes_list.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { app_a_functionize } from "../../../love/public/src/app_a_functionize.mjs";
import { app_a_overlay_close_button } from "../../../love/public/src/app_a_overlay_close_button.mjs";
import { app_a_overlay_keydown } from "../../../love/public/src/app_a_overlay_keydown.mjs";
import { html_on_enter_lambda } from "../../../love/public/src/html_on_enter_lambda.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_keyword_blue_space } from "../../../love/public/src/app_a_keyword_blue_space.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_variable_declration(node) {
  marker("1");
  let kind = object_property_get(node, "kind");
  let k = app_a_keyword_blue_space(parent, kind);
  let keyword = object_property_get(k, "keyword");
  function lambda19(o) {
    let choices = [];
    list_add(choices, {
      shortcut: "f",
      text: "Functionize end",
      fn: async function lambda() {
        function lambda23() {}
        let lambda22 = html_on_enter_lambda(lambda23);
        overlay_close();
        let o2 = app_a_overlay_keydown(a, lambda22);
        app_a_overlay_close_button(o2);
        await app_a_functionize(a, f_name_new);
      },
    });
    return choices;
  }
  app_a_overlay_choices(a, keyword, lambda19);
  let declarations = object_property_get(node, "declarations");
  app_a_nodes_list(a, declarations, parent);
  app_a_semicolon(parent);
}
