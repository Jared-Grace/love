import { arguments_assert } from "./arguments_assert.mjs";
import { app_calendar_invite_form } from "./app_calendar_invite_form.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { calendar_host_link } from "./calendar_host_link.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_calendar_link_copy_button } from "./app_calendar_link_copy_button.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
export function app_calendar_host_share(area, key, settings) {
  arguments_assert(arguments, 3);
  ("The last screen: the card that makes a link for one person, then the host's public booking link to copy. It comes after the hours, since a link handed out before there are hours opens onto nothing to book.");
  ("★ THE LINK FOR ONE PERSON COMES FIRST (human, 2026-11-28: \"make link for one person should appear first? because it's better that the user doesn't have to confirm?\"): it lets the guest pick a time at once with no code, so it is the better way whenever someone has already messaged; the public link, which asks a code, follows.");
  app_calendar_invite_form(area, key);
  let host = settings.host;
  if (host) {
    html_div_text(area, "Your booking link:");
    let link = calendar_host_link(host.slug);
    html_div_text_content(area, link);
    app_calendar_link_copy_button(area, link);
  } else {
    let hint = html_div_text(
      area,
      "Save your booking link name in About you first.",
    );
    app_shared_text_deemphasized(hint);
  }
}
