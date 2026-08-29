import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_shared_button_wide_spaced(parent, text, pressed) {
  arguments_assert(arguments, 3);
  ("A wide button with the app's standard gap above it, handed back so the caller can go on dressing it.");
  ("THE GAP IS WHAT SEPARATES IT FROM WHATEVER IT IS UNDER. A button that sits straight against the thing above reads as part of it, and at the foot of a screen the thing above is usually the last line of what the button is offering to leave - so the two run together and the button stops looking like a way out.");
  ("The gap is asked for by name rather than spelled here, so every screen that ends in a button leaves the same amount of room and a change to that amount reaches all of them.");
  let button = app_shared_button_wide(parent, text, pressed);
  let value = app_shared_spaced_gap();
  html_style_margin_top(button, value);
  return button;
}
