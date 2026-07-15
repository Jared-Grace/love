import { null_is } from "./null_is.mjs";
import { app_replace_rule_sets_fns_rules_used } from "./app_replace_rule_sets_fns_rules_used.mjs";
import { list_index_of_json } from "./list_index_of_json.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { app_replace_rule_set_highlight } from "./app_replace_rule_set_highlight.mjs";
import { app_replace_button_symbol_style_dead } from "./app_replace_button_symbol_style_dead.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_replace_rule_set_verify_from_try } from "./app_replace_rule_set_verify_from_try.mjs";
import { list_map_property_invoke } from "./list_map_property_invoke.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_replace_animation_duration_get } from "./app_replace_animation_duration_get.mjs";
import { emoji_restart } from "./emoji_restart.mjs";
import { app_replace_rule_set_title } from "./app_replace_rule_set_title.mjs";
import { app_replace_rule_set_abbreviations } from "./app_replace_rule_set_abbreviations.mjs";
import { app_replace_rule_set_goal_show } from "./app_replace_rule_set_goal_show.mjs";
import { app_replace_rule_set_nav } from "./app_replace_rule_set_nav.mjs";
import { app_replace_rule_set_refresh_rb } from "./app_replace_rule_set_refresh_rb.mjs";
import { app_replace_rule_set_refresh_sb } from "./app_replace_rule_set_refresh_sb.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
import { app_replace_rule_set_attribute_hint } from "./app_replace_rule_set_attribute_hint.mjs";
import { app_replace_rule_set_attribute_refresh_count } from "./app_replace_rule_set_attribute_refresh_count.mjs";
import { app_replace_rule_set_attribute_symbol } from "./app_replace_rule_set_attribute_symbol.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
import { app_replace_rule_set_verify_goal_next } from "./app_replace_rule_set_verify_goal_next.mjs";
import { app_replace_rule_set_symbol_on_click } from "./app_replace_rule_set_symbol_on_click.mjs";
import { app_replace_rule_set_success } from "./app_replace_rule_set_success.mjs";
import { app_replace_rule_set_proof_show } from "./app_replace_rule_set_proof_show.mjs";
import { app_replace_rule_sets_data_initialize } from "./app_replace_rule_sets_data_initialize.mjs";
import { app_replace_rule_sets_data_goal } from "./app_replace_rule_sets_data_goal.mjs";
import { list_last } from "./list_last.mjs";
import { list_add } from "./list_add.mjs";
import { list_size_half_ceil } from "./list_size_half_ceil.mjs";
import { list_swap_first } from "./list_swap_first.mjs";
import { list_take } from "./list_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_size_range } from "./list_size_range.mjs";
import { equal } from "./equal.mjs";
import { emoji_question } from "./emoji_question.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { app_replace_button_symbol_style_invalid } from "./app_replace_button_symbol_style_invalid.mjs";
import { app_replace_button_screen } from "./app_replace_button_screen.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { property_exists } from "./property_exists.mjs";
import { json_equal } from "./json_equal.mjs";
import { each } from "./each.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_replace_button_rule } from "./app_replace_button_rule.mjs";
import { app_replace_rule_set_get } from "./app_replace_rule_set_get.mjs";
import { ternary } from "./ternary.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_replace_button_symbol_style } from "./app_replace_button_symbol_style.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { html_div } from "./html_div.mjs";
import { list_size } from "./list_size.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { not } from "./not.mjs";
import { html_text_set_if } from "./html_text_set_if.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each_index } from "./each_index.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { html_p } from "./html_p.mjs";
import { html_disable } from "./html_disable.mjs";
import { property_get } from "./property_get.mjs";
import { html_button } from "./html_button.mjs";
import { list_get } from "./list_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function app_replace_rule_set(context) {
  let root = property_get(context, "root");
  app_replace_rule_set_nav(context, root);
  let rs = app_replace_rule_set_get(context);
  let goals = property_get(rs, "goals");
  let goals_count = list_size(goals);
  let goal_index = storage_local_get_context(context, "goal_index");
  let goal = list_get(goals, goal_index);
  let rules_parsed = app_replace_rule_set_rules_get(rs);
  let index_selected = null;
  let start_over = null;
  let rules_used = null;
  let rule_set_name = property_get(rs, "name");
  let start_end = app_replace_start_end_get(goal);
  let end = property_get(start_end, "end");
  let data = app_replace_rule_sets_data_initialize(context);
  let g_saved = app_replace_rule_sets_data_goal(data, rule_set_name, goal);
  let history_saved = property_get_or_null(g_saved, "history");
  let resumed = null_not_is(history_saved);
  ("a goal solved in a past session resumes solved: start at the goal so success fires, and reuse the saved steps so the green proof survives a browser refresh");
  let start = ternary(resumed, end, property_get(start_end, "start"));
  let history = ternary(resumed, history_saved, [start]);
  let div_proof = null;
  let start_indices = list_size_range(start);
  async function on_hint() {
    let second = app_replace_rule_set_verify_goal_next(
      rules_parsed,
      start,
      end,
    );
    let rule_next = property_get(second, "rule");
    let index_rule = list_index_of_json(rules_used, rule_next);
    let index_symbol = property_get(second, "index");
    if (equal(index_rule, index_selected)) {
      let ceiling = list_size_half_ceil(start_indices);
      list_shuffle(start_indices);
      list_swap_first(start_indices, index_symbol);
      start_indices = list_take(start_indices, ceiling);
      await refresh();
    } else {
      button_rule_on_click_inner(index_rule);
    }
  }
  let left2 = emoji_question();
  let hint_text = text_combine(left2, "Hint");
  let hint_button = app_replace_button(root, hint_text, on_hint);
  let value4 = app_replace_rule_set_attribute_hint();
  html_data_set_test(hint_button, value4);
  app_replace_rule_set_title(context);
  let progress = html_progress_bar(root, goal_index, goals_count, "goal");
  let container = property_get(progress, "container");
  html_style_margin_top(container, "0");
  let div_abbreviations = html_div(root);
  let label_rules = html_p(root);
  let symbols_invalid_chosen = {};
  let div_rules_buttons = html_div(root);
  let label_symbols = html_p(root);
  let div_refresh = html_div(root);
  let goal_list_symbols = app_replace_rule_set_goal_show(root, end);
  let div_below = html_div(root);
  let success = false;
  let symbol_buttons = null;
  let rule_buttons = null;
  let duration = app_replace_animation_duration_get(context);
  let refresh_count = 0;
  let rules_useds = app_replace_rule_sets_fns_rules_used();
  let rules_used_all = property_get_or_null(rules_useds, rule_set_name);
  if (null_is(rules_used_all)) {
    rules_used = rules_parsed;
  } else {
    rules_used = list_get(rules_used_all, goal_index);
  }
  app_replace_rule_set_abbreviations(rs, rules_used, div_abbreviations);
  await refresh();
  async function refresh() {
    html_clear(div_rules_buttons);
    refresh_count_increase();
    function each_rule(rule, index) {
      function button_rule_on_click() {
        start_indices = list_size_range(start);
        button_rule_on_click_inner(index);
      }
      let rule_result = app_replace_button_rule(
        div_rules_buttons,
        rule,
        button_rule_on_click,
      );
      let arrow = property_get(rule_result, "arrow");
      let rights = property_get(rule_result, "rights");
      let lefts = property_get(rule_result, "lefts");
      let rule_button = property_get(rule_result, "b");
      html_disable(rule_button);
      object_merge_set(rule_button, {
        rule,
        lefts,
        rights,
        arrow,
      });
      return rule_button;
    }
    rule_buttons = list_map_index(rules_used, each_rule);
    function rbs_each(rule_button, rule_index) {
      refresh_rb();
      object_merge_set(rule_button, {
        refresh_rb,
      });
      function refresh_rb() {
        let state = {
          index_selected,
          success,
        };
        app_replace_rule_set_refresh_rb(rule_button, rule_index, state);
      }
    }
    each_index(rule_buttons, rbs_each);
    html_clear(div_refresh);
    let div_symbols = html_div(div_refresh);
    function symbols_mapper(symbol, index) {
      let symbol_button = null;
      async function symbol_on_click() {
        ({ start, symbols_invalid_chosen, start_indices } =
          await app_replace_rule_set_symbol_on_click(
            rules_used,
            index_selected,
            index,
            start,
            symbols_invalid_chosen,
            symbol_buttons,
            start_indices,
            rule_buttons,
            duration,
            div_symbols,
          ));
        let last = list_last(history);
        if (not(json_equal(start, last))) {
          list_add(history, start);
        }
        await refresh();
      }
      symbol_button = html_button(div_symbols, symbol, symbol_on_click);
      let value = app_replace_rule_set_attribute_symbol(index);
      html_data_set_test(symbol_button, value);
      app_replace_button_symbol_style(symbol_button);
      property_set_exists_not(symbol_button, "index", index);
      refresh_sb();
      object_merge_set(symbol_button, {
        refresh_sb,
      });
      let exists = property_exists(symbols_invalid_chosen, index);
      if (exists) {
        app_replace_button_symbol_style_invalid(symbol_button);
      }
      return symbol_button;
      function refresh_sb() {
        let state = {
          start_indices,
          index_selected,
          success,
        };
        app_replace_rule_set_refresh_sb(symbol_button, index, state);
      }
    }
    symbol_buttons = list_map_index(start, symbols_mapper);
    ("no success yet?");
    if (not(success)) {
      ("goal satisfied?");
      let eq = json_equal(start, end);
      if (eq) {
        success = true;
        list_map_property_invoke(rule_buttons, "refresh_rb");
        await app_replace_rule_set_success(
          rule_set_name,
          goal,
          context,
          goal_list_symbols,
          symbol_buttons,
          duration,
          div_below,
          goal_index,
          goals,
          history,
        );
        app_replace_rule_set_proof_show(div_proof, history);
      }
      let has_selection = null_not_is(index_selected);
      html_text_set_if(has_selection, "Rules:", "Choose a rule:", label_rules);
      html_text_set_if(has_selection, "Choose a symbol:", "Symbols:", label_symbols);
    }
    if (success) {
      html_visibility_hidden(div_symbols);
    }
    let t = app_replace_rule_set_verify_from_try(rules_used, start, end);
    let found = property_get(t, "found");
    if (not(found)) {
      function symbol_dead(symbol_button) {
        app_replace_button_symbol_style_dead(symbol_button);
      }
      each(symbol_buttons, symbol_dead);
      let green = app_replace_rule_set_highlight();
      html_style_background_color_set(start_over, green);
      await html_scroll_center(start_over);
    }
  }
  let left = emoji_restart();
  let combined = text_combine(left, " Start over");
  start_over = app_replace_button_screen(
    context,
    app_replace_rule_set,
    root,
    combined,
  );
  div_proof = html_div(root);
  function refresh_count_increase() {
    refresh_count++;
    let value3 = app_replace_rule_set_attribute_refresh_count(refresh_count);
    html_data_set_test(div_rules_buttons, value3);
  }
  function button_rule_on_click_inner(index) {
    symbols_invalid_chosen = {};
    index_selected = ternary(index_selected === index, null, index);
    list_map_property_invoke(symbol_buttons, "refresh_sb");
    list_map_property_invoke(rule_buttons, "refresh_rb");
    refresh_count_increase();
  }
}
