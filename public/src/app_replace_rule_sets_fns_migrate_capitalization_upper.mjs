import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_rule_sets_fns_transform } from "../../../love/public/src/app_replace_rule_sets_fns_transform.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { js_property_value_change } from "../../../love/public/src/js_property_value_change.mjs";
import { js_literal_map_curried_right } from "../../../love/public/src/js_literal_map_curried_right.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function app_replace_rule_sets_fns_migrate_capitalization_upper() {
  let result = await app_replace_rule_sets_fns_transform(on_result);
  return result;
  function on_result(a) {
    let name2 = property_get(a, "name");
    function lambda2(t) {
      log(app_replace_rule_sets_fns_migrate_capitalization_upper.name, {
        t,
      });
      let split = text_split_space(t);
      let mapped = list_map(split, text_first_upper_to);
      let joined = list_join_space(mapped);
      return joined;
    }
    let r = js_literal_map_curried_right(lambda2);
    js_property_value_change(name, r);
  }
}
