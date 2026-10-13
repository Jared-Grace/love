import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_unsent_sync } from "./app_shared_unsent_sync.mjs";
import { html_on_window } from "./html_on_window.mjs";
import { app_shared_folder_choose } from "./app_shared_folder_choose.mjs";
import { app_receipts_purchases_screen } from "./app_receipts_purchases_screen.mjs";
export function app_receipts_main(context) {
  "Opens straight onto the camera when a folder code is already known - from the link first, then from this device - and onto the code box only when none is.";
  "A code in the link wins over the one kept here, because a link sent for one folder must send into that folder; it is then kept, so the next opening needs no link.";
  "The link carries the code after its # - and choosing a folder writes it there - so the address in the bar is always one that opens this folder when sent; a code after ? is still read, because links spelling it were already sent.";
  "Pressing the folder's name on the camera screen goes back to the code box, filled with the current code.";
  "Whenever the internet comes back, whatever is waiting on this phone is sent - through the camera screen when it is showing, so its line about what is waiting is redrawn too.";
  "It starts the page the way the other apps do - the same letters without serifs, and the text size this reader chose - so it reads as one of them.";
  app_shared_app_fn_set(context, app_receipts_main);
  app_shared_mobile_default_font_size(context);
  let root = property_get(context, "root");
  let sync_shown = app_shared_unsent_sync;
  function on_online() {
    sync_shown();
  }
  html_on_window("online", on_online);
  app_shared_folder_choose(root, fn_name("app_receipts"), on_folder);
  async function on_folder(folder_code, on_change) {
    function on_change_plain(folder_code_now) {
      sync_shown = app_shared_unsent_sync;
      on_change(folder_code_now);
    }
    sync_shown = await app_receipts_purchases_screen(
      root,
      folder_code,
      on_change_plain,
    );
  }
}
