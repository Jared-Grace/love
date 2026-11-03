import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_receipts_convert_screen } from "./app_receipts_convert_screen.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_receipts_convert_page(root) {
  "$plain root";
  "Puts the button that opens the currency converter at the top of root and hands back the place below it where the screen draws everything else.";
  "That screen is only hidden while the converter shows, never redrawn, so going back finds it exactly as it was left, whichever purchase was open and however far it was scrolled.";
  arguments_assert(arguments, 1);
  let page = html_div(root);
  let convert = html_div(root);
  html_display_none(convert);
  function on_back() {
    html_clear(convert);
    html_display_none(convert);
    html_display_block(page);
  }
  async function on_convert() {
    html_display_none(page);
    html_display_block(convert);
    await app_receipts_convert_screen(convert, on_back);
  }
  app_shared_button_wide(page, "💱 Convert currency", on_convert);
  return page;
}
