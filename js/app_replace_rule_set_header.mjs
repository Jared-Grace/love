import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_question } from "./emoji_question.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_replace_rule_set_attribute_hint } from "./app_replace_rule_set_attribute_hint.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
import { app_replace_rule_set_title } from "./app_replace_rule_set_title.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_div } from "./html_div.mjs";
import { html_p } from "./html_p.mjs";
export function app_replace_rule_set_header(
  root,
  on_hint,
  context,
  goal_index,
  goals_count,
) {
  arguments_assert(arguments, 5);
  let left = emoji_question();
  let hint_text = text_combine(left, "Hint");
  let hint_button = app_shared_button(root, hint_text, on_hint);
  let value4 = app_replace_rule_set_attribute_hint();
  html_data_set_test(hint_button, value4);
  app_replace_rule_set_title(context);
  let progress = html_progress_bar(root, goal_index, goals_count, "goal");
  let container = property_get(progress, "container");
  html_style_margin_top(container, "0");
  let div_abbreviations = html_div(root);
  let label_rules = html_p(root);
  return {
    div_abbreviations,
    label_rules,
  };
}
