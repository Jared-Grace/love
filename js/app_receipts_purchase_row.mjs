import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_purchase_row_text } from "./app_receipts_purchase_row_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_receipts_color_get } from "./app_receipts_color_get.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_receipts_purchase_row(
  parent,
  purchase,
  on_open,
  time_text,
) {
  "$plain parent";
  "$plain purchase";
  "$plain on_open";
  "$plain time_text";
  "One purchase in the list of them all, as a button saying enough to tell it from the others. It is filled with the colour the purchase is marked with, so what has been looked at shows in the list. Pressing it hands on_open the purchase.";
  arguments_assert(arguments, 4);
  function on_press() {
    on_open(purchase);
  }
  let text = app_receipts_purchase_row_text(purchase, time_text);
  let button = app_shared_button_wide(parent, text, on_press);
  let marked = app_receipts_color_get(purchase);
  let background = property_get(marked, "color");
  html_style_background_color_set(button, background);
  return button;
}
