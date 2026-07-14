import { null_is } from "./null_is.mjs";
import { app_shared_button_selected_background_color } from "./app_shared_button_selected_background_color.mjs";
import { app_replace_rule_sets_fns_rules_used } from "./app_replace_rule_sets_fns_rules_used.mjs";
import { list_index_of_json } from "./list_index_of_json.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_replace_rule_set_verify_from_try } from "./app_replace_rule_set_verify_from_try.mjs";
import { list_map_property_invoke } from "./list_map_property_invoke.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_replace_animation_duration_get } from "./app_replace_animation_duration_get.mjs";
import { emoji_target } from "./emoji_target.mjs";
import { emoji_restart } from "./emoji_restart.mjs";
import { app_replace_rule_set_title } from "./app_replace_rule_set_title.mjs";
import { html_progress_bar } from "./html_progress_bar.mjs";
import { list_map_property_multiple } from "./list_map_property_multiple.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_replace_rule_set_attribute_hint } from "./app_replace_rule_set_attribute_hint.mjs";
import { app_replace_rule_set_attribute_refresh_count } from "./app_replace_rule_set_attribute_refresh_count.mjs";
import { app_replace_rule_set_attribute_symbol } from "./app_replace_rule_set_attribute_symbol.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
import { app_replace_rule_set_verify_goal_next } from "./app_replace_rule_set_verify_goal_next.mjs";
import { list_includes } from "./list_includes.mjs";
import { app_replace_rule_set_symbol_on_click } from "./app_replace_rule_set_symbol_on_click.mjs";
import { app_replace_rule_set_success } from "./app_replace_rule_set_success.mjs";
import { list_size_half_ceil } from "./list_size_half_ceil.mjs";
import { list_swap_first } from "./list_swap_first.mjs";
import { list_take } from "./list_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_size_range } from "./list_size_range.mjs";
import { equal } from "./equal.mjs";
import { emoji_question } from "./emoji_question.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { html_element } from "./html_element.mjs";
import { html_cycle_bold } from "./html_cycle_bold.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { app_replace_start_end_get } from "./app_replace_start_end_get.mjs";
import { app_replace_button_symbol_style_invalid } from "./app_replace_button_symbol_style_invalid.mjs";
import { app_replace_button_screen } from "./app_replace_button_screen.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { property_exists } from "./property_exists.mjs";
import { app_replace_button_home } from "./app_replace_button_home.mjs";
import { json_equal } from "./json_equal.mjs";
import { each } from "./each.mjs";
import { app_replace_button_symbol_style_valid_if_curried_right } from "./app_replace_button_symbol_style_valid_if_curried_right.mjs";
import { app_replace_button_side } from "./app_replace_button_side.mjs";
import { app_replace_goals } from "./app_replace_goals.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { app_replace_lefts_rights_style } from "./app_replace_lefts_rights_style.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { app_replace_button_rule } from "./app_replace_button_rule.mjs";
import { app_replace_rule_set_get } from "./app_replace_rule_set_get.mjs";
import { ternary } from "./ternary.mjs";
import { app_replace_button_rule_background_color } from "./app_replace_button_rule_background_color.mjs";
import { app_replace_rule_set_highlight } from "./app_replace_rule_set_highlight.mjs";
import { html_font_color_set_if } from "./html_font_color_set_if.mjs";
import { ternary_nested } from "./ternary_nested.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_replace_button_symbol_style_valid_if } from "./app_replace_button_symbol_style_valid_if.mjs";
import { app_replace_rule_valid_curried } from "./app_replace_rule_valid_curried.mjs";
import { app_replace_button_symbol_style } from "./app_replace_button_symbol_style.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { range } from "./range.mjs";
import { list_any } from "./list_any.mjs";
import { html_div } from "./html_div.mjs";
import { list_size } from "./list_size.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_replace_rule_valid } from "./app_replace_rule_valid.mjs";
import { not } from "./not.mjs";
import { html_enable_if } from "./html_enable_if.mjs";
import { html_text_set_if } from "./html_text_set_if.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each_index } from "./each_index.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { html_p } from "./html_p.mjs";
import { html_disable } from "./html_disable.mjs";
import { property_get } from "./property_get.mjs";
import { html_button } from "./html_button.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { list_get } from "./list_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function app_replace_rule_set(context) {
  let root = property_get(context, "root");
  app_replace_button_home(root, context);
  let left3 = emoji_target();
  let combined2 = text_combine(left3, "Goals");
  app_replace_button_screen(context, app_replace_goals, root, combined2);
  let rs = app_replace_rule_set_get(context);
  let goals = property_get(rs, "goals");
  let goals_count = list_size(goals);
  let goal_index = storage_local_get_context(context, "goal_index");
  let goal = list_get(goals, goal_index);
  let rules_parsed = app_replace_rule_set_rules_get(rs);
  let index_selected = null;
  let start_over = null;
  let rules_used = null;
  let r4 = app_replace_start_end_get(goal);
  let start = property_get(r4, "start");
  let start_indices = list_size_range(start);
  let end = property_get(r4, "end");
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
  let r3 = html_progress_bar(root, goal_index, goals_count, "goal");
  let container = property_get(r3, "container");
  html_style_margin_top(container, "0");
  let highlight = app_replace_rule_set_highlight();
  let rule_set_name = property_get(rs, "name");
  let div_abbreviations = html_div(root);
  let label_rules = html_p(root);
  let symbols_invalid_chosen = {};
  let div_rules_buttons = html_div(root);
  let label_symbols = html_p(root);
  let div_refresh = html_div(root);
  let label_goal = app_shared_text_body(root, "Goal:");
  let p_goal = html_p(root);
  let goal_list_symbols = app_replace_button_side(p_goal, end);
  let lambda4 = app_replace_button_symbol_style_valid_if_curried_right(
    false,
    false,
  );
  each(goal_list_symbols, lambda4);
  let div_below = html_div(root);
  let success = false;
  let sbs = null;
  let rbs = null;
  let duration = app_replace_animation_duration_get(context);
  let refresh_count = 0;
  let rules_useds = app_replace_rule_sets_fns_rules_used();
  let rules_used_all = property_get_or_null(rules_useds, rule_set_name);
  if (null_is(rules_used_all)) {
    rules_used = rules_parsed;
  } else {
    rules_used = list_get(rules_used_all, goal_index);
  }
  let exists2 = property_exists(rs, "abbreviations");
  if (exists2) {
    let properties = ["left", "right"];
    let mapped = list_map_property_multiple(rules_used, properties);
    let squashed = list_squash(mapped);
    let unique = list_unique(squashed);
    app_shared_text_body(div_abbreviations, "Abbreviations");
    let component = html_element(div_abbreviations, "ul");
    let abbreviations = property_get(rs, "abbreviations");
    let list = object_to_list(abbreviations);
    list_sort_text_property(list, "key");
    function lambda6(kv) {
      let key = property_get(kv, "key");
      let includes2 = list_includes(unique, key);
      if (includes2) {
        let value2 = property_get(kv, "value");
        let concated = list_concat(["", key, ": ", ""], value2);
        let component2 = html_element(component, "li");
        html_cycle_bold(component2, concated);
      }
    }
    each(list, lambda6);
  }
  await refresh();
  async function refresh() {
    html_clear(div_rules_buttons);
    refresh_count_increase();
    function each_rule(rule, index) {
      function button_rule_on_click() {
        start_indices = list_size_range(start);
        button_rule_on_click_inner(index);
      }
      let r2 = app_replace_button_rule(
        div_rules_buttons,
        rule,
        button_rule_on_click,
      );
      let arrow = property_get(r2, "arrow");
      let rights = property_get(r2, "rights");
      let lefts = property_get(r2, "lefts");
      let rb = property_get(r2, "b");
      html_disable(rb);
      object_merge_set(rb, {
        rule,
        lefts,
        rights,
        arrow,
      });
      return rb;
    }
    rbs = list_map_index(rules_used, each_rule);
    function rbs_each(rb, index2) {
      refresh_rb();
      object_merge_set(rb, {
        refresh_rb,
      });
      function refresh_rb() {
        let rule2 = property_get(rb, "rule");
        let size = list_size(start);
        let r = range(size);
        let lambda7 = app_replace_rule_valid_curried(rule2, start);
        let enabled = list_any(r, lambda7);
        let selected = index2 === index_selected;
        enabled = index_selected === null || selected;
        enabled = true;
        html_enable_if(rb, enabled);
        app_replace_lefts_rights_style(rb, enabled, success);
        let button_background_color =
          app_replace_button_rule_background_color();
        let blue_strong = app_shared_button_selected_background_color();
        let c = ternary_nested(
          selected,
          blue_strong,
          enabled,
          button_background_color,
          "#a8a8a8ff",
        );
        if (success) {
          c = highlight;
        }
        html_style_background_color_set(rb, c);
        let arrow2 = property_get(rb, "arrow");
        html_font_color_set_if(enabled, arrow2, "black", "#6a6a6a");
      }
    }
    each_index(rbs, rbs_each);
    html_clear(div_refresh);
    let div_symbols = html_div(div_refresh);
    function symbols_mapper(symbol, index) {
      let sb = null;
      async function symbol_on_click() {
        ({ start, symbols_invalid_chosen, start_indices } =
          await app_replace_rule_set_symbol_on_click(
            rules_used,
            index_selected,
            index,
            start,
            symbols_invalid_chosen,
            sbs,
            start_indices,
            rbs,
            duration,
            div_symbols,
          ));
        await refresh();
      }
      sb = html_button(div_symbols, symbol, symbol_on_click);
      let value = app_replace_rule_set_attribute_symbol(index);
      html_data_set_test(sb, value);
      app_replace_button_symbol_style(sb);
      property_set_exists_not(sb, "index", index);
      let nn2 = null_not_is(index_selected);
      if (nn2) {
        let index3 = property_get(sb, "index");
        let rule2 = list_get(rules_used, index_selected);
        let valid = app_replace_rule_valid(rule2, index3, start);
      }
      refresh_sb();
      object_merge_set(sb, {
        refresh_sb,
      });
      let exists = property_exists(symbols_invalid_chosen, index);
      if (exists) {
        app_replace_button_symbol_style_invalid(sb);
      }
      return sb;
      function refresh_sb() {
        let includes = list_includes(start_indices, index);
        app_replace_button_symbol_style_valid_if(
          sb,
          index_selected !== null && includes,
          success,
        );
      }
    }
    sbs = list_map_index(start, symbols_mapper);
    ("no success yet?");
    if (not(success)) {
      ("goal satisfied?");
      let eq = json_equal(start, end);
      if (eq) {
        success = true;
        await app_replace_rule_set_success(
          rule_set_name,
          goal,
          context,
          goal_list_symbols,
          sbs,
          duration,
          div_below,
          goal_index,
          goals,
        );
      }
      let nn = null_not_is(index_selected);
      html_text_set_if(nn, "Rules:", "Choose a rule:", label_rules);
      html_text_set_if(nn, "Choose a symbol:", "Symbols:", label_symbols);
    }
    if (success) {
      html_visibility_hidden(div_symbols);
    }
    let t = app_replace_rule_set_verify_from_try(rules_used, start, end);
    let found = property_get(t, "found");
    if (not(found)) {
      html_style_background_color_set(start_over, "red");
      html_font_color_set(start_over, "white");
      await html_scroll_center(start_over);
    }
  }
  let left = emoji_restart();
  let combined = text_combine(left, "Start over");
  start_over = app_replace_button_screen(
    context,
    app_replace_rule_set,
    root,
    combined,
  );
  function refresh_count_increase() {
    refresh_count++;
    let value3 = app_replace_rule_set_attribute_refresh_count(refresh_count);
    html_data_set_test(div_rules_buttons, value3);
  }
  function button_rule_on_click_inner(index) {
    symbols_invalid_chosen = {};
    index_selected = ternary(index_selected === index, null, index);
    list_map_property_invoke(sbs, "refresh_sb");
    list_map_property_invoke(rbs, "refresh_rb");
    refresh_count_increase();
  }
}
