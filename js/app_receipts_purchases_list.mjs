import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_purchases_of } from "./app_receipts_purchases_of.mjs";
import { app_receipts_php_per_usd } from "./app_receipts_php_per_usd.mjs";
import { html_clear } from "./html_clear.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { list_size } from "./list_size.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_receipts_days_draw } from "./app_receipts_days_draw.mjs";
import { app_receipts_zone_set } from "./app_receipts_zone_set.mjs";
export function app_receipts_purchases_list(
  list,
  folder_code,
  card_draw,
  empty_text,
) {
  "$plain list";
  "$plain folder_code";
  "$plain card_draw";
  "$plain empty_text";
  "Inside list, either every purchase in the folder a day to a card, or the one purchase opened from it with a way back to the list above it. card_draw is handed the list, the opened purchase and the peso rate, and draws that one purchase; empty_text is said when the folder holds none.";
  "Hands back show, which redraws whichever is showing; open, which opens the purchase with the key it is given, or goes back to the list when given null; and list_refresh, which redraws only while the list is showing, so a purchase being looked at is never redrawn under a finger.";
  arguments_assert(arguments, 4);
  ("open_key names the opened purchase, or is null while the list shows.");
  let open_key = null;
  async function show() {
    let purchases = await app_receipts_purchases_of(folder_code);
    let php_per_usd = await app_receipts_php_per_usd();
    html_clear(list);
    if (not_equal(open_key, null)) {
      for (let purchase of purchases) {
        let left = property_get(purchase, "key");
        if (equal(left, open_key)) {
          app_shared_button_wide(list, "📋 All purchases", on_all);
          card_draw(list, purchase, php_per_usd);
          return;
        }
      }
      open_key = null;
    }
    let count = list_size(purchases);
    if (equal(count, 0)) {
      html_p_text(list, empty_text);
    }
    app_receipts_days_draw(list, purchases, php_per_usd, on_open, on_zone);
  }
  async function open(key) {
    open_key = key;
    await show();
  }
  async function list_refresh() {
    if (equal(open_key, null)) {
      await show();
    }
  }
  async function on_zone(zone) {
    app_receipts_zone_set(zone);
    await show();
  }
  async function on_open(purchase) {
    let key = property_get(purchase, "key");
    await open(key);
  }
  async function on_all() {
    await open(null);
  }
  let r = {
    show,
    open,
    list_refresh,
  };
  return r;
}
