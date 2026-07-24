import { html_style_head } from "./html_style_head.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_buttons_cap_style() {
  "on a wide window cap the full-width action buttons to a centered column; on a narrow window make them ALL the same width no matter which container they sit in. The trick is sizing by the VIEWPORT (100vw) not the PARENT (100%): a button at the page root and one inside a padded container would otherwise resolve width:100% differently and come out different widths when narrow. width = min(cap, viewport minus one gap each side); the auto side margins center it in whatever parent. Scoped to the code app - injected once into code.html only. !important beats each button's inline width:100% / display:inline-block / margin; content boxes are divs, so they are untouched";
  let gap = app_shared_spaced_gap();
  let width = text_combine_multiple([
    "min(40rem, calc(100vw - 2 * ",
    gap,
    "))",
  ]);
  let rule = text_combine_multiple([
    "button[style*='width: 100%'] { width: ",
    width,
    " !important; display: block !important; margin-left: auto !important; margin-right: auto !important; }",
  ]);
  html_style_head(rule);
}
