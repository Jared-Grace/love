import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
export function app_code_lesson_expression_choose_order_change_card(
  root,
  intro,
) {
  arguments_assert(arguments, 2);
  ("the last card on a lesson whose line is taken down one operator at a time: a card of its own, holding whatever that lesson says is different about it");
  ("A card is made here rather than by each lesson, so that the sentences saying what is new arrive in the same place, in the same colour, at the same end of every screen in the run. A learner reads the shape of the screen before they read it, and the hinge is the part they go back to.");
  let change_card = app_code_container_light_blue(root);
  intro(change_card);
}
