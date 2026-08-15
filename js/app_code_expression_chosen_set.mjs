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
}
