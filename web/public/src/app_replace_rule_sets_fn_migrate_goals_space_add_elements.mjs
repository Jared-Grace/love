import { js_literal_map } from "../../../love/public/src/js_literal_map.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_property_value_change } from "../../../love/public/src/js_property_value_change.mjs";
import { text_between_space } from "../../../love/public/src/text_between_space.mjs";
import { js_object_expression_properties_find_key_named } from "../../../love/public/src/js_object_expression_properties_find_key_named.mjs";
export function app_replace_rule_sets_fn_migrate_goals_space_add_elements(
  elements,
) {
  function lambda_each(item) {
    let ps = ["start", "end"];
    function lambda2(p) {
      let s = js_object_expression_properties_find_key_named(item, p);
      let fn = text_between_space;js_literal_map_curried_right
      function lambda$previous(literal) {
        let s2 = js_literal_map(literal, fn);
        return s2;
      }
      js_property_value_change(s, lambda$previous);
    }
    each(ps, lambda2);
  }
  each(elements, lambda_each);
}
