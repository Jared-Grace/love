import { html_width_full } from "./html_width_full.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_large_gap } from "./app_shared_spaced_large_gap.mjs";
export function app_code_contact_button_align(button) {
  "the shared contact button comes back content-width; make it full-width (width:100%) like the other action buttons so the code app's button-cap rule (app_code_buttons_cap_style) styles it uniformly - capped to the same centered max-width, no viewport-edge overhang, no horizontal overflow (the cap rule's auto side margins replace the button's own margin). Also set it apart from the Home button above it with a larger top gap, so the reach-the-developer action does not crowd Home";
  html_width_full(button);
  html_style_margin_top(button, app_shared_spaced_large_gap());
}
