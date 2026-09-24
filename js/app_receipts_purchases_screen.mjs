import { html_clear } from "./html_clear.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { app_receipts_purchases_pull } from "./app_receipts_purchases_pull.mjs";
import { equal } from "./equal.mjs";
import { app_receipts_purchases_of } from "./app_receipts_purchases_of.mjs";
import { app_receipts_php_per_usd } from "./app_receipts_php_per_usd.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { app_receipts_purchase_card } from "./app_receipts_purchase_card.mjs";
import { list_size } from "./list_size.mjs";
import { date_year_month_day } from "./date_year_month_day.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_receipts_purchase_row } from "./app_receipts_purchase_row.mjs";
import { app_receipts_purchase_new } from "./app_receipts_purchase_new.mjs";
import { app_receipts_unsent_all } from "./app_receipts_unsent_all.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_receipts_sync } from "./app_receipts_sync.mjs";
export function app_receipts_purchases_screen(root, folder_code, on_change) {
  "$plain root";
  "$plain folder_code";
  "The screen for one folder's purchases: add an empty one, dated now, which opens at once, then give it photos and a price and a description, and correct its date and time; or open any one from the list. Everything is kept on this phone first and then sent, so what is added with no internet is not lost and goes up once there is.";
  "The line under the buttons always says whether anything is still waiting, and Sync sends it now rather than on the next change or the next time the internet comes back.";
  "Every phone given the same folder code sees the same purchases: what the others sent is brought down and kept here too.";
  "Hands back the function that sends, brings down, and redraws, so whoever opened the screen can run it when the internet returns.";
  html_clear(root);
  ("The folder is a button so the way to change it is to press the thing that names it; on_change is handed the current code. The pencil comes first because it says what pressing does.");
  function on_folder() {
    on_change(folder_code);
  }
  app_shared_button_wide(root, "✏️ 📁 " + folder_code, on_folder);
  app_shared_button_wide(root, "➕ Add a purchase", on_add);
  app_shared_button_wide(root, emoji_sync() + " Sync", refresh);
  let status = html_p_text(root, "");
  let list = html_div(root);
  app_shared_footer(root);
  ("Under the buttons is either the list of every purchase, one line each, or the one purchase opened from it with a way back to the list above it. open_key names the opened one, or is null while the list shows.");
  let open_key = null;
  list_show();
  refresh();
  ("Sending and bringing down are separate: a change on a purchase only sends, so the purchase being worked on is not redrawn under the person's finger. Opening, Sync, and the internet coming back also bring down what other phones sent, then redraw the list - but never an opened purchase, which shows what arrived once the person goes back to the list.");
  async function refresh() {
    await sync_now();
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
          app_receipts_purchase_card(list, purchase, sync_now, php_per_usd);
          return;
        }
      }
      open_key = null;
    }
    let left2 = list_size(purchases);
    if (equal(left2, 0)) {
      html_p_text(list, "No purchases yet - press ➕ Add a purchase");
    }
    ("The list is newest first, so each day's purchases sit together, and a heading naming the day goes above the first of them.");
    let day_before = null;
    for (let purchase of purchases) {
      let day = property_get(purchase, "date");
      if (not_equal(day, day_before)) {
        let text = date_year_month_day(day);
        let heading = html_p_text(list, text);
        html_style_set(heading, "font-weight", "bold");
        day_before = day;
      }
      app_receipts_purchase_row(list, purchase, php_per_usd, on_open);
    }
  }
  async function on_open(purchase) {
    open_key = property_get(purchase, "key");
    await list_show();
  }
  async function on_all() {
    open_key = null;
    await list_show();
  }
  async function on_add() {
    let purchase = await app_receipts_purchase_new(folder_code);
    open_key = property_get(purchase, "key");
    await list_show();
    await sync_now();
  }
  async function status_show() {
    let unsent = await app_receipts_unsent_all();
    let count = list_size(unsent);
    if (equal(count, 0)) {
      html_text_set(status, "✅ Everything is sent");
      return;
    }
    html_text_set(
      status,
      "⏳ " +
        count +
        " not sent yet - they will send when there is internet, or press Sync",
    );
  }
  async function sync_now() {
    await status_show();
    await app_receipts_sync();
    await status_show();
  }
  return refresh;
}
