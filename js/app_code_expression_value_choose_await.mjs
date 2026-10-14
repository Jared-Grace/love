import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_value_choose_buttons } from "./app_code_expression_value_choose_buttons.mjs";
import { html_remove } from "./html_remove.mjs";
export async function app_code_expression_value_choose_await(
  parent,
  value,
  decoys,
  on_wrong,
) {
  arguments_assert(arguments, 4);
  ("ask what the operator just chosen comes to, and wait there until the right value is pressed: the replacement is worked out by the learner rather than handed to them");
  ("This is what a line hands its pressing as the answer to a right press, in place of the moment's pause a quiz that gives the value away holds instead. The chosen operator and both its sides are already blue by the time this is asked, so what is being asked about is the thing standing lit on the line.");
  ("A wrong press dims just that value and leaves the others live, the same way every other multiple choice in this app answers one, so the learner narrows down rather than being told. The right one goes green and is held green for as long as any other success, and only then does the line move.");
  ("The buttons are taken away before the line closes up. What follows is the value flying into the place the operator stood, and a row of numbers still sitting underneath would be a second set of the same numbers to read while one of them is moving.");
  let asked = app_code_expression_value_choose_buttons(
    parent,
    value,
    decoys,
    on_wrong,
  );
  await asked.pressed;
  html_remove(asked.box);
}
