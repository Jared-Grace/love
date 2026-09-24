import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_receipts_price_usd } from "./app_receipts_price_usd.mjs";
import { list_size } from "./list_size.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
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
  "One purchase in the list of them all, as a button saying enough to tell it from the others - when, how much, how many photos, and how its description begins. Pressing it hands on_open the purchase.";
  arguments_assert(arguments, 4);
  let parts = [
    property_get(purchase, "date") + " " + property_get(purchase, "time"),
  ];
  let price = property_get_or(purchase, "price", "");
  if (not_equal(price, "")) {
    let usd = app_receipts_price_usd(price, php_per_usd);
    parts.push("₱" + price + (equal(usd, "") ? "" : " ≈ " + usd));
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
  let text = parts.join(" · ");
  let button = app_shared_button_wide(parent, text, on_press);
  return button;
}
