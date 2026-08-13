import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_width_full } from "./html_width_full.mjs";
export function html_button_widen(button) {
  "make an already-made button fill its own line: full width, laid out as a block, and no side margin. Shared so that every way of making a wide button widens it the SAME way - a button widened by width alone stays inline-block, and an inline-block ignores auto side margins, so the code app's centering rule silently did nothing to it and it sat against the left edge while the wide buttons above it were centered";
  html_width_full(button);
  ("a plain button is inline-block, which is what puts it in a line beside its neighbours; a full-width one fills its own line, so it is a block. Saying so HERE rather than in a stylesheet rule is what lets a caller lay the inside of the row out for itself - a later display:grid on the same element simply wins, where an !important rule would have beaten it and quietly flattened the row back to one run of centered words");
  html_display_block(button);
  ("a plain button carries a small side margin for spacing when buttons sit in a row; on a full-width (100%) button that side margin lives OUTSIDE the border-box and pushes the button past the viewport, which is what created the horizontal scrollbar - so zero it (the vertical margin stays, spacing the stacked wide buttons)");
  html_style_margin_x(button, "0");
}
