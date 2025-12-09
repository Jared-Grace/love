import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { http_post_json } from "../../../love/public/src/http_post_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { fn_name } from "./fn_name.mjs";
export async function app_a_main() {
  marker("1");
  const function_name = fn_name("functions_names");
  let body = {
    function_name: function_name,
  };
  const url = "/api";
  let o = await http_post_json(url, body);
  let result = object_property_get(o, "result");
  list_sort_string(list);
  let body2 = html_document_body();
  function lambda(f_name) {
    let div = html_div_text(body2, f_name);
  }
  each(result, lambda);
}
