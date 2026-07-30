import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_contact_button_align(button) {
  "the shared contact button already comes back full-width, which is what the code app's button-cap rule keys on - capped to the same centered max-width as the other action buttons, no viewport-edge overhang, no horizontal overflow (the cap rule's auto side margins beat the button's own). All that is left to say here is the top gap, so the stack is evenly, closely spaced";
  let value = app_shared_spaced_gap();
  html_style_margin_top(button, value);
}
