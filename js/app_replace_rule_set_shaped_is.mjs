import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_replace_rule_set_name_unfinished } from "./app_replace_rule_set_name_unfinished.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_replace_rule_set_shaped_is(value) {
  "Whether a value is a finished exercise: it carries a name, the rules the player may use, and the goals to reach with them - and its name is not still the word the blank template is left with.";
  let missing = null_is(value);
  if (missing) {
    return false;
  }
  let name = property_get_or_null(value, "name");
  let rules = property_get_or_null(value, "rules");
  let goals = property_get_or_null(value, "goals");
  let parts = [name, rules, goals];
  let complete = list_all_is(parts, null_not_is);
  if (complete) {
    let right = app_replace_rule_set_name_unfinished();
    let unfinished = equal(name, right);
    let finished = not(unfinished);
    return finished;
  }
  return false;
}
