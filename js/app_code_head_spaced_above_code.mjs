import { app_code_head_gap_above_code } from "./app_code_head_gap_above_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_padding_bottom } from "./html_style_padding_bottom.mjs";
export function app_code_head_spaced_above_code(head) {
  arguments_assert(arguments, 1);
  ("stand the words at the top of a card off from the Code label underneath them, by the small gap this app leaves between the two");
  ("Room underneath the words rather than room above the label, because the label is drawn into the card BEFORE the words are put in over it - so the label has no way of knowing whether what ends up above it is a line of words or a button, and only the thing above it can say which of the two gaps is wanted.");
  let gap = app_code_head_gap_above_code();
  html_style_padding_bottom(head, gap);
}
