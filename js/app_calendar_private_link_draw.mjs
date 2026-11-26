import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { calendar_guest_link } from "./calendar_guest_link.mjs";
import { html_div } from "./html_div.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export function app_calendar_private_link_draw(parent, slug, key) {
  arguments_assert(arguments, 3);
  ("A guest's private link to their page with this host, drawn as the address itself and a button that copies it - after booking, and while a code waits.");
  ('The button says whose link it copies (human, 2026-11-25: "After booking: Copy your private link not Copy link ... or my private"). "your", so the page keeps one voice, the host speaking to the guest (human, 2026-11-26, asked "Should first/second person be consistent?" and chose "your"). Rejected: "my" on buttons, which mixed two speakers on one screen.');
  ('ASKED IN BOLD, ABOVE THE LINK (human, 2026-11-26: "Please save it => {bold} Please copy and save your private link"): said here once, so both screens ask it alike.');
  let ask = html_div_text(parent, "Please copy and save your private link:");
  html_style_assign(ask, {
    "font-weight": "bold",
  });
  let link = calendar_guest_link(slug, key);
  let link_line = html_div(parent);
  html_a_href_text_new_tab(link_line, link, link);
  async function link_copy() {
    await clipboard_copy_browser(link);
    app_shared_toast("✅ Copied your private link");
  }
  app_shared_button_uncolored(parent, "Copy your private link", link_copy);
}
