import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_guest_link } from "./calendar_guest_link.mjs";
import { html_div } from "./html_div.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_calendar_private_link_draw(parent, slug, key) {
  arguments_assert(arguments, 3);
  ("A guest's private link to their page with this host, drawn as the address itself and a button that copies it - after booking, and while a code waits.");
  ('The button says whose link it copies (human, 2026-11-25: "After booking: Copy your private link not Copy link ... or my private"). "my" was chosen: the page\'s buttons speak as the guest pressing them (Get my code, Cancel my meeting), while its sentences speak as the host. Rejected: "Copy your private link", which would be the host talking on a button.');
  let link = calendar_guest_link(slug, key);
  let link_line = html_div(parent);
  html_a_href_text_new_tab(link_line, link, link);
  async function link_copy() {
    await clipboard_copy_browser(link);
    app_shared_toast("✅ Copied your private link");
  }
  app_shared_button_uncolored(parent, "Copy my private link", link_copy);
}
