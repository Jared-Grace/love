import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_karate_button_uncolored_style_assign } from "../../../karate_code/public/src/app_karate_button_uncolored_style_assign.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_a_main() {
  let body2 = html_document_body();
  const function_name = fn_name("functions_names");
  let body = {
    function_name: function_name,
  };
  const url = "/api";
  let o = await http_post_json(url, body);
  let component2 = html_input(body2);
  app_a_control_style(component2);
  html_style_assign(component2, {
    "border-width": "1px",
    "border-color": "gray",
  });
  html_focus(component2);
  function lambda4() {
    let value = html_value_get(input);
  }
  html_on_keydown(component2, lambda4);
  let result = object_property_get(o, "result");
  list_sort_string(result);
  function lambda(f_name) {
    function lambda3() {}
    marker("1");
    let component = html_button(body2, f_name, lambda3);
    app_a_control_style(component);
    app_karate_button_uncolored_style_assign(component);
    let b = component;
  }
  each(result, lambda);
}
