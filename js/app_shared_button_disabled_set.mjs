import { html_disabled_set } from "./html_disabled_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_button_disabled_set(button, disabled) {
  "$plain disabled";
  "switch one of this app's buttons off, and show that it is off: the click stops working and the button fades.";
  "THE FADE IS NEEDED HERE BECAUSE THESE BUTTONS ARE DRESSED. A browser greys a plain button on its own, but every button on these pages is painted with a colour of its own, and that painting covers the greying - so switched off, it looked exactly like the ones that still work and a reader kept pressing it.";
  "The pointing hand goes back to a plain arrow at the same time, because the hand is the promise that something is under the finger and a switched-off button is not making that promise.";
  "Faded rather than hidden, so the reader can still read what the button would do and see that there is nothing left for it to do. A button that vanished would move everything under it and leave the reader wondering what they had just done.";
  arguments_assert(arguments, 2);
  html_disabled_set(button, disabled);
  let faded = "0.45";
  let full = "1";
  let opacity = disabled ? faded : full;
  html_style_set(button, "opacity", opacity);
  let arrow = "default";
  let hand = "pointer";
  let cursor = disabled ? arrow : hand;
  html_style_set(button, "cursor", cursor);
}
