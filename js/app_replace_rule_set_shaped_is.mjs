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
    let unfinished = equal(name, app_replace_rule_set_name_unfinished());
    let finished = not(unfinished);
    return finished;
  }
  return false;
}
