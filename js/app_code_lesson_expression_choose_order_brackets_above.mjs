import { app_code_expression_node_left_operator_first } from "./app_code_expression_node_left_operator_first.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_node_right_operator_first } from "./app_code_expression_node_right_operator_first.mjs";
import { app_code_lesson_expression_choose_order_sides_settled_above_generic } from "./app_code_lesson_expression_choose_order_sides_settled_above_generic.mjs";
import { app_code_lesson_expression_choose_order_brackets_recall } from "./app_code_lesson_expression_choose_order_brackets_recall.mjs";
import { app_code_lesson_expression_choose_order_brackets_intro } from "./app_code_lesson_expression_choose_order_brackets_intro.mjs";
export function app_code_lesson_expression_choose_order_brackets_above(root) {
  arguments_assert(arguments, 1);
  ("what stands above the card on the brackets lesson: the two rules being brought together, then one bracketed line taken all the way down, then the sentences saying what is new");
  ("The line run through is one the brackets change the answer of. Read the way the brackets ask it comes to false; read as though they were not there it comes to true. A run on a line where both readings agree would show the brackets being obeyed and never show what obeying them is worth.");
  ("The parts are hung together with brackets round the or, which is what this lesson is about and the only thing it differs by. The and-before-or lesson next door hands in the hanging the operators would have chosen on their own, and everything else on the screen is the same, so everything else is said once, next door.");
  ("Which side the brackets fall on is drawn, so the card shows the same line the questions do. The questions draw a side too, and a card that always showed the brackets on the right would teach a shape half of them never take - a learner arriving at a left-bracketed question would be meeting it for the first time with no worked line behind them.");
  ("Both sides read the same way, so drawing one costs nothing. The or is the bracketed one either way round, and the settled ends follow their operators rather than the ends of the line, so the two readings part on a left-bracketed line exactly as they do on a right-bracketed one and neither card is the easier one to arrive at.");
  function above_bracketed_left() {
    "the card built with the bracketed or standing to the left of the and";
    app_code_lesson_expression_choose_order_sides_settled_above_generic(
      root,
      app_code_lesson_expression_choose_order_brackets_recall,
      app_code_expression_node_left_operator_first,
      true,
      app_code_lesson_expression_choose_order_brackets_intro,
    );
  }
  function above_bracketed_right() {
    "the card built with the bracketed or standing to the right of the and";
    app_code_lesson_expression_choose_order_sides_settled_above_generic(
      root,
      app_code_lesson_expression_choose_order_brackets_recall,
      app_code_expression_node_right_operator_first,
      false,
      app_code_lesson_expression_choose_order_brackets_intro,
    );
  }
  let sides = [above_bracketed_left, above_bracketed_right];
  let above_drawn = list_random_item(sides);
  above_drawn();
}
