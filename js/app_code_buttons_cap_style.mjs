import { html_style_head } from "./html_style_head.mjs";
export function app_code_buttons_cap_style() {
  "on a wide (desktop) window the full-width action buttons stretch edge to edge and read as too wide; cap them to a centered column while the content boxes stay full-width. Scoped to the code app - injected once into code.html only, so no other app is affected. Targets buttons whose inline style is width:100% (what app_shared_button_wide sets); content boxes are divs, so they are untouched. display + margin need !important to beat the buttons' own inline display:inline-block and margin, so they become centered blocks; max-width caps a width:100% element with no !important needed";
  let rule =
    "button[style*='width: 100%'] { max-width: 40rem; display: block !important; margin-left: auto !important; margin-right: auto !important; }";
  html_style_head(rule);
}
