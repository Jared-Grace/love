import { arguments_assert } from "./arguments_assert.mjs";
import { picture_swap_decided_is } from "./picture_swap_decided_is.mjs";
export function picture_swaps_undecided_each(listed, card) {
  "$plain listed";
  "$plain card";
  "Calls card on each place still waiting for a decision, and answers how many were left off because one of their pictures on screen is already approved.";
  "AN APPROVED PLACE IS LEFT OFF, because the page is a list of what still needs a decision; it is left off only when the page is drawn and never the moment it is approved, so a press made by mistake can still be taken back. The count is handed back so the page can say how many were left off, and an empty page is not read as a broken one.";
  arguments_assert(arguments, 2);
  let hidden = 0;
  for (let swap of listed) {
    if (picture_swap_decided_is(swap)) {
      hidden = hidden + 1;
    } else {
      card(swap);
    }
  }
  return hidden;
}
