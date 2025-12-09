import { html_div } from "../../../love/public/src/html_div.mjs";
import { list_sort_string_alpha_size } from "../../../love/public/src/list_sort_string_alpha_size.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_on_keydown } from "../../../love/public/src/html_on_keydown.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_karate_button_uncolored_style_assign } from "../../../karate_code/public/src/app_karate_button_uncolored_style_assign.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_a_main() {
  let body2 = html_document_body();
  const function_name = fn_name("functions_names");
  let body = {
    function_name: function_name,
  };
  const url = "/api";
  let o = await http_post_json(url, body);
  let input = html_input(body2);
  app_a_control_style(input);
  html_style_assign(input, {
    "border-width": "1px",
    "border-color": "gray",
  });
  html_focus(input);
  let div = html_div(root);
  let f_names = null;
  function lambda4() {
    let value = html_value_get(input);
    function lambda2(f_name) {
      let v3 = match(value, f_name);
      return v3;
    }
    let filtered = list_filter(f_names, lambda2);
    function match(s, target) {
      const escaped = s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      let v2 = escaped.split("").join(".*");
      const regex = new RegExp(v2);
      let v = regex.test(target);
      return v;
    }
  }
  html_on_keydown(input, lambda4);
  f_names = object_property_get(o, "result");
  list_sort_string_alpha_size(f_names);
  function lambda(f_name) {
    function lambda3() {}
    let component = html_button(body2, f_name, lambda3);
    app_a_control_style(component);
    app_karate_button_uncolored_style_assign(component);
    let b = component;
  }
  each(f_names, lambda);
}
