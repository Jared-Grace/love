import { app_replace_rule_set_solved_show } from "./app_replace_rule_set_solved_show.mjs";
import { app_replace_rule_set_each_rule } from "./app_replace_rule_set_each_rule.mjs";
import { app_replace_rule_set_on_hint } from "./app_replace_rule_set_on_hint.mjs";
import { app_replace_rule_set_symbols_mapper } from "./app_replace_rule_set_symbols_mapper.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_set_start_indices } from "./app_replace_rule_set_start_indices.mjs";
import { app_replace_rule_set_label_rules } from "./app_replace_rule_set_label_rules.mjs";
import { null_is } from "./null_is.mjs";
import { list_get } from "./list_get.mjs";
import { app_replace_rule_set_abbreviations } from "./app_replace_rule_set_abbreviations.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { app_replace_rule_set_rbs_each } from "./app_replace_rule_set_rbs_each.mjs";
import { each_index } from "./each_index.mjs";
import { html_div } from "./html_div.mjs";
import { json_equal } from "./json_equal.mjs";
import { not } from "./not.mjs";
import { list_map_property_invoke } from "./list_map_property_invoke.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_text_set_if } from "./html_text_set_if.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { app_replace_rule_set_verify_from_try } from "./app_replace_rule_set_verify_from_try.mjs";
import { app_replace_symbol_tile_dead } from "./app_replace_symbol_tile_dead.mjs";
import { each } from "./each.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_scroll_center } from "./html_scroll_center.mjs";
import { app_shared_button_restart_text } from "./app_shared_button_restart_text.mjs";
import { app_replace_rule_set_on_start_over } from "./app_replace_rule_set_on_start_over.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_replace_rule_set_refresh_count_increase } from "./app_replace_rule_set_refresh_count_increase.mjs";
import { app_replace_rule_set_button_rule_on_click_inner } from "./app_replace_rule_set_button_rule_on_click_inner.mjs";
export async function app_replace_rule_set(context) {
  let root = property_get(context, "root");
  let r4 = app_replace_rule_set_start_indices(context, root);
  let start_indices_held = {
    start_indices: property_get(r4, "start_indices"),
  };
  let div_proof = property_get(r4, "div_proof");
  let history = property_get(r4, "history");
  let start_held = {
    start: property_get(r4, "start"),
  };
  let resumed = property_get(r4, "resumed");
  let end = property_get(r4, "end");
  let rule_set_name = property_get(r4, "rule_set_name");
  let rules_used_held = {
    rules_used: property_get(r4, "rules_used"),
  };
  let start_over = property_get(r4, "start_over");
  let index_selected_held = {
    index_selected: property_get(r4, "index_selected"),
  };
  let rules_parsed = property_get(r4, "rules_parsed");
  let goal = property_get(r4, "goal");
  let goal_index = property_get(r4, "goal_index");
  let goals_count = property_get(r4, "goals_count");
  let goals = property_get(r4, "goals");
  async function on_hint() {
    let r6 = await app_replace_rule_set_on_hint({
      start_held,
      rules_parsed,
      end,
      rules_used_held,
      index_selected_held,
      start_indices_held,
      refresh,
      button_rule_on_click_inner,
    });
    return r6;
  }
  let r = app_replace_rule_set_label_rules({
    root,
    on_hint,
    context,
    goal_index,
    goals_count,
    end,
    rule_set_name,
  });
  let label_rules = property_get(r, "label_rules");
  let div_abbreviations = property_get(r, "div_abbreviations");
  let symbols_invalid_chosen_held = {
    symbols_invalid_chosen: property_get(r, "symbols_invalid_chosen"),
  };
  let div_rules_buttons = property_get(r, "div_rules_buttons");
  let label_symbols = property_get(r, "label_symbols");
  let div_refresh = property_get(r, "div_refresh");
  let goal_list_symbols = property_get(r, "goal_list_symbols");
  let div_below = property_get(r, "div_below");
  let success_held = {
    success: property_get(r, "success"),
  };
  let symbol_buttons_held = {
    symbol_buttons: property_get(r, "symbol_buttons"),
  };
  let rule_buttons_held = {
    rule_buttons: property_get(r, "rule_buttons"),
  };
  let duration = property_get(r, "duration");
  let refresh_count = property_get(r, "refresh_count");
  let rules_used_all = property_get(r, "rules_used_all");
  if (null_is(rules_used_all)) {
    property_set(rules_used_held, "rules_used", rules_parsed);
  } else {
    let value = list_get(rules_used_all, goal_index);
    property_set(rules_used_held, "rules_used", value);
  }
  let rules_used2 = property_get(rules_used_held, "rules_used");
  app_replace_rule_set_abbreviations(rules_used2, div_abbreviations);
  async function refresh() {
    html_clear(div_rules_buttons);
    refresh_count_increase();
    function each_rule(rule, index) {
      let r7 = app_replace_rule_set_each_rule(
        rule,
        index,
        start_held,
        start_indices_held,
        button_rule_on_click_inner,
        div_rules_buttons,
      );
      return r7;
    }
    let list = property_get(rules_used_held, "rules_used");
    let value11 = list_map_index(list, each_rule);
    property_set(rule_buttons_held, "rule_buttons", value11);
    function rbs_each(rule_button, rule_index) {
      let success2 = property_get(success_held, "success");
      let index_selected2 = property_get(index_selected_held, "index_selected");
      let r3 = app_replace_rule_set_rbs_each(
        rule_button,
        rule_index,
        index_selected2,
        success2,
      );
      return r3;
    }
    let list8 = property_get(rule_buttons_held, "rule_buttons");
    each_index(list8, rbs_each);
    html_clear(div_refresh);
    let div_symbols = html_div(div_refresh);
    function symbols_mapper(symbol, index) {
      let r5 = app_replace_rule_set_symbols_mapper({
        symbol,
        index,
        index_selected_held,
        symbols_invalid_chosen_held,
        start_indices_held,
        start_held,
        symbol_buttons_held,
        rule_buttons_held,
        rules_used_held,
        duration,
        div_symbols,
        refresh,
        success_held,
        history,
      });
      return r5;
    }
    let list5 = property_get(start_held, "start");
    let value10 = list_map_index(list5, symbols_mapper);
    property_set(symbol_buttons_held, "symbol_buttons", value10);
    ("no success yet?");
    let b = property_get(success_held, "success");
    if (not(b)) {
      ("goal satisfied?");
      let left = property_get(start_held, "start");
      let eq = json_equal(left, end);
      if (eq) {
        property_set(success_held, "success", true);
        await app_replace_rule_set_solved_show({
          rule_buttons_held,
          resumed,
          duration,
          rule_set_name,
          goal,
          context,
          goal_list_symbols,
          symbol_buttons_held,
          div_below,
          goal_index,
          goals,
          history,
          div_proof,
        });
      }
      let value2 = property_get(index_selected_held, "index_selected");
      let has_selection = null_not_is(value2);
      html_text_set_if(has_selection, "Rules:", "Choose a rule:", label_rules);
      html_text_set_if(
        has_selection,
        "Choose a symbol:",
        "Symbols:",
        label_symbols,
      );
    }
    if (property_get(success_held, "success")) {
      html_visibility_hidden(div_symbols);
    }
    let start4 = property_get(start_held, "start");
    let rules_parsed3 = property_get(rules_used_held, "rules_used");
    let t = app_replace_rule_set_verify_from_try(rules_parsed3, start4, end);
    let found = property_get(t, "found");
    if (not(found)) {
      function symbol_dead(symbol_button) {
        app_replace_symbol_tile_dead(symbol_button);
      }
      let list6 = property_get(symbol_buttons_held, "symbol_buttons");
      each(list6, symbol_dead);
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
    let index_selected4 = property_get(index_selected_held, "index_selected");
    let app_replace_rule_set_button_rule_on_click_inner_answer =
      app_replace_rule_set_button_rule_on_click_inner(index, index_selected4);
    let value5 = property_get(
      app_replace_rule_set_button_rule_on_click_inner_answer,
      "symbols_invalid_chosen",
    );
    property_set(symbols_invalid_chosen_held, "symbols_invalid_chosen", value5);
    let value3 = property_get(
      app_replace_rule_set_button_rule_on_click_inner_answer,
      "index_selected",
    );
    property_set(index_selected_held, "index_selected", value3);
    ("the rows of buttons are redrawn HERE, after the chosen rule has been stored, and not by the function that worked out which rule that is. Every one of these buttons redraws itself by reading this same variable, so redrawing before the answer had been stored painted every symbol as one no rule could touch - and a symbol no rule can touch cannot be pressed, which left the game unplayable");
    let list7 = property_get(symbol_buttons_held, "symbol_buttons");
    list_map_property_invoke(list7, "refresh_sb");
    let list10 = property_get(rule_buttons_held, "rule_buttons");
    list_map_property_invoke(list10, "refresh_rb");
    refresh_count_increase();
  }
}
