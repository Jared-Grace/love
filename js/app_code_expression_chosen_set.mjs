import { app_code_expression_colored_slowly } from "./app_code_expression_colored_slowly.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_code_expression_chip_style } from "./app_code_expression_chip_style.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_expression_chosen_set(node_span, operator_span) {
  arguments_assert(arguments, 2);
  ("the operator a learner has just chosen, together with the two sides it is going to be worked out from, coloured green as one block - so what is about to be replaced is seen as one thing rather than as a symbol with numbers standing either side of it");
  ("The operator's own pale chip is taken off at the same moment. A chip left standing inside the green still reads as something to press, and the pressing is already done.");
  ("one block in the page's own reckoning too, not merely in colour: kept whole so it can never be broken across two lines halfway through its working out, and so that it can be moved as a piece when the swap is shown happening");
  ("A run of lettering left as plain text has no shape of its own to move - it is only the letters where the sentence happens to have reached - so anything asking it to travel is quietly ignored and the swap is read as having simply appeared.");
  html_display_inline_block(node_span);
  ("the green comes up rather than appearing, and the chip goes down over the very same while, so the two of them read as one thing turning into another instead of two things swapped between frames");
  app_code_expression_colored_slowly(node_span);
  app_code_expression_colored_slowly(operator_span);
  app_shared_button_screen_green_style_assign(node_span);
  app_code_expression_chip_style(node_span);
  html_style_background_color_set(operator_span, "transparent");
  html_style_set(operator_span, "color", "inherit");
  ("its edge goes with its fill, in the same breath: an edge left drawn round the operator keeps it marked out as one thing inside the green, and the whole point of the green is that the operator and its two sides have just become one thing");
  html_box_shadow_set(operator_span, "none");
  ("and the room it was holding either side of itself goes too, so the block spells its working out at the width the same working out is spelled at in the sentence naming it, rather than a chip's worth wider");
  ("The room was there to keep the fill and the edge off the lettering. With neither of them left there is nothing for it to hold off, and all it does is push the two sides of the working apart - which reads as the block being about something slightly different from the thing the sentence says it is.");
  html_style_padding_x(operator_span, "0");
}
