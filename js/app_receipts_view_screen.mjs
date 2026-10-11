import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { emoji_sync } from "./emoji_sync.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
import { app_receipts_purchases_list } from "./app_receipts_purchases_list.mjs";
import { app_receipts_purchase_card_view } from "./app_receipts_purchase_card_view.mjs";
import { property_get } from "./property_get.mjs";
import { html_loading } from "./html_loading.mjs";
import { app_receipts_purchases_pull } from "./app_receipts_purchases_pull.mjs";
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
  let shown = app_receipts_purchases_list(
    list,
    folder_code,
    app_receipts_purchase_card_view,
    "No purchases in this folder yet",
  );
  let show = property_get(shown, "show");
  let list_refresh = property_get(shown, "list_refresh");
  ("What this phone already keeps is drawn first, then what the phones sent is brought down and drawn, all under the loading cover so the list does not change under a finger.");
  async function first_load() {
    await show();
    await refresh();
  }
  await html_loading(first_load);
  async function refresh() {
    await app_receipts_purchases_pull(folder_code);
    await list_refresh();
  }
}
