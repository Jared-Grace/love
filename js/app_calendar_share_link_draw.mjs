import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_heading_big } from "./app_shared_heading_big.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { calendar_host_link } from "./calendar_host_link.mjs";
import { html_div } from "./html_div.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { app_calendar_link_copy_button } from "./app_calendar_link_copy_button.mjs";
export function app_calendar_share_link_draw(parent, slug) {
  arguments_assert(arguments, 2);
  ("A SHARE LINK FOR SOMEONE ELSE (human, 2026-11-24: \"should the have a link to share for someone else to schedule meeting?\"): a guest's own link signs in as that guest, so a guest who forwards it hands over their own meetings. The host's public link books as nobody, so it is the one to pass on. Worded from the human's draft.");
  let box = app_shared_container(parent);
  ('Its own card with its own heading, set apart from the booking card above, so the page reads as two things - book here, share there (human, 2026-11-25: "likewise share with someone else at bottom ... the top is a form, the bottom is something else").');
  html_style_assign(box, {
    "margin-top": "2em",
  });
  app_shared_heading_big(box, "Share with someone else");
  html_div_text(
    box,
    "Don't send them your own link - it is only for you. Send them this link to book their own meeting:",
  );
  let link = calendar_host_link(slug);
  let line = html_div(box);
  html_a_href_text_new_tab(line, link, link);
  app_calendar_link_copy_button(box, link);
}
