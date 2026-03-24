import { app_replace_end_get_size } from "../../../love/public/src/app_replace_end_get_size.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_to_dictionary_value } from "../../../love/public/src/list_to_dictionary_value.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { range_value } from "../../../love/public/src/range_value.mjs";
import { text_pad_nested_space_quote_double } from "../../../love/public/src/text_pad_nested_space_quote_double.mjs";
import { list_sort_number } from "../../../love/public/src/list_sort_number.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
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
  const item = "stg";
  let quoted = text_pad_nested_space_quote_double(item);
  const rules = [
    root + " > " + quoted,
    "stg > " + character,
    "stg > " + character + " stg",
  ];
  list_add_multiple(rules, extra);
  let goals_identifiers = app_replace_rule_set_identifiers_simple_goals();
  function lambda(g) {
    let end = app_replace_end_get(g);
    ("is the end made up of only single character items?");
    let a = list_all(end, text_size_1);
    return a;
  }
  let filtered = list_filter(goals_identifiers, lambda);
  let mapped = list_map(filtered, app_replace_end_get);
  let mapped2 = list_map(mapped, list_size);
  let unique = list_unique(mapped2);
  list_sort_number(unique);
  function lambda3(item2v) {
    let m = range_value(item2v, character);
    let joined = list_join_space(m);
    let p = text_pad_nested_space_quote_double(joined);
    return p;
  }
  let dictionary = list_to_dictionary_value(unique, lambda3);
  function lambda4(item2) {
    let value = property_get(dictionary, item2);
    let r3 = {
      start: root,
      end: value,
    };
    return r3;
  }
  let goals = list_map(unique, lambda4);
  function lambda5(item) {
    let size = app_replace_end_get_size(item);
    let value2 = property_get(dictionary, size);
    property_set(item, "start", value2);
    property_change(item, "end", text_pad_nested_space_quote_double);
  }
  each(filtered, lambda5);
  list_add_multiple(goals, filtered);
  let r = {
    name: "Strings simple",
    rules,
    goals,
  };
  return r;
}
