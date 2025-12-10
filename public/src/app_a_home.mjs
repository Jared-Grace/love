import { storage_local_set } from "../../../love/public/src/storage_local_set.mjs";
import { app_generic_screen_set } from "../../../love/public/src/app_generic_screen_set.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_karate_button_uncolored_style_assign } from "../../../karate_code/public/src/app_karate_button_uncolored_style_assign.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_a_function } from "../../../love/public/src/app_a_function.mjs";
import { list_sort_string_alpha_size } from "../../../love/public/src/list_sort_string_alpha_size.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_on_input } from "../../../love/public/src/html_on_input.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_a_control_style } from "../../../love/public/src/app_a_control_style.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_input } from "../../../love/public/src/html_input.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { app_a_api } from "../../../love/public/src/app_a_api.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export async function app_a_home(context) {
  let app_fn = context;
  let function_name = fn_name("functions_names");
  let f_names = await app_a_api(function_name, []);
  let body = html_document_body();
  let input = html_input(body);
  html_focus(input);
  app_a_control_style(input);
  html_style_assign(input, {
    "border-width": "1px",
    "border-color": "gray",
  });
  let f_names_div = html_div(body);
  let filtered = null;
  function lambda4() {
    let value = html_value_get(input);
    function lambda2(f_name) {
      let v3 = match(value, f_name);
      return v3;
    }
    filtered = list_filter(f_names, lambda2);
    refresh();
    function match(s, target) {
      const escaped = s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      let v2 = escaped.split("").join(".*");
      const regex = new RegExp(v2);
      let v = regex.test(target);
      return v;
    }
  }
  html_on_input(input, lambda4);
  filtered = f_names;
  refresh();
  function refresh() {
    html_clear(f_names_div);
    list_sort_string_alpha_size(filtered);
    function lambda(f_name) {
      async function lambda3() {
        storage_local_set(app_fn, "f_name_selected", f_name);
        app_generic_screen_set(context, app_a_function);
      }
      let component = html_button(f_names_div, f_name, lambda3);
      app_a_control_style(component);
      app_karate_button_uncolored_style_assign(component);
      let b = component;
    }
    each(filtered, lambda);
  }
}
