import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_replace_button_side } from "./app_replace_button_side.mjs";
import { app_replace_rule_set_proof_show_highlighted_is } from "./app_replace_rule_set_proof_show_highlighted_is.mjs";
import { app_replace_symbol_tile_valid_if } from "./app_replace_symbol_tile_valid_if.mjs";
import { each_index } from "./each_index.mjs";
export function app_replace_rule_set_proof_show_state_row(
  parent,
  entry,
  position,
  selected,
  history,
) {
  "One line of the proof drawn out as its symbols, with the ones the chosen rule touched lit and the rest left plain.";
  "WHICH SYMBOLS ARE LIT IS ASKED PER SYMBOL RATHER THAN WORKED OUT FOR THE ROW, because a rule lights a matched left in the line above it and a produced right in the line below, so the answer depends on where the symbol sits as much as on which rule is chosen.";
  "NOTHING NEW IS DRAWN FOR A SYMBOL LEFT OUT: it takes the plain style the derivation already uses for a tile that is not solved, so the proof introduces no look a person has not already met.";
  "THE CHOSEN RULE IS HANDED IN RATHER THAN LOOKED UP, and that is safe because the whole row is drawn in one go, before anybody can choose a different one.";
  arguments_assert(arguments, 5);
  let state = property_get(entry, "state");
  let row = html_div(parent);
  html_centered(row);
  let symbols = app_replace_button_side(row, state);
  function style_symbol(symbol, j) {
    let highlighted = app_replace_rule_set_proof_show_highlighted_is(
      position,
      j,
      selected,
      history,
    );
    app_replace_symbol_tile_valid_if(symbol, highlighted, true);
  }
  each_index(symbols, style_symbol);
}
