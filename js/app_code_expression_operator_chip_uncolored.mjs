import { arguments_assert } from "./arguments_assert.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_expression_operator_chip_uncolored(span) {
  arguments_assert(arguments, 1);
  ("take the colour of the pale chip back off an operator - its fill, its lettering and its edge - so it goes on reading as part of the line rather than as something to press");
  ("The chip is the whole of how this screen says press me. An operator that cannot be pressed and still wears one is a control that answers nothing, and a learner pressing it learns only that the screen is broken.");
  ("All three go together, because any one of them left behind is still a mark, and a mark on a line of code is read as meaning something.");
  ("The room the chip was holding either side of itself is NOT given back here, and that is the whole reason this is colour alone. Room is the only part of a chip the rest of the line can feel: the fill going changes nothing but the operator's own square, while the room going pulls everything to the right of it along. So the two are wanted one after the other rather than together - the colour where it stands, and then the closing up, watched.");
  html_style_background_color_set(span, "transparent");
  html_style_set(span, "color", "inherit");
  html_box_shadow_set(span, "none");
}
