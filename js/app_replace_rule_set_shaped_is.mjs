import { equal_not } from "./equal_not.mjs";
import { js_object_expression_property_named_or_null } from "./js_object_expression_property_named_or_null.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { js_property_value_get } from "./js_property_value_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_replace_rule_set_name_unfinished } from "./app_replace_rule_set_name_unfinished.mjs";
export function app_replace_rule_set_shaped_is(e) {
  "Whether a record written in a file is a finished exercise: it gives a name, the rules the player may use, and the goals to reach with them - and its name is not still the word the blank template is left carrying.";
  "The record is read where it is written rather than by running the function that holds it, because the functions sharing this prefix include the one that solves every exercise there is, and asking a question must never set that going.";
  let name = js_object_expression_property_named_or_null(e, "name");
  let rules = js_object_expression_property_named_or_null(e, "rules");
  let goals = js_object_expression_property_named_or_null(e, "goals");
  let parts = [name, rules, goals];
  let complete = list_all_is(parts, null_not_is);
  if (complete) {
    let value = js_property_value_get(name);
    let text = property_get_or_null(value, "value");
    let right = app_replace_rule_set_name_unfinished();
    let finished = equal_not(text, right);
    return finished;
  }
  return false;
}
