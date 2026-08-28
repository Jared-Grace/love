import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function app_replace_rule_set_button_rule_on_click_inner(
  index,
  index_selected,
) {
  "which rule the player has chosen once they have pressed the rule standing at this place in the list, and the emptied record of the symbols they had chosen wrongly. Pressing the rule that is already chosen puts it back down, so one press both chooses and unchooses.";
  "IT ONLY WORKS THE ANSWER OUT. Redrawing the rows of buttons belongs to the caller, and has to, because every one of those buttons redraws itself by reading the chosen rule out of the screen it was built in - not out of anything handed to it. Redrawing from in here read that rule BEFORE the caller had been handed this answer and could store it, so every symbol was redrawn as one no rule could touch, and a symbol no rule can touch cannot be pressed: the game could not be played at all. The redrawing reads as part of choosing, and is part of what comes after it.";
  arguments_assert(arguments, 2);
  let symbols_invalid_chosen = {};
  let condition = equal(index_selected, index);
  index_selected = ternary(condition, null, index);
  let r = {
    symbols_invalid_chosen,
    index_selected,
  };
  return r;
}
