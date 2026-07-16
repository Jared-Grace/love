import { app_replace_success_message } from "../../love/js/app_replace_success_message.mjs";
import { app_replace_rule_set_success_attribute_completed } from "../../love/js/app_replace_rule_set_success_attribute_completed.mjs";
import { app_replace_rule_set_success_attribute_next } from "../../love/js/app_replace_rule_set_success_attribute_next.mjs";
import { html_data_set_test } from "../../love/js/html_data_set_test.mjs";
import { html_width_full } from "../../love/js/html_width_full.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { app_shared_button_next_text } from "../../love/js/app_shared_button_next_text.mjs";
import { app_replace_rule_set } from "../../love/js/app_replace_rule_set.mjs";
import { app_shared_screen_set } from "../../love/js/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../love/js/storage_local_set_context.mjs";
import { html_p_text_centered } from "../../love/js/html_p_text_centered.mjs";
import { not } from "../../love/js/not.mjs";
import { app_replace_rule_sets } from "../../love/js/app_replace_rule_sets.mjs";
import { storage_local_get_context } from "../../love/js/storage_local_get_context.mjs";
import { list_index_is } from "../../love/js/list_index_is.mjs";
import { html_p } from "../../love/js/html_p.mjs";
import { html_move_animate_multiple } from "../../love/js/html_move_animate_multiple.mjs";
import { app_replace_button_symbol_style_valid_multiple_nested } from "../../love/js/app_replace_button_symbol_style_valid_multiple_nested.mjs";
import { storage_local_transform_empty_context } from "../../love/js/storage_local_transform_empty_context.mjs";
import { property_set } from "../../love/js/property_set.mjs";
import { app_replace_rule_sets_data_goal } from "../../love/js/app_replace_rule_sets_data_goal.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
export async function app_replace_rule_set_success(
  rule_name,
  goal,
  context,
  goal_list_symbols,
  sbs,
  duration,
  div_below,
  goal_index,
  goals,
  history,
) {
  function lambda5(value) {
    let g = app_replace_rule_sets_data_goal(value, rule_name, goal);
    property_set(g, "completed", true);
    property_set(g, "history", history);
    return value;
  }
  storage_local_transform_empty_context(context, "rule_sets_data", lambda5);
  let list = [goal_list_symbols, sbs];
  app_replace_button_symbol_style_valid_multiple_nested(list);
  await html_move_animate_multiple(sbs, goal_list_symbols, duration);
  app_replace_success_message(div_below);
  let p_next = html_p(div_below);
  let goal_index_next = text_combine(goal_index, 1);
  let ii = list_index_is(goals, goal_index_next);
  let rule_set_index = storage_local_get_context(context, "rule_set_index");
  let rule_sets = app_replace_rule_sets();
  let rule_set_index_next = text_combine(rule_set_index, 1);
  let ii2 = list_index_is(rule_sets, rule_set_index_next);
  let next = true;
  if (not(ii) && not(ii2)) {
    let completed = html_p_text_centered(
      p_next,
      "You have completed all goals that are available at this time!",
    );
    let value3 = app_replace_rule_set_success_attribute_completed();
    html_data_set_test(completed, value3);
    return;
  }
  async function lambda2() {
    if (ii) {
      storage_local_set_context(context, "goal_index", goal_index_next);
    } else {
      if (ii2) {
        storage_local_set_context(
          context,
          "rule_set_index",
          rule_set_index_next,
        );
        storage_local_set_context(context, "goal_index", 0);
      } else {
        next = false;
      }
    }
    await app_shared_screen_set(context, app_replace_rule_set);
  }
  let text = app_shared_button_next_text();
  let bn = app_shared_button(p_next, text, lambda2);
  html_width_full(bn);
  let value2 = app_replace_rule_set_success_attribute_next();
  html_data_set_test(bn, value2);
}
