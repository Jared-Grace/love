import { app_replace_rule_set_success_attribute_completed } from "../../../love/public/src/app_replace_rule_set_success_attribute_completed.mjs";
import { app_replace_rule_set_success_attribute_next } from "../../../love/public/src/app_replace_rule_set_success_attribute_next.mjs";
import { html_data_set_test } from "../../../love/public/src/html_data_set_test.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { app_karate_button_next_text } from "../../../love/public/src/app_karate_button_next_text.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { html_p_text_centered } from "../../../love/public/src/html_p_text_centered.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { list_index_is } from "../../../love/public/src/list_index_is.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_style_padding_em } from "../../../love/public/src/html_style_padding_em.mjs";
import { app_replace_button_symbol_style_inner } from "../../../love/public/src/app_replace_button_symbol_style_inner.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { emoji_party_face } from "../../../love/public/src/emoji_party_face.mjs";
import { emoji_party_popper } from "../../../love/public/src/emoji_party_popper.mjs";
import { emoji_medal_1 } from "../../../love/public/src/emoji_medal_1.mjs";
import { emoji_medal_star } from "../../../love/public/src/emoji_medal_star.mjs";
import { emoji_clap } from "../../../love/public/src/emoji_clap.mjs";
import { emoji_100 } from "../../../love/public/src/emoji_100.mjs";
import { emoji_trophy } from "../../../love/public/src/emoji_trophy.mjs";
import { html_move_animate_multiple } from "../../../love/public/src/html_move_animate_multiple.mjs";
import { app_replace_button_symbol_style_valid_multiple_nested } from "../../../love/public/src/app_replace_button_symbol_style_valid_multiple_nested.mjs";
import { storage_local_transform_empty_context } from "../../../love/public/src/storage_local_transform_empty_context.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { app_replace_rule_sets_data_goal } from "../../../love/public/src/app_replace_rule_sets_data_goal.mjs";
export async function app_replace_rule_set_success(
  rule_name,
  goal,
  context,
  goal_list_symbols,
  sbs,
  duration,
  div_below,
  highlight,
  goal_index,
  goals,
) {
  function lambda5(value) {
    let g = app_replace_rule_sets_data_goal(value, rule_name, goal);
    property_set(g, "completed", true);
    return value;
  }
  storage_local_transform_empty_context(context, "rule_sets_data", lambda5);
  const list = [goal_list_symbols, sbs];
  app_replace_button_symbol_style_valid_multiple_nested(list);
  await html_move_animate_multiple(sbs, goal_list_symbols, duration);
  let choices = [
    emoji_trophy,
    emoji_100,
    emoji_clap,
    emoji_medal_star,
    emoji_medal_1,
    emoji_party_popper,
    emoji_party_face,
  ];
  const taken_count = 3;
  let taken = list_shuffle_take(choices, taken_count);
  list_add_first(taken, emoji_check);
  let mapped = invoke_multiple(taken);
  let joined = list_join_empty(mapped);
  let p = html_p(div_below);
  html_style_background_color_set(p, highlight);
  app_replace_button_symbol_style_inner(p);
  const value_em = "0.3";
  html_style_padding_em(p, value_em);
  html_centered(p);
  let p_emojis = html_div(p);
  html_span_text(p_emojis, joined);
  html_style_font_size(p_emojis, "1.5em");
  let p_encouragement = html_div(p);
  const encouragements_choices = [
    "Congratulations",
    "Success",
    "Good job",
    "Great job",
    "Well done",
    "Keep it up",
    "Amazing",
    "Way to go",
    "Awesome",
  ];
  let encouragements = list_shuffle_take(encouragements_choices, 2);
  html_bold(p_encouragement);
  function lambda(encouragement) {
    html_span_text(p_encouragement, encouragement + "! ");
  }
  each(encouragements, lambda);
  let p_next = html_p(div_below);
  let goal_index_next = goal_index + 1;
  let ii = list_index_is(goals, goal_index_next);
  let rule_set_index = storage_local_get_context(context, "rule_set_index");
  let rule_sets = app_replace_rule_sets();
  let rule_set_index_next = rule_set_index + 1;
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
  function lambda2() {
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
    app_shared_screen_set(context, app_replace_rule_set);
  }
  let text = app_karate_button_next_text();
  let bn = app_replace_button(p_next, text, lambda2);
  html_width_full(bn);
  let value2 = app_replace_rule_set_success_attribute_next();
  html_data_set_test(bn, value2);
}
