import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_expression_string } from "../../../love/public/src/js_expression_string.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { marker_screen_add_generic } from "../../../love/public/src/marker_screen_add_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function marker_screen_rename(
  screen_name_before,
  screen_name_after,
) {
  let result = await marker_screen_add_generic(lambda);
  marker("1");
  return result;
  async function lambda(properties, prefixed) {
    let key = js_expression_string(screen_name_before);
    let combined_screen = function_name_combine(prefixed, screen_name_before);
    let value = js_parse_expression(combined_screen);
    log({
      properties,
      key,
      value,
    });
    function lambda2(item) {
      let r = false;
      function lambda4() {
        log({
          item,
        });
      }
      js_node_type_is_if(item, "Property", lambda4);
      return r;
    }
    let only = list_find(properties, lambda2);
  }
}
