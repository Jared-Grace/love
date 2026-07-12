import { js_literal_map_curried_right } from "./js_literal_map_curried_right.mjs";
import { each } from "./each.mjs";
import { js_property_value_change } from "./js_property_value_change.mjs";
import { text_between_space } from "./text_between_space.mjs";
import { js_object_expression_properties_find_key_named } from "./js_object_expression_properties_find_key_named.mjs";
export function app_replace_rule_sets_fn_migrate_goals_space_add_elements(
  elements,
) {
  function lambda_each(item) {
    let ps = ["start", "end"];
    function lambda(p) {
      let s = js_object_expression_properties_find_key_named(item, p);
      let r = js_literal_map_curried_right(text_between_space);
      js_property_value_change(s, r);
    }
    each(ps, lambda);
  }
  each(elements, lambda_each);
}
