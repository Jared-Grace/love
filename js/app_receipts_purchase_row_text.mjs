import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_payment_emoji } from "./app_receipts_payment_emoji.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_receipts_purchase_php_per_usd } from "./app_receipts_purchase_php_per_usd.mjs";
import { app_receipts_price_usd } from "./app_receipts_price_usd.mjs";
import { app_receipts_price_php_text } from "./app_receipts_price_php_text.mjs";
import { property_list_size } from "./property_list_size.mjs";
import { emoji_camera } from "./emoji_camera.mjs";
export function app_receipts_purchase_row_text(purchase, time_text) {
  "$plain purchase";
  "$plain time_text";
  "time_text is the time it was made as the list is being read, such as '9:30 AM', or '8:30 PM EST' when the list is read on another clock than the purchase is kept in.";
  "The words on one purchase's line in the list - how it was paid for, what time, how much, how many photos, and how its description begins. The date is not on it, because the list puts each day's purchases under a heading naming the day.";
  arguments_assert(arguments, 2);
  ("It begins with a card or a bank note, so how each purchase was paid for shows down the list without opening any.");
  let parts = [app_receipts_payment_emoji(purchase) + " " + time_text];
  let price = property_get_or(purchase, "price", "");
  if (not_equal(price, "")) {
    let rate = app_receipts_purchase_php_per_usd(purchase);
    let usd = app_receipts_price_usd(price, rate.php_per_usd);
    parts.push(
      app_receipts_price_php_text(price) + (equal(usd, "") ? "" : " ≈ " + usd),
    );
  }
  let photos = property_list_size(purchase, "photos");
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
  let text = parts.join(" - ");
  return text;
}
