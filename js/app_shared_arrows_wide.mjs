import { app_shared_rtl_is } from "./app_shared_rtl_is.mjs";
import { html_direction_rtl_set } from "./html_direction_rtl_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { app_shared_button_arrow_previous } from "./app_shared_button_arrow_previous.mjs";
import { app_shared_button_arrow_next } from "./app_shared_button_arrow_next.mjs";
import { html_flex_grow_1_multiple } from "./html_flex_grow_1_multiple.mjs";
export function app_shared_arrows_wide(
  parent,
  text_previous,
  text_next,
  on_previous,
  on_next,
) {
  "A row of two wide buttons, one back and one on, filling the width between them.";
  "Each button is handed what it says rather than told what it is moving through. A word for the thing being moved through cannot be shared by the two buttons once they are said in another language, because a language may change the word for before and after by what follows it - so what arrives here is two finished phrases and no word either of them was built from.";
  "The row is pointed the way the reader reads before either button is put in it. Back belongs at the end of the row a reader's eye starts from, and that is the right-hand end for a reader of Urdu - so the two buttons are laid down in the same order for everybody and the row itself decides which end that order starts at.";
  arguments_assert(arguments, 5);
  let row = html_div(parent);
  html_display_flex(row);
  let rtl = app_shared_rtl_is();
  html_direction_rtl_set(row, rtl);
  let l = app_shared_button_arrow_previous(row, text_previous, on_previous);
  let r = app_shared_button_arrow_next(row, text_next, on_next);
  html_flex_grow_1_multiple([l, r]);
  return row;
}
