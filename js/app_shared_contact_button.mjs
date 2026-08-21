import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_email } from "./emoji_email.mjs";
import { app_shared_contact_overlay } from "./app_shared_contact_overlay.mjs";
export function app_shared_contact_button(parent) {
  "every app can offer a way to reach the developer without reinventing it: opens an in-app contact screen (a panel over the app, so the reader never leaves the PWA). A reply knows which app the person is writing about because the send records the page address, so no app has to name itself here.";
  function on_click() {
    app_shared_contact_overlay();
  }
  let left = emoji_email();
  let label = text_combine(left, " Contact the developer");
  ("full width, because it is only ever drawn in the foot of a page, stacked rather than beside other buttons - so the one shape it is ever drawn in is decided here once instead of by each caller remembering to widen it. anything that ever does put it in a row with other buttons is what overrides the width, and it still receives the button back to do that with");
  let button = app_shared_button_wide(parent, label, on_click);
  ("the gap that holds the whole foot of the page away from the reading above it belongs to the foot rather than to this button, which is no longer the first thing in it");
  return button;
}
