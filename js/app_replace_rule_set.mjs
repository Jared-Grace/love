import { app_replace_rule_set_goals } from "./app_replace_rule_set_goals.mjs";
import { app_replace_rule_set_start_indices } from "./app_replace_rule_set_start_indices.mjs";
import { app_replace_rule_set_button_rule_on_click_inner } from "./app_replace_rule_set_button_rule_on_click_inner.mjs";
import { app_replace_rule_set_refresh_count_increase } from "./app_replace_rule_set_refresh_count_increase.mjs";
import { app_replace_rule_set_label_rules } from "./app_replace_rule_set_label_rules.mjs";
import { app_replace_rule_set_rbs_each } from "./app_replace_rule_set_rbs_each.mjs";
import { app_replace_rule_set_on_start_over } from "./app_replace_rule_set_on_start_over.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { fn_name } from "./fn_name.mjs";
import { null_is } from "./null_is.mjs";
import { list_index_of_json } from "./list_index_of_json.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { app_replace_symbol_tile_dead } from "./app_replace_symbol_tile_dead.mjs";
import { app_replace_rule_set_verify_from_try } from "./app_replace_rule_set_verify_from_try.mjs";
import { list_map_property_invoke } from "./list_map_property_invoke.mjs";
import { app_shared_button_restart_text } from "./app_shared_button_restart_text.mjs";
import { app_replace_rule_set_abbreviations } from "./app_replace_rule_set_abbreviations.mjs";
import { app_replace_rule_set_refresh_sb } from "./app_replace_rule_set_refresh_sb.mjs";
import { app_replace_rule_set_attribute_symbol } from "./app_replace_rule_set_attribute_symbol.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
import { app_replace_rule_set_verify_goal_next } from "./app_replace_rule_set_verify_goal_next.mjs";
import { app_replace_rule_set_symbol_on_click } from "./app_replace_rule_set_symbol_on_click.mjs";
import { app_replace_rule_set_success } from "./app_replace_rule_set_success.mjs";
import { app_replace_rule_set_proof_show } from "./app_replace_rule_set_proof_show.mjs";
import { list_add } from "./list_add.mjs";
import { list_size_half_ceil } from "./list_size_half_ceil.mjs";
import { list_swap_first } from "./list_swap_first.mjs";
import { list_take } from "./list_take.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_to_indices } from "./list_to_indices.mjs";
import { equal } from "./equal.mjs";
import { app_replace_symbol_tile_invalid } from "./app_replace_symbol_tile_invalid.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { property_exists } from "./property_exists.mjs";
import { json_equal } from "./json_equal.mjs";
import { each } from "./each.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_replace_button_rule } from "./app_replace_button_rule.mjs";
import { ternary } from "./ternary.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_symbol_tile_style } from "./app_shared_symbol_tile_style.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { html_div } from "./html_div.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { not } from "./not.mjs";
import { html_text_set_if } from "./html_text_set_if.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { each_index } from "./each_index.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { html_disable } from "./html_disable.mjs";
import { property_get } from "./property_get.mjs";
import { html_button } from "./html_button.mjs";
import { list_get } from "./list_get.mjs";
import { html_clear } from "./html_clear.mjs";
export async function app_replace_rule_set(context) {
  let root = property_get(context, "root");
  let r4 = app_replace_rule_set_start_indices(context, root);
  let start_indices = property_get(r4, "start_indices");
  let div_proof = property_get(r4, "div_proof");
  let history = property_get(r4, "history");
  let start = property_get(r4, "start");
  let resumed = property_get(r4, "resumed");
  let end = property_get(r4, "end");
  let rule_set_name = property_get(r4, "rule_set_name");
  let rules_used = property_get(r4, "rules_used");
  let r5 = app_replace_rule_set_goals(r4);
  let goals = property_get(r5, "goals");
  let goals_count = property_get(r5, "goals_count");
  let goal_index = property_get(r5, "goal_index");
  let goal = property_get(r5, "goal");
  let rules_parsed = property_get(r5, "rules_parsed");
  let index_selected = property_get(r5, "index_selected");
  let start_over = property_get(r5, "start_over");
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
  let r = app_replace_rule_set_label_rules(
    root,
    on_hint,
    context,
    goal_index,
    goals_count,
    end,
    rule_set_name,
  );
  let label_rules = property_get(r, "label_rules");
  let div_abbreviations = property_get(r, "div_abbreviations");
  let symbols_invalid_chosen = property_get(r, "symbols_invalid_chosen");
  let div_rules_buttons = property_get(r, "div_rules_buttons");
  let label_symbols = property_get(r, "label_symbols");
  let div_refresh = property_get(r, "div_refresh");
  let goal_list_symbols = property_get(r, "goal_list_symbols");
  let div_below = property_get(r, "div_below");
  let success = property_get(r, "success");
  let symbol_buttons = property_get(r, "symbol_buttons");
  let rule_buttons = property_get(r, "rule_buttons");
  let duration = property_get(r, "duration");
  let refresh_count = property_get(r, "refresh_count");
  let rules_used_all = property_get(r, "rules_used_all");
  if (null_is(rules_used_all)) {
    rules_used = rules_parsed;
  } else {
    rules_used = list_get(rules_used_all, goal_index);
  }
  app_replace_rule_set_abbreviations(rules_used, div_abbreviations);
  async function refresh() {
    html_clear(div_rules_buttons);
    refresh_count_increase();
    function each_rule(rule, index) {
      function button_rule_on_click() {
        start_indices = list_to_indices(start);
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
      let r3 = app_replace_rule_set_rbs_each(
        rule_button,
        rule_index,
        index_selected,
        success,
      );
      return r3;
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
        let last_state = list_last_property(history, "state");
        let b = json_equal(start, last_state);
        if (not(b)) {
          let rule_used = list_get(rules_used, index_selected);
          ("index is where the rule's left matched (the position passed to ",
            fn_name("app_replace_rule_apply"),
            "); the proof needs it to highlight exactly which symbols the rule replaced, in the state before and the state after");
          list_add(history, {
            state: start,
            rule: rule_used,
            index,
          });
        }
        await refresh();
      }
      symbol_button = html_button(div_symbols, symbol, symbol_on_click);
      let value = app_replace_rule_set_attribute_symbol(index);
      html_data_set_test(symbol_button, value);
      app_shared_symbol_tile_style(symbol_button);
      property_set_exists_not(symbol_button, "index", index);
      refresh_sb();
      object_merge_set(symbol_button, {
        refresh_sb,
      });
      let exists = property_exists(symbols_invalid_chosen, index);
      if (exists) {
        app_replace_symbol_tile_invalid(symbol_button);
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
        ("a resumed goal snaps straight to solved (duration 0): the win animation is feedback for the act of solving, so on a refresh - where nothing was just done - it is skipped and only the message and proof appear");
        let success_duration = ternary(resumed, 0, duration);
        await app_replace_rule_set_success(
          rule_set_name,
          goal,
          context,
          goal_list_symbols,
          symbol_buttons,
          success_duration,
          div_below,
          goal_index,
          goals,
          history,
        );
        app_replace_rule_set_proof_show(div_proof, history);
      }
      let has_selection = null_not_is(index_selected);
      html_text_set_if(has_selection, "Rules:", "Choose a rule:", label_rules);
      html_text_set_if(
        has_selection,
        "Choose a symbol:",
        "Symbols:",
        label_symbols,
      );
    }
    if (success) {
      html_visibility_hidden(div_symbols);
    }
    let t = app_replace_rule_set_verify_from_try(rules_used, start, end);
    let found = property_get(t, "found");
    if (not(found)) {
      function symbol_dead(symbol_button) {
        app_replace_symbol_tile_dead(symbol_button);
      }
      each(symbol_buttons, symbol_dead);
      let green = app_shared_color_green_light();
      html_style_background_color_set(start_over, green);
      await html_scroll_center(start_over);
    }
  }
  let combined = app_shared_button_restart_text("Start over");
  async function on_start_over() {
    let r2 = await app_replace_rule_set_on_start_over(
      rule_set_name,
      goal,
      context,
    );
    return r2;
  }
  start_over = app_shared_button(root, combined, on_start_over);
  div_proof = html_div(root);
  ("first render happens here, after start_over and div_proof exist, so a resumed goal's success flow can draw the proof into them");
  await refresh();
  function refresh_count_increase() {
    let app_replace_rule_set_refresh_count_increase_answer =
      app_replace_rule_set_refresh_count_increase(
        refresh_count,
        div_rules_buttons,
      );
    refresh_count = property_get(
      app_replace_rule_set_refresh_count_increase_answer,
      "refresh_count",
    );
  }
  function button_rule_on_click_inner(index) {
    let app_replace_rule_set_button_rule_on_click_inner_answer =
      app_replace_rule_set_button_rule_on_click_inner(
        index,
        symbols_invalid_chosen,
        index_selected,
        symbol_buttons,
        rule_buttons,
        refresh_count_increase,
      );
    symbols_invalid_chosen = property_get(
      app_replace_rule_set_button_rule_on_click_inner_answer,
      "symbols_invalid_chosen",
    );
    index_selected = property_get(
      app_replace_rule_set_button_rule_on_click_inner_answer,
      "index_selected",
    );
  }
}
