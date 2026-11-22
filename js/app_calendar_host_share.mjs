import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { calendar_page_url } from "./calendar_page_url.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_calendar_invite_form } from "./app_calendar_invite_form.mjs";
export function app_calendar_host_share(area, key, settings) {
  arguments_assert(arguments, 3);
  ("The last screen: the host's public booking link to copy, and the card that makes a link for one person. It comes after the hours, since a link handed out before there are hours opens onto nothing to book.");
  let host = settings.host;
  if (host) {
    html_div_text(area, "Your booking link:");
    let link = calendar_page_url() + "#host=" + host.slug;
    html_div_text_content(area, link);
    async function link_copy() {
      await clipboard_copy_browser(link);
      app_shared_toast("✅ Copied link");
    }
    app_shared_button_uncolored(area, "Copy link", link_copy);
  } else {
    let hint = html_div_text(
      area,
      "Save your booking link name in About you first.",
    );
    app_shared_text_deemphasized(hint);
  }
  app_calendar_invite_form(area, key);
}
