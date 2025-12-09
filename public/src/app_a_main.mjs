import { html_style_margin_y } from "../../../love/public/src/html_style_margin_y.mjs";
import { app_karate_margin_y } from "../../../karate_code/public/src/app_karate_margin_y.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_karate_button_uncolored_style_assign } from "../../../karate_code/public/src/app_karate_button_uncolored_style_assign.mjs";
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
  marker("1");
  lambda("a1");
  lambda("a2");
  const function_name = fn_name("functions_names");
  let body = {
    function_name: function_name,
  };
  const url = "/api";
  let o = await http_post_json(url, body);
  let result = object_property_get(o, "result");
  list_sort_string(result);
  function lambda(f_name) {
    function lambda3() {}
    marker("1");
    let component = html_button(body2, f_name, lambda3);
    html_style_assign(component, {
      "border-radius": "0.8em",
      width: "100%",
      "border-width": "0px",
    });
    app_karate_button_uncolored_style_assign(component);
    const margin_y = app_karate_margin_y();
    html_style_margin_y(component, "1px");
    let b = component;
  }
  each(result, lambda);
}
