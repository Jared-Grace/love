import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_replace_rule_set_hash_key } from "./app_replace_rule_set_hash_key.mjs";
import { app_replace_goal_hash_key } from "./app_replace_goal_hash_key.mjs";
import { property_delete_if_exists } from "./property_delete_if_exists.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { app_replace_screen_name_prefix } from "./app_replace_screen_name_prefix.mjs";
import { text_prefix_without_try } from "./text_prefix_without_try.mjs";
import { app_replace_screen_hash_key } from "./app_replace_screen_hash_key.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_replace_rule_set_index_get } from "./app_replace_rule_set_index_get.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { html_hash_set_object } from "./html_hash_set_object.mjs";
export function app_replace_hash_write(context) {
  "keep the address in step with where the learner is - the screen, and the rule set and goal it shows - so the link is shareable and reopens on the same exercise; runs after every draw";
  "The address is read first and only these words are rewritten, so a word something else put there - how fast the replacing runs - survives.";
  "A number is written only on a screen that reads it, the same as the code app leaves its review off every other screen: a rule set left in a link copied from home would quietly send whoever opened it somewhere the sender never was.";
  "Numbers count from 1, the way the buttons the learner pressed are labelled.";
  let hash = html_hash_object_get();
  let key = app_replace_rule_set_hash_key();
  let key2 = app_replace_goal_hash_key();
  property_delete_if_exists(hash, key);
  property_delete_if_exists(hash, key2);
  let screen_name = app_shared_screen_stored_get(context);
  app_shared_hash_screen_add(context, hash);
  let right = fn_name("app_replace_goals");
  let on_goals = equal(screen_name, right);
  let right2 = fn_name("app_replace_rule_set");
  let on_rule_set = equal(screen_name, right2);
  if (on_goals || on_rule_set) {
    let rule_set_index = app_replace_rule_set_index_get(context);
    property_set(hash, key, rule_set_index + 1);
  }
  if (on_rule_set) {
    let goal_index = storage_session_get_context(context, "goal_index");
    property_set(hash, key2, goal_index + 1);
  }
  html_hash_set_object(hash);
}
