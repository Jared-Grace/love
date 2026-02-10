import { app_replace_rule_valid_curried } from "../../../love/public/src/app_replace_rule_valid_curried.mjs";
import { html_border_none } from "../../../love/public/src/html_border_none.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_button_notext } from "../../../love/public/src/html_button_notext.mjs";
import { app_replace_button_symbol_style } from "../../../love/public/src/app_replace_button_symbol_style.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
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
import { html_style_set_or_remove } from "../../../love/public/src/html_style_set_or_remove.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { html_disable } from "../../../love/public/src/html_disable.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
import { app_replace_rule_parse } from "../../../love/public/src/app_replace_rule_parse.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { emoji_home } from "../../../love/public/src/emoji_home.mjs";
import { html_button_screen } from "../../../love/public/src/html_button_screen.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export async function app_replace_rule_set(context) {
  let root = property_get(context, "root");
  html_button_screen(root, emoji_home() + "Home", context, app_replace_home);
  let index = await storage_local_get_context(context, "rule_set_index");
  let rule_sets = app_replace_rule_sets();
  let item = list_get(rule_sets, index);
  let name = property_get(item, "name");
  html_p_text(root, "Rule set: " + name);
  let start = property_get(item, "start");
  let current = await storage_local_initialize_context(
    context,
    "rule_set_start",
    start,
  );
  let index_selected = null;
  let label_rules = html_p(root);
  let rules = property_get(item, "rules");
  let rules_parsed = list_map(rules, app_replace_rule_parse);
  function lambda(rule, index) {
    let left = property_get(rule, "left");
    let right = property_get(rule, "right");
    let right_joined = list_join_space(right);
    let left_joined = list_join_space(left);
    let text = left_joined + right_joined;
    function lambda3() {
      if (index_selected === index) {
        index_selected = null;
      } else {
        index_selected = index;
      }
      refresh();
      return;
    }
    let b = html_button_notext(root, lambda3);
    html_border_none(b);
    let lefts = rule_button_side(b, left);
    let span2 = html_span_text(b, " ↦ ");
    let rights = rule_button_side(b, right);
    html_disable(b);
    object_merge(b, {
      rule,
      lefts,
      rights,
    });
    return b;
  }
  let rules_buttons = list_map_index(rules_parsed, lambda);
  let label_symbols = html_p(root);
  let div = html_div(root);
  let current_list = text_split_empty(start);
  refresh();
  function rule_button_side(b, left) {
    function symbol_each(symbol) {
      let span = html_span_text(b, symbol);
      app_replace_button_symbol_style(span);
      app_replace_button_symbol_style_valid(span, true);
      return span;
    }
    let mapped = list_map(left, symbol_each);
    return mapped;
  }
  function refresh() {
    html_clear(div);
    function symbols_mapper(letter, index) {
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
      let sb = html_button(div, letter, symbol_on_click);
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
    each_index(current_list, symbols_mapper);
    let nn = null_not_is(index_selected);
    html_text_set_if(nn, "Rules:", "Choose a rule:", label_rules);
    html_text_set_if(nn, "Choose a symbol:", "Symbols:", label_symbols);
    function each_rule_button(rb, index2) {
      let rule2 = property_get(rb, "rule");
      let lambda7 = app_replace_rule_valid_curried(rule2, current_list);
      let size2 = list_size(current_list);
      let r = range(size2);
      let any = list_any(r, lambda7);
      html_enable_if(rb, any);
      html_style_set_or_remove(
        index2 === index_selected,
        rb,
        "background-color",
        "lightgreen",
      );
    }
    each_index(rules_buttons, each_rule_button);
  }
  refresh();
  function app_replace_button_symbol_style_valid(sb, valid) {
    let color_font = null;
    let color_bg = null;
    html_enable_if(sb, valid);
    if (valid) {
      color_bg = "#00b400ff";
      color_font = "white";
    } else {
      color_bg = "#1e6c1eff";
      color_font = "#b1e8b1ff";
    }
    html_style_background_color(sb, color_bg);
    html_font_color_set(sb, color_font);
  }
}
