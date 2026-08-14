import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_max } from "./list_max.mjs";
import { list_size } from "./list_size.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { app_replace_rule_set_verify_goal_path } from "./app_replace_rule_set_verify_goal_path.mjs";
import { app_replace_rules_parse } from "./app_replace_rules_parse.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
export function app_replace_rule_sets_steepness() {
  "How hard each of the replacing app's exercises is, in the order a player meets them: its name, how many rules it hands over, how many goals it asks for, and how many replacements the longest of those goals takes to reach.";
  "The count of rules and the count of goals are what an exercise looks like; the length of the longest solution is what it costs to finish. They part company badly - an exercise offering seventy rules can be one replacement long, and an exercise offering nine can be twenty. Reading only the first two says the course climbs smoothly where it does not.";
  "The number is the shortest solution the app itself would find, so it is a floor: a player who cannot see that path pays more.";
  "The count of buttons is what the screen actually holds, and it is the number to read rather than the count of rules: a goal is only ever offered the rules its own answer needs, topped up to three, so an exercise handing over seventy rules still draws a handful.";
  let rule_sets = app_replace_rule_sets();
  let rules_useds = app_replace_rule_sets_fns_rules_used();
  function lambda(rs) {
    let name = property_get(rs, "name");
    let rules = property_get(rs, "rules");
    let goals = property_get(rs, "goals");
    let shown = property_get(rules_useds, name);
    let sizes = list_map(shown, list_size);
    let buttons = list_max(sizes);
    let rules_parsed = app_replace_rules_parse(rules);
    function lambda2(g) {
      let se = app_replace_start_end_get(g);
      let start = property_get(se, "start");
      let end = property_get(se, "end");
      let path = app_replace_rule_set_verify_goal_path(
        rules_parsed,
        start,
        end,
      );
      let steps = list_size(path);
      return steps;
    }
    let lengths = list_map(goals, lambda2);
    let longest = list_max(lengths);
    let rules_size = list_size(rules);
    let goals_size = list_size(goals);
    let line = text_combine_multiple([
      name,
      "  |  rules ",
      rules_size,
      "  |  goals ",
      goals_size,
      "  |  longest ",
      longest,
      "  |  buttons ",
      buttons,
    ]);
    return line;
  }
  let lines = list_map(rule_sets, lambda);
  return lines;
}
