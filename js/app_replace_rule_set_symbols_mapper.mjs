import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_replace_rule_set_symbol_on_click } from "./app_replace_rule_set_symbol_on_click.mjs";
import { property_set } from "./property_set.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { json_equal } from "./json_equal.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { html_button } from "./html_button.mjs";
import { app_replace_rule_set_attribute_symbol } from "./app_replace_rule_set_attribute_symbol.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
import { app_shared_symbol_tile_style } from "./app_shared_symbol_tile_style.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { app_replace_symbol_tile_invalid } from "./app_replace_symbol_tile_invalid.mjs";
import { app_replace_rule_set_refresh_sb } from "./app_replace_rule_set_refresh_sb.mjs";
export function app_replace_rule_set_symbols_mapper(
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
) {
  arguments_assert(arguments, 14);
  let symbol_button = null;
  async function symbol_on_click() {
    let index_selected3 = property_get(index_selected_held, "index_selected");
    let symbols_invalid_chosen = property_get(
      symbols_invalid_chosen_held,
      "symbols_invalid_chosen",
    );
    let start_indices3 = property_get(start_indices_held, "start_indices");
    let start = property_get(start_held, "start");
    let sbs = property_get(symbol_buttons_held, "symbol_buttons");
    let rules_buttons = property_get(rule_buttons_held, "rule_buttons");
    let rules_parsed = property_get(rules_used_held, "rules_used");
    let record_start = await app_replace_rule_set_symbol_on_click(
      rules_parsed,
      index_selected3,
      index,
      start,
      symbols_invalid_chosen,
      sbs,
      start_indices3,
      rules_buttons,
      duration,
      div_symbols,
    );
    let value9 = property_get(record_start, "start");
    property_set(start_held, "start", value9);
    let value4 = property_get(record_start, "symbols_invalid_chosen");
    property_set(symbols_invalid_chosen_held, "symbols_invalid_chosen", value4);
    let value8 = property_get(record_start, "start_indices");
    property_set(start_indices_held, "start_indices", value8);
    let last_state = list_last_property(history, "state");
    let left = property_get(start_held, "start");
    let b = json_equal(left, last_state);
    if (not(b)) {
      let index2 = property_get(index_selected_held, "index_selected");
      let list = property_get(rules_used_held, "rules_used");
      let rule_used = list_get(list, index2);
      ("index is where the rule's left matched (the position passed to ",
        fn_name("app_replace_rule_apply"),
        "); the proof needs it to highlight exactly which symbols the rule replaced, in the state before and the state after");
      list_add(history, {
        state: property_get(start_held, "start"),
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
  let object = property_get(
    symbols_invalid_chosen_held,
    "symbols_invalid_chosen",
  );
  let exists = property_exists(object, index);
  if (exists) {
    app_replace_symbol_tile_invalid(symbol_button);
  }
  return symbol_button;
  function refresh_sb() {
    let state = {
      start_indices: property_get(start_indices_held, "start_indices"),
      index_selected: property_get(index_selected_held, "index_selected"),
      success: property_get(success_held, "success"),
    };
    app_replace_rule_set_refresh_sb(symbol_button, index, state);
  }
}
