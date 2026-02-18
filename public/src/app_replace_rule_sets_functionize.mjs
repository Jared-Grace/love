import { log_unparse } from "../../../love/public/src/log_unparse.mjs";
import { js_identifier_name_try } from "../../../love/public/src/js_identifier_name_try.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { marker_next_declare_single_init_elements } from "../../../love/public/src/marker_next_declare_single_init_elements.mjs";
import { function_transform_marker_specified } from "../../../love/public/src/function_transform_marker_specified.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function app_replace_rule_sets_functionize() {
  let f_name = app_replace_rule_sets.name;
  let code = await function_transform_marker_specified(f_name, "rules", lambda);
  async function lambda(a) {
    let elements = marker_next_declare_single_init_elements(a);
    function lambda2(e) {
      let properties = property_get(e, "properties");
      let search = "name";
      function lambda3(p) {
        let key = property_get(p, "key");
        let name = js_identifier_name_try(key);
        let eq2 = equal(name, search);
        return eq2;
      }
      let found = list_find(properties, lambda3);
      let value = property_get(found, "value");
      log_unparse(node);
    }
    each(elements, lambda2);
  }
  return;
  let output = await function_transform(app_replace_rule_sets.name, lambda);
}
