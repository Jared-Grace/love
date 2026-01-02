import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
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
      function lambda4() {
        let key2 = object_property_get(item, "key");
        function lambda5() {
          let name = object_property_get(key2, "name");
          let r = name === screen_name_before;
          if (r) {
          }
        }
        js_node_type_is_if(key2, "Identifier", lambda5);
      }
      js_node_type_is_if(item, "Property", lambda4);
      return r;
    }
    each(properties, lambda2);
  }
}
