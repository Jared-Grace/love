import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { time_12_label } from "./time_12_label.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_receipts_price_usd } from "./app_receipts_price_usd.mjs";
import { app_receipts_price_php_text } from "./app_receipts_price_php_text.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_receipts_color_get } from "./app_receipts_color_get.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_receipts_purchase_row(
  parent,
  purchase,
  php_per_usd,
  on_open,
) {
  "$plain parent";
  "$plain purchase";
  "$plain php_per_usd";
  "$plain on_open";
  "One purchase in the list of them all, as a button saying enough to tell it from the others - what time, how much, how many photos, and how its description begins. The date is not on it, because the list puts each day's purchases under a heading naming the day. It is filled with the colour the purchase is marked with, so what has been looked at shows in the list. Pressing it hands on_open the purchase.";
  arguments_assert(arguments, 4);
  let time = property_get(purchase, "time");
  let label = time_12_label(time);
  let parts = [label];
  let price = property_get_or(purchase, "price", "");
  if (not_equal(price, "")) {
    let usd = app_receipts_price_usd(price, php_per_usd);
    parts.push(
      app_receipts_price_php_text(price) + (equal(usd, "") ? "" : " ≈ " + usd),
    );
  }
  let list = property_get(purchase, "photos");
  let photos = list_size(list);
  if (greater_than(photos, 0)) {
    parts.push(emoji_camera() + " " + photos);
  }
  let description = property_get_or(purchase, "description", "").trim();
  if (not_equal(description, "")) {
    let first = description.split("\n")[0];
    if (greater_than(first.length, 40)) {
      first = first.slice(0, 40) + "…";
    }
    parts.push(first);
  }
  function on_press() {
    on_open(purchase);
  }
  let text = parts.join(" - ");
  let button = app_shared_button_wide(parent, text, on_press);
  let marked = app_receipts_color_get(purchase);
  let background = property_get(marked, "color");
  html_style_background_color_set(button, background);
  return button;
}
