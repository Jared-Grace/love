import { app_replace_rule_set_symbols_mapper_symbol_on_click } from "./app_replace_rule_set_symbols_mapper_symbol_on_click.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_button } from "./html_button.mjs";
import { app_replace_rule_set_attribute_symbol } from "./app_replace_rule_set_attribute_symbol.mjs";
import { html_data_set_test } from "./html_data_set_test.mjs";
import { app_shared_symbol_tile_style } from "./app_shared_symbol_tile_style.mjs";
import { property_set_exists_not } from "./property_set_exists_not.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { app_replace_symbol_tile_invalid } from "./app_replace_symbol_tile_invalid.mjs";
import { app_replace_rule_set_refresh_sb } from "./app_replace_rule_set_refresh_sb.mjs";
export function app_replace_rule_set_symbols_mapper({
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
}) {
  "Draws one symbol of the row a player taps, with everything that symbol needs to carry: the button itself, what its tap does, the mark a test finds it by, its look, the way of redrawing itself that it carries about with it, and the wrong-choice mark if this symbol has already been chosen wrongly.";
  arguments_assert(arguments, 1);
  let symbol_button = null;
  async function symbol_on_click() {
    let r = await app_replace_rule_set_symbols_mapper_symbol_on_click({
      index_selected_held,
      symbols_invalid_chosen_held,
      start_indices_held,
      start_held,
      symbol_buttons_held,
      rule_buttons_held,
      rules_used_held,
      index,
      duration,
      div_symbols,
      history,
      refresh,
    });
    return r;
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
