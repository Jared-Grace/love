import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { calendar_host_link } from "./calendar_host_link.mjs";
import { html_div } from "./html_div.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { app_calendar_link_copy_button } from "./app_calendar_link_copy_button.mjs";
export function app_calendar_share_link_draw(parent, slug) {
  arguments_assert(arguments, 2);
  ("A SHARE LINK FOR SOMEONE ELSE (human, 2026-11-24: \"should the have a link to share for someone else to schedule meeting?\"): a guest's own link signs in as that guest, so a guest who forwards it hands over their own meetings. The host's public link books as nobody, so it is the one to pass on. Worded from the human's draft.");
  let box = app_shared_container(parent);
  html_div_text(
    box,
    "Want someone else to book a meeting too? Don't send them your own link - it is only for you. Send them this link:",
  );
  let link = calendar_host_link(slug);
  let line = html_div(box);
  html_a_href_text_new_tab(line, link, link);
  app_calendar_link_copy_button(box, link);
}
