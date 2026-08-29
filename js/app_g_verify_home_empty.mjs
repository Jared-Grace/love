import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_get } from "./property_get.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_g_verify_home_empty(pending, open_pending, held) {
  "What the verify page shows for a chapter that has nothing written for it yet: the verse being worked on if there is one, and otherwise a quiet line saying so.";
  "A VERSE BEING WORKED ON COUNTS AS SOMETHING TO SHOW even though it is not written down yet, because watching it appear is the whole point of the page.";
  arguments_assert(arguments, 3);
  let waiting = not_equal(pending, null);
  if (waiting) {
    open_pending(pending);
    return;
  }
  let view = property_get(held, "view");
  let empty = html_p_text(view, "No verses written yet for this chapter.");
  app_shared_text_deemphasized(empty);
  html_style_margin_top(empty, "1em");
}
