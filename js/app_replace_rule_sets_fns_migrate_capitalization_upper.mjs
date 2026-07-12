import { property_get } from "./property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "./app_replace_rule_sets_fns_transform.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
import { list_map } from "./list_map.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { js_property_value_change } from "./js_property_value_change.mjs";
import { js_literal_map_curried_right } from "./js_literal_map_curried_right.mjs";
import { log } from "./log.mjs";
export async function app_replace_rule_sets_fns_migrate_capitalization_upper() {
  let result = await app_replace_rule_sets_fns_transform(on_result);
  return result;
  function on_result(a) {
    let name_property = property_get(a, "name_property");
    function lambda(t) {
      log(app_replace_rule_sets_fns_migrate_capitalization_upper.name, {
        t,
      });
      let split = text_split_space(t);
      let mapped = list_map(split, text_first_upper_to);
      let joined = list_join_space(mapped);
      return joined;
    }
    let r = js_literal_map_curried_right(lambda);
    js_property_value_change(name_property, r);
  }
}
