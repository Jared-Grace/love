import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { html_loading } from "./html_loading.mjs";
import { app_receipts_purchases_pull } from "./app_receipts_purchases_pull.mjs";
import { equal } from "./equal.mjs";
import { app_receipts_purchases_of } from "./app_receipts_purchases_of.mjs";
import { app_receipts_php_per_usd } from "./app_receipts_php_per_usd.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { app_receipts_purchase_card_view } from "./app_receipts_purchase_card_view.mjs";
import { list_size } from "./list_size.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_receipts_days_draw } from "./app_receipts_days_draw.mjs";
import { app_receipts_zone_set } from "./app_receipts_zone_set.mjs";
export async function app_receipts_view_screen(root, folder_code, on_change) {
  "$plain root";
  "$plain folder_code";
  "$plain on_change";
  "One folder's purchases, to look at and never change: the same list the receipts app shows, a day to a card, and any one opened from it, but with no way to add a purchase, type in one, or mark one. Nothing is sent from here; what the phones sent is only brought down.";
  "Pressing the folder's name hands on_change the current code, so another folder can be opened.";
  arguments_assert(arguments, 3);
  html_clear(root);
  function on_folder() {
    on_change(folder_code);
  }
  app_shared_button_wide(root, "✏️ 📁 " + folder_code, on_folder);
  app_shared_button_wide(root, emoji_sync() + " Refresh", refresh);
  let list = html_div(root);
  app_shared_footer(root);
  ("open_key names the purchase opened from the list, or is null while the list shows.");
  let open_key = null;
  ("What this phone already keeps is drawn first, then what the phones sent is brought down and drawn, all under the loading cover so the list does not change under a finger.");
  async function first_load() {
    await list_show();
    await refresh();
  }
  await html_loading(first_load);
  async function refresh() {
    await app_receipts_purchases_pull(folder_code);
    if (equal(open_key, null)) {
      await list_show();
    }
  }
  async function list_show() {
    let purchases = await app_receipts_purchases_of(folder_code);
    let php_per_usd = await app_receipts_php_per_usd();
    html_clear(list);
    if (not_equal(open_key, null)) {
      for (let purchase of purchases) {
        let left = property_get(purchase, "key");
        if (equal(left, open_key)) {
          app_shared_button_wide(list, "📋 All purchases", on_all);
          app_receipts_purchase_card_view(list, purchase, php_per_usd);
          return;
        }
      }
      open_key = null;
    }
    let count = list_size(purchases);
    if (equal(count, 0)) {
      html_p_text(list, "No purchases in this folder yet");
    }
    app_receipts_days_draw(list, purchases, php_per_usd, on_open, on_zone);
  }
  async function on_zone(zone) {
    app_receipts_zone_set(zone);
    await list_show();
  }
  async function on_open(purchase) {
    open_key = property_get(purchase, "key");
    await list_show();
  }
  async function on_all() {
    open_key = null;
    await list_show();
  }
}
