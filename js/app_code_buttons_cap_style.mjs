import { app_code_column_cap_width } from "./app_code_column_cap_width.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_buttons_cap_style() {
  "cap the full-width buttons to a centered column, and keep them the same width whatever container they sit in. Use MAX-WIDTH, not width: the button keeps its inline width:100% so it fills - and never exceeds - its actual parent (so a button nested inside the medium-blue answer box can't spill off that box, on wide OR narrow), while max-width caps it to min(40rem, viewport minus one gap each side). Because every button's parent that is meant to be full-column has at most one gap of padding, the cap lands them all at the same width; the auto side margins center it. Scoped to the code app - injected once into code.html only. The side margins need !important to beat each button's own inline margin; content boxes are divs, untouched";
  ("this rule says nothing about display. It used to force block !important, to beat the inline-block a plain button carries - and that beat every wide button that laid its own inside out, so the numbered list rows lost their grid and painted as one centered run: the number lost its left gutter and ran into the title with no space between them. A wide button now says block for itself, so a row that wants a grid can simply say so");
  let width = app_code_column_cap_width();
  let rule = text_combine_multiple([
    "button[style*='width: 100%'] { max-width: ",
    width,
    "; margin-left: auto !important; margin-right: auto !important; }",
  ]);
  html_style_head(rule);
}
