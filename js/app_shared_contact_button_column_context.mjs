import { app_shared_contact_button_context } from "./app_shared_contact_button_context.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_shared_content_column_align } from "./app_shared_content_column_align.mjs";
export function app_shared_contact_button_column_context(context) {
  "the same after-render contact button as the plain one next door, lined up with the reading column the screen above it uses: its left and right edges end where the verse text and the bar end, instead of running to the window edge. Hand this to a context as its after-render hook wherever the screens sit in that column.";
  let button = app_shared_contact_button_context(context);
  ("a button is inline-block, which puts it in a line of text - so make it a block first and the side margins are its own to keep");
  html_display_block(button);
  app_shared_content_column_align(button);
  return button;
}
