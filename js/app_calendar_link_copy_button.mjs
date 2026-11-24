import { arguments_assert } from "./arguments_assert.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_calendar_link_copy_button(parent, link) {
  arguments_assert(arguments, 2);
  ("A Copy link button under a calendar link, saying so once it is copied.");
  async function link_copy() {
    await clipboard_copy_browser(link);
    app_shared_toast("✅ Copied link");
  }
  let r = app_shared_button_uncolored(parent, "Copy link", link_copy);
  return r;
}
