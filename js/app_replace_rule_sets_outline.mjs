import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
export function app_replace_rule_sets_outline() {
  "The replacing app's exercises in the order a player meets them, each on one line: its name, the rules it hands over, and how many goals it asks for.";
  "The goals themselves are left out. Whether one exercise is a gentle step up from the one before it is a question about the rules, and the goals are long enough that reading them all hides the shape of the course from the person trying to see it.";
  let rule_sets = app_replace_rule_sets();
  function lambda(rs) {
    let name = property_get(rs, "name");
    let rules = property_get(rs, "rules");
    let goals = property_get(rs, "goals");
    let size = list_size(goals);
    let joined = list_join_comma_space(rules);
    let line = text_combine_multiple([name, "  |  ", joined, "  |  ", size]);
    return line;
  }
  let lines = list_map(rule_sets, lambda);
  return lines;
}
