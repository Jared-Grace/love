import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_rule_sets_fns_rules_used } from "./app_replace_rule_sets_fns_rules_used.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { each } from "./each.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rules_used_unknown() {
  "Every rule the saved list of rules-for-a-goal offers that its own exercise no longer has.";
  "The rules a goal shows are read from a saved list rather than worked out as the page draws, so renaming a symbol in an exercise leaves that list spelling the old one - and the player is then offered a rule that matches nothing, with the rule they need missing, on a page that looks perfectly well. Nothing else notices: the solver reads the exercise, so it still finds a path, and the explanations list reads the saved rules, so it quietly drops the renamed word too.";
  let rule_sets = app_replace_rule_sets();
  let saved = app_replace_rule_sets_fns_rules_used();
  let offenders = [];
  function lambda(rule_set) {
    let name = property_get(rule_set, "name");
    let of_goals = property_get_or_null(saved, name);
    let present = null_not_is(of_goals);
    if (present) {
      let of_set = app_replace_rule_set_rules_get(rule_set);
      let originals = list_map_property(of_set, "original");
      function lambda2(of_goal) {
        let offered = list_map_property(of_goal, "original");
        let unknown = list_difference(offered, originals);
        function lambda3(original) {
          let text = text_combine_multiple([name, " ", original, " unknown"]);
          return text;
        }
        let named = list_map(unknown, lambda3);
        list_add_multiple(offenders, named);
      }
      each(of_goals, lambda2);
    }
  }
  each(rule_sets, lambda);
  return offenders;
}
