import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { app_replace_rules_symbols } from "./app_replace_rules_symbols.mjs";
import { app_replace_abbreviations } from "./app_replace_abbreviations.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_map } from "./list_map.mjs";
import { each } from "./each.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_abbreviations_unseen() {
  "Every short word the app explains that no exercise anywhere spells.";
  "An explanation is only drawn for a symbol the rules in front of the player spell, so one written for a symbol nothing spells is never seen by anybody - it reads as present in the source and is absent on every page there is.";
  let rule_sets = app_replace_rule_sets();
  let rules = [];
  function lambda(rs) {
    let of_set = app_replace_rule_set_rules_get(rs);
    list_add_multiple(rules, of_set);
  }
  each(rule_sets, lambda);
  let spelled = app_replace_rules_symbols(rules);
  let abbreviations = app_replace_abbreviations();
  let list = object_to_list(abbreviations);
  let explained = list_map_property(list, "key");
  let unseen = list_difference(explained, spelled);
  function lambda2(symbol) {
    let text = text_combine_multiple([symbol, " unseen"]);
    return text;
  }
  let named = list_map(unseen, lambda2);
  return named;
}
