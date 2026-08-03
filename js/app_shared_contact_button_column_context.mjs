import { app_shared_contact_button_context } from "./app_shared_contact_button_context.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_code_column_cap } from "./app_code_column_cap.mjs";
export function app_shared_contact_button_column_context(context) {
  "the same after-render contact button as the plain one next door, lined up with the reading column the screen above it uses: its left and right edges end where the verses and the bar end, instead of running to the window edge. Hand this to a context as its after-render hook wherever the screens sit in that column.";
  let button = app_shared_contact_button_context(context);
  ("the button is added straight to the page root, outside the padded body of the screen, so nothing has already lined it up. It comes back full width and inline-block: capping it to the column width only centers it once it is a block, because auto side margins do nothing to an inline-block");
  html_display_block(button);
  app_code_column_cap(button);
  return button;
}
