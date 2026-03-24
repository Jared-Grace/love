import { log } from "../../../love/public/src/log.mjs";
import { list_max } from "../../../love/public/src/list_max.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { text_pad } from "../../../love/public/src/text_pad.mjs";
import { text_pad_space } from "../../../love/public/src/text_pad_space.mjs";
import { property_change } from "../../../love/public/src/property_change.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { text_size_1 } from "../../../love/public/src/text_size_1.mjs";
import { list_all } from "../../../love/public/src/list_all.mjs";
import { app_replace_end_get } from "../../../love/public/src/app_replace_end_get.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { app_replace_rule_set_identifiers_simple_goals } from "../../../love/public/src/app_replace_rule_set_identifiers_simple_goals.mjs";
import { app_replace_rule_set_strings_simple_rules_base } from "../../../love/public/src/app_replace_rule_set_strings_simple_rules_base.mjs";
export function app_replace_rule_set_strings_simple() {
  const extra = app_replace_rule_set_strings_simple_rules_base();
  const root = "stg";
  let delimeter = '"';
  const rules = [
    root + " > st",
    root + " > st stg",
    "st > " + delimeter,
    "st > ida",
  ];
  list_add_multiple(rules, extra);
  let goals = app_replace_rule_set_identifiers_simple_goals();
  let mapped2 = list_map(goals, app_replace_end_get);
  function lambda(end) {
    let a = list_all(end, text_size_1);
    return a;
  }
  let filtered = list_filter(mapped2, lambda);
  function lambda2(item) {
    property_set(item, "start", root);
    function lambda3(value) {
      let padded = text_pad_space(value);
      let padded2 = text_pad(padded, delimeter);
      return padded2;
    }
    property_change(item, "end", lambda3);
  }
  each(filtered, lambda2);
  let mapped = list_map_property(filtered, "end");
  let max = list_max(mapped2);
  log(app_replace_rule_set_strings_simple.name, {
    max,
  });
  let r = {
    name: "Strings simple",
    rules,
    goals: filtered,
  };
  return r;
}
