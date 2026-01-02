import { log } from "../../../love/public/src/log.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_expression_string } from "../../../love/public/src/js_expression_string.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { marker_screen_add_generic } from "../../../love/public/src/marker_screen_add_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function marker_screen_rename(
  screen_name_before,
  screen_name_after,
) {
  assert_arguments(arguments, 2);
  let result = await marker_screen_add_generic(lambda);
  marker("1");
  return result;
  async function lambda(properties, prefixed) {
    let combined_screen = function_name_combine(prefixed, screen_name_before);
    function lambda2(item) {
      function lambda4() {
        let key = object_property_get(item, "key");
        function lambda5() {
          let name = object_property_get(key, "name");
          let match = name === screen_name_before;
          if (match) {
            let key_after = js_expression_string(screen_name_after);
            let combined_screen_after = function_name_combine(
              prefixed,
              screen_name_after,
            );
            let value_after = js_parse_expression(combined_screen_after);
            object_property_set(item, "key", key_after);
            object_property_set(item, "value", value_after);
            log({
              item,
            });
          }
        }
        js_node_type_is_if(key, "Identifier", lambda5);
      }
      js_node_type_is_if(item, "Property", lambda4);
    }
    each(properties, lambda2);
  }
}
