import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { each_nested } from "../../../love/public/src/each_nested.mjs";
import { json_equal } from "../../../love/public/src/json_equal.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_replace_button_symbol_style_valid_curry_right } from "../../../love/public/src/app_replace_button_symbol_style_valid_curry_right.mjs";
import { app_replace_button_side } from "../../../love/public/src/app_replace_button_side.mjs";
import { app_replace_goals } from "../../../love/public/src/app_replace_goals.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { app_replace_lefts_rights_style } from "../../../love/public/src/app_replace_lefts_rights_style.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { app_replace_button_rule } from "../../../love/public/src/app_replace_button_rule.mjs";
import { app_replace_rule_set_get } from "../../../love/public/src/app_replace_rule_set_get.mjs";
import { app_replace_button_style } from "../../../love/public/src/app_replace_button_style.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { app_replace_button_rule_background_color } from "../../../love/public/src/app_replace_button_rule_background_color.mjs";
import { app_replace_rule_set_highlight } from "../../../love/public/src/app_replace_rule_set_highlight.mjs";
import { html_style_font_color_set_if } from "../../../love/public/src/html_style_font_color_set_if.mjs";
import { ternary_nested } from "../../../love/public/src/ternary_nested.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { app_replace_button_symbol_style_valid } from "../../../love/public/src/app_replace_button_symbol_style_valid.mjs";
import { app_replace_rule_valid_curry } from "../../../love/public/src/app_replace_rule_valid_curry.mjs";
import { app_replace_button_symbol_style } from "../../../love/public/src/app_replace_button_symbol_style.mjs";
import { app_replace_home } from "../../../love/public/src/app_replace_home.mjs";
import { property_set_exists_not } from "../../../love/public/src/property_set_exists_not.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { list_concat_multiple } from "../../../love/public/src/list_concat_multiple.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_valid } from "../../../love/public/src/app_replace_rule_valid.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { html_enable_if } from "../../../love/public/src/html_enable_if.mjs";
import { html_text_set_if } from "../../../love/public/src/html_text_set_if.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { html_disable } from "../../../love/public/src/html_disable.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_replace_rule_parse } from "../../../love/public/src/app_replace_rule_parse.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { emoji_home } from "../../../love/public/src/emoji_home.mjs";
import { html_button_screen } from "../../../love/public/src/html_button_screen.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export async function app_replace_rule_set(context) {
  let root = property_get(context, "root");
  let b = html_button_screen(
    root,
    emoji_home() + " Home",
    context,
    app_replace_home,
  );
  app_replace_button_style(b);
  function lambda2() {
    app_shared_screen_set(context, app_replace_goals);
  }
  let b2 = app_replace_button(root, "Goals", lambda2);
  let rule = app_replace_rule_set_get(context);
  let name = property_get(rule, "name");
  html_p_text(root, "Rule set: " + name);
  let goal_index = storage_local_get_context(context, "goal_index");
  let goals = property_get(rule, "goals");
  let goal = list_get(goals, goal_index);
  let start = property_get(goal, "start");
  if (false) {
    ("not sure if this is needed or not");
    let current = storage_local_initialize_context(
      context,
      "rule_set_start",
      start,
    );
  }
  let index_selected = null;
  let label_rules = html_p(root);
  let rules = property_get(rule, "rules");
  let rules_parsed = list_map(rules, app_replace_rule_parse);
  function each_button_rule(rule, index) {
    let left = property_get(rule, "left");
    let right = property_get(rule, "right");
    function lambda3() {
      index_selected = ternary(index_selected === index, null, index);
      refresh();
      return;
    }
    let r2 = app_replace_button_rule(root, left, right, lambda3);
    let arrow = property_get(r2, "arrow");
    let rights = property_get(r2, "rights");
    let lefts = property_get(r2, "lefts");
    let b = property_get(r2, "b");
    html_disable(b);
    object_merge(b, {
      rule,
      lefts,
      rights,
      arrow,
    });
    return b;
  }
  let rules_buttons = list_map_index(rules_parsed, each_button_rule);
  let label_symbols = html_p(root);
  let div_symbols = html_div(root);
  let current_list = text_split_empty(start);
  let label_goal = html_p_text(root, "Goal:");
  let end = property_get(goal, "end");
  let goal_list = text_split_empty(end);
  let p_goal = html_p(root);
  let goal_list_symbols = app_replace_button_side(p_goal, goal_list);
  let lambda4 = app_replace_button_symbol_style_valid_curry_right(false);
  each(goal_list_symbols, lambda4);
  refresh();
  function refresh() {
    function each_button_rule_refresh(rb, index2) {
      let rule2 = property_get(rb, "rule");
      let size2 = list_size(current_list);
      let r = range(size2);
      let lambda7 = app_replace_rule_valid_curry(rule2, current_list);
      let enabled = list_any(r, lambda7);
      html_enable_if(rb, enabled);
      app_replace_lefts_rights_style(rb, enabled);
      const selected = index2 === index_selected;
      let on_a = app_replace_rule_set_highlight();
      let on_b = app_replace_button_rule_background_color();
      let c = ternary_nested(selected, on_a, enabled, on_b, "#a8a8a8ff");
      html_style_background_color_set(rb, c);
      let arrow2 = property_get(rb, "arrow");
      html_style_font_color_set_if(enabled, arrow2, "black", "#6a6a6a");
    }
    each_index(rules_buttons, each_button_rule_refresh);
    html_clear(div_symbols);
    function symbols_mapper(symbol, index) {
      function symbol_on_click() {
        let rule2 = list_get(rules_parsed, index_selected);
        let eq = app_replace_rule_valid(rule2, index, current_list);
        if (not(eq)) {
          alert("invalid index for rule");
        }
        let right = property_get(rule2, "right");
        let left = property_get(rule2, "left");
        let before = list_take(current_list, index);
        let size = list_size(left);
        let after = list_skip(current_list, index + size);
        current_list = list_concat_multiple([before, right, after]);
        index_selected = null;
        refresh();
      }
      let sb = html_button(div_symbols, symbol, symbol_on_click);
      app_replace_button_symbol_style(sb);
      property_set_exists_not(sb, "index", index);
      let valid = false;
      let nn2 = null_not_is(index_selected);
      if (nn2) {
        let index3 = property_get(sb, "index");
        let rule2 = list_get(rules_parsed, index_selected);
        valid = app_replace_rule_valid(rule2, index3, current_list);
      }
      app_replace_button_symbol_style_valid(sb, valid);
      return sb;
    }
    let sbs = list_map_index(current_list, symbols_mapper);
    let eq2 = json_equal(current_list, goal_list);
    if (eq2) {
      let lambda4 = app_replace_button_symbol_style_valid_curry_right(true);
      each_nested([goal_list_symbols, sbs], lambda4);
      let text = emoji_check();
      let span = html_span_text(div_symbols, text);
      html_span_text(div_symbols, text);
    }
    let nn = null_not_is(index_selected);
    html_text_set_if(nn, "Rules:", "Choose a rule:", label_rules);
    html_text_set_if(nn, "Choose a symbol:", "Symbols:", label_symbols);
  }
  refresh();
}
