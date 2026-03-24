import { log } from "../../../love/public/src/log.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
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
  const root = "st";
  let delimeter = '"';
  let character = "ida";
  const rules = [
    root + " > " + delimeter + " stg " + delimeter,
    "stg > " + character,
    "stg > " + character + " stg",
  ];
  list_add_multiple(rules, extra);
  let goals = app_replace_rule_set_identifiers_simple_goals();
  function lambda(g) {
    let end = app_replace_end_get(g);
    ("is the end made up of only single character items?");
    let a = list_all(end, text_size_1);
    return a;
  }
  let filtered = list_filter(goals, lambda);
  let copy = json_copy(filtered);
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
  let mapped = list_map(copy, app_replace_end_get);
  let mapped2 = list_map(mapped, list_size);
  let unique = list_unique(mapped2);
  list_sort_number(unique);
  function lambda4(item2) {
    let r2 = range(item2);
    function lambda5(item3) {
      return character;
    }
    let end = list_map(r2, lambda5);
    let r3 = {
      end,
    };
    return r3;
  }
  let mapped3 = list_map(unique, lambda4);
  log(app_replace_rule_set_strings_simple.name, {
    mapped3,
  });
  let r = {
    name: "Strings simple",
    rules,
    goals: filtered,
  };
  return r;
}
