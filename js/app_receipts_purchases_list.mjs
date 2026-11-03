import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_receipts_php_per_usd_months_fill } from "./app_receipts_php_per_usd_months_fill.mjs";
import { app_receipts_purchases_of } from "./app_receipts_purchases_of.mjs";
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
  "Inside list, either every purchase in the folder a day to a card, or the one purchase opened from it with a way back to the list above it. card_draw is handed the list and the opened purchase, draws that one purchase, and hands back a function that sets its dollars again when a peso rate lands; empty_text is said when the folder holds none.";
  "Nothing waits on a peso rate. Whatever this phone holds is drawn at once, and the rates still missing are fetched behind it, the dollars changing where they stand as each lands. Should a fetch fail, no other is tried until the next visit.";
  "Hands back show, which redraws whichever is showing; open, which opens the purchase with the key it is given, or goes back to the list when given null; and list_refresh, which redraws only while the list is showing, so a purchase being looked at is never redrawn under a finger.";
  arguments_assert(arguments, 4);
  ("open_key names the opened purchase, or is null while the list shows.");
  let open_key = null;
  ("dollars_set puts the latest rates on whatever is showing now.");
  let dollars_set = null;
  let rates_filling = false;
  let rates_stopped = false;
  function on_rates_arrived() {
    dollars_set();
  }
  async function rates_fill(purchases) {
    if (rates_filling || rates_stopped) {
      return;
    }
    rates_filling = true;
    let finished = await app_receipts_php_per_usd_months_fill(
      purchases,
      on_rates_arrived,
    );
    rates_filling = false;
    rates_stopped = not(finished);
  }
  async function show() {
    let purchases = await app_receipts_purchases_of(folder_code);
    draw(purchases);
    rates_fill(purchases);
  }
  function draw(purchases) {
    html_clear(list);
    if (not_equal(open_key, null)) {
      for (let purchase of purchases) {
        let left = property_get(purchase, "key");
        if (equal(left, open_key)) {
          app_shared_button_wide(list, "📋 All purchases", on_all);
          dollars_set = card_draw(list, purchase);
          return;
        }
      }
      open_key = null;
    }
    let count = list_size(purchases);
    if (equal(count, 0)) {
      html_p_text(list, empty_text);
    }
    dollars_set = app_receipts_days_draw(list, purchases, on_open, on_zone);
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
