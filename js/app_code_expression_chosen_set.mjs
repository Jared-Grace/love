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
