import { app_replace_hash_rule_set_index_get } from "./app_replace_hash_rule_set_index_get.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { app_shared_hash_screen_get } from "./app_shared_hash_screen_get.mjs";
import { not } from "./not.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_hash_index_get } from "./app_replace_hash_index_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_replace_goal_hash_key } from "./app_replace_goal_hash_key.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_screen_stored_set_context } from "./app_shared_screen_stored_set_context.mjs";
export function app_replace_hash_restore(context) {
  "if the address names a rule set, a goal or a screen, put them in this tab's memory BEFORE the first draw, so a link opens on the exercise it was taken from";
  "A screen is believed only once what it shows is in hand: the goals screen shows one rule set and the playing screen one goal of it, and either drawn without its choice dies on a blank page. A link naming the screen without them lands home instead - the same place a screen nobody has is sent.";
  let hash = html_hash_object_get();
  let rule_sets = app_replace_rule_sets();
  let rule_set_index = app_replace_hash_rule_set_index_get(hash, rule_sets);
  let rule_set_said = null_not_is(rule_set_index);
  let goal_said = false;
  if (rule_set_said) {
    storage_session_set_context(context, "rule_set_index", rule_set_index);
    let goals = list_get_property(rule_sets, rule_set_index, "goals");
    let key = app_replace_goal_hash_key();
    let goal_index = app_replace_hash_index_get(hash, key, goals);
    goal_said = null_not_is(goal_index);
    if (goal_said) {
      storage_session_set_context(context, "goal_index", goal_index);
    }
  }
  let screen_name = app_shared_hash_screen_get(context, hash);
  if (null_is(screen_name)) {
    return;
  }
  let right = fn_name("app_replace_goals");
  let on_goals = equal(screen_name, right);
  let right2 = fn_name("app_replace_rule_set");
  let on_rule_set = equal(screen_name, right2);
  if (on_goals && not(rule_set_said)) {
    return;
  }
  if (on_rule_set && not(goal_said)) {
    return;
  }
  app_shared_screen_stored_set_context(context, screen_name);
}
