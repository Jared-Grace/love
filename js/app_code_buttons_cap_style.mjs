import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_buttons_cap_style() {
  "cap the full-width buttons to a centered column, and keep them the same width whatever container they sit in. Use MAX-WIDTH, not width: the button keeps its inline width:100% so it fills - and never exceeds - its actual parent (so a button nested inside the medium-blue answer box can't spill off that box, on wide OR narrow), while max-width caps it to min(40rem, viewport minus one gap each side). Because every button's parent that is meant to be full-column has at most one gap of padding, the cap lands them all at the same width; the auto side margins center it. Scoped to the code app - injected once into code.html only. display/margin need !important to beat each button's inline display:inline-block / margin; content boxes are divs, untouched";
  let gap = app_shared_spaced_gap();
  let cap = app_shared_column_max_width();
  let width = text_combine_multiple([
    "min(",
    cap,
    ", calc(100vw - 2 * ",
    gap,
    "))",
  ]);
  let rule = text_combine_multiple([
    "button[style*='width: 100%'] { max-width: ",
    width,
    "; display: block !important; margin-left: auto !important; margin-right: auto !important; }",
  ]);
  html_style_head(rule);
}
