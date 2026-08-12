import { fn_name } from "./fn_name.mjs";
import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_in_between_card_chained(root) {
  arguments_assert(arguments, 1);
  ("the chained line a learner reaches for, named as the maths one and said not to be the JS one");
  ("The chained line is named as the maths one before anything is said against it. A learner who writes 2 < 5 < 8 is not making a mistake, they are writing what they were taught in maths, so the card says that first: the notation is right, the language is what differs.");
  ("What the line does instead is not on this card. It is the aside in ",
    fn_name("app_code_lesson_expression_in_between_card_unexplained"),
    ", placed after the fix, because a reader who never asks the question still has to get past it to reach the line that changes what they type.");
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["To answer, you might write ", "2 < 5 < 8"],
    ["That is how we would write this in math"],
    ["However, that is not how we write this in JS"],
  ]);
}
