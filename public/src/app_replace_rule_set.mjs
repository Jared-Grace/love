import { log } from "./log.mjs";
import { object_property_set_exists_not } from "./object_property_set_exists_not.mjs";
import { range } from "./range.mjs";
import { list_any } from "./list_any.mjs";
import { html_div } from "./html_div.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_replace_rule_valid } from "./app_replace_rule_valid.mjs";
import { not } from "./not.mjs";
import { html_enable_if } from "./html_enable_if.mjs";
import { html_text_set_if } from "./html_text_set_if.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_style_set_or_remove } from "./html_style_set_or_remove.mjs";
import { each_index } from "./each_index.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { each } from "./each.mjs";
import { html_p } from "./html_p.mjs";
import { html_disable } from "./html_disable.mjs";
import { string_split_empty } from "./string_split_empty.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { html_button } from "./html_button.mjs";
import { app_replace_rule_parse } from "./app_replace_rule_parse.mjs";
import { list_map } from "./list_map.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { list_get } from "./list_get.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { emoji_home } from "./emoji_home.mjs";
import { html_button_screen } from "./html_button_screen.mjs";
import { marker } from "./marker.mjs";
import { list_take } from "./list_take.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_replace_rule_set(context) {
  let { root } = context;
  html_button_screen(root, emoji_home() + "Home", context, "home");
  let index = storage_local_get_context(context, "rule_set_index");
  let rule_sets = app_replace_rule_sets();
  let item = list_get(rule_sets, index);
  let { name } = item;
  html_p_text(root, "Rule set: " + name);
  let { start } = item;
  let current = storage_local_initialize_context(
    context,
    "rule_set_start",
    start,
  );
  let index_selected = null;
  let label_rules = html_p(root);
  let { rules } = item;
  let mapped = list_map(rules, app_replace_rule_parse);
  function lambda(rule, index) {
    let left = object_property_get(rule, "left");
    let right = object_property_get(rule, "right");
    let right_joined = list_join_space(right);
    let left_joined = list_join_space(left);
    let text = left_joined + " ↦ " + right_joined;
    function lambda3() {
      if (index_selected === index) {
        index_selected = null;
      } else {
        index_selected = index;
      }
      refresh();
      return;
    }
    let b = html_button(root, text, lambda3);
    html_disable(b);
    object_merge(b, {
      rule,
    });
    return b;
  }
  let rules_buttons = list_map_index(mapped, lambda);
  let label_symbols = html_p(root);
  let div = html_div(root);
  let current_list = string_split_empty(start);
  let symbols_buttons = null;
  refresh();
  function refresh() {
    html_clear(div);
    function lambda2(letter, index) {
      function lambda5() {
        let rule2 = list_get(mapped, index_selected);
        log({
          rule2,
        });
        let eq = app_replace_rule_valid(rule2, index_selected, current_list);
        if (not(eq)) {
          alert("invalid index for rule");
        }
        let left = rule2;
        let before = list_take(current_list, index);
        let size = list_size(left);
        let after = list_skip(current_list, index + size);
        current_list = list_concat_multiple([before, right, after]);
        index_selected = null;
        refresh();
      }
      let b = html_button(div, letter, lambda5);
      object_property_set_exists_not(b, "index", index);
      return b;
    }
    symbols_buttons = list_map_index(current_list, lambda2);
    let nn = null_not_is(index_selected);
    html_text_set_if(nn, "Choose a rule:", "Rules:", label_rules);
    html_text_set_if(nn, "Symbols:", "Choose a symbol:", label_symbols);
    function lambda6(component) {
      let rule2 = object_property_get(component, "rule");
      function lambda7(index) {
        let eq2 = app_replace_rule_valid(rule2, index, current_list);
        return eq2;
      }
      let size2 = list_size(current_list);
      let r = range(size2);
      let any = list_any(r, lambda7);
      html_enable_if(component, any);
    }
    each(rules_buttons, lambda6);
    function lambda4(rb, index2) {
      html_style_set_or_remove(
        index2 === index_selected,
        rb,
        "background-color",
        "lightgreen",
      );
    }
    each_index(rules_buttons, lambda4);
    function lambda8(sb) {
      let valid = false;
      let nn2 = null_not_is(index_selected);
      if (nn2) {
        let index3 = object_property_get(sb, "index");
        let rule2 = list_get(mapped, index_selected);
        valid = app_replace_rule_valid(rule2, index3, current_list);
      }
      html_enable_if(sb, valid);
    }
    each(symbols_buttons, lambda8);
  }
  refresh();
  marker("1");
}
