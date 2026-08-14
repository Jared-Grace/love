export function app_replace_rule_set_shaped_is(value) {
  "Whether a value is a finished exercise: it carries a name, the rules the player may use, and the goals to reach with them - and the name is not still the word the blank template is left with.";
  let missing = null_is(value);
  if (missing) {
    return false;
  }
  let name = property_get_or_null(value, "name");
  let rules = property_get_or_null(value, "rules");
  let goals = property_get_or_null(value, "goals");
  let named = null_not_is(name);
  let ruled = null_not_is(rules);
  let goaled = null_not_is(goals);
  let complete = and_multiple([named, ruled, goaled]);
  if (complete) {
    let unfinished = equal(name, app_replace_rule_set_name_unfinished());
    let finished = not(unfinished);
    return finished;
  }
  return false;
}
