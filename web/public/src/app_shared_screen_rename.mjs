import { function_rename } from "../../../love/public/src/function_rename.mjs";
import { invoke } from "../../../love/public/src/invoke.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_expression_text } from "../../../love/public/src/js_expression_text.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { app_shared_screen_add_generic } from "../../../love/public/src/app_shared_screen_add_generic.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export async function app_shared_screen_rename(
  a_name,
  screen_name_before,
  screen_name_after,
) {
  assert_arguments(arguments, 3);
  let afters = [];
  let result = await app_shared_screen_add_generic(a_name, lambda);
  await each_async(afters, invoke);
  return result;
  async function lambda(properties, prefixed) {
    function lambda2(item) {
      function lambda4() {
        let key = property_get(item, "key");
        async function lambda5() {
          let name = property_get(key, "name");
          let match = name === screen_name_before;
          if (match) {
            let key_after = js_expression_text(screen_name_after);
            let combined_screen = function_name_combine(
              prefixed,
              screen_name_before,
            );
            let combined_screen_after = function_name_combine(
              prefixed,
              screen_name_after,
            );
            object_property_set(item, "key", key_after);
            async function lambda3() {
              let result2 = await function_rename(
                combined_screen,
                combined_screen_after,
              );
            }
            list_add(lambda3);
          }
        }
        js_node_type_is_if(key, "Identifier", lambda5);
      }
      js_node_type_is_if(item, "Property", lambda4);
    }
    each(properties, lambda2);
  }
}
