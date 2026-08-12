import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
export function app_code_lesson_expression_parentheses_both_sides_card_flat_line(
  root,
  open,
  close,
) {
  arguments_assert(arguments, 3);
  ("the same line without the brackets, solved all the way through one replacement at a time, and then what that leaves us needing the brackets for");
  ("The card opens with the question rather than the answer. Here we need the ( and ) stated the conclusion first, which is a forward reference on a card whose whole job is to earn it - the reader is asked to accept that the brackets are needed, and only then shown why. Asked as a question, the three blocks read in the order they are true in: what if they were not there, here is what the line comes to, so that is what they are for.");
  ("The flat line is not left as an assertion that it means something else - it is solved, in the exact walk the comparing-a-comparison lesson taught. Saying only that JavaScript works it out left to right asks the reader to do that walk in their head, and the walk crosses a step no lesson has ever shown them: a true or false compared with a number. They have the rule for it, from two lessons back - but having a rule and having performed it are not the same thing, and this card is where the two would first be asked to meet without being introduced.");
  let t = js_keyword_true();
  let f = js_keyword_false();
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["What if there were no ", open, " and ", close, "?"],
    ["Without them we would write ", "3 === 5 === 5 === 3"],
    [
      "That replaces the ",
      "3 === 5",
      " with ",
      f,
      ", leaving ",
      "false === 5 === 3",
    ],
  ]);
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["Then ", "false === 5", " is solved"],
    ["A ", t, " or ", f, " is never equal to a number"],
    ["So ", "false === 5", " is ", f],
    ["Replacing leaves ", "false === 3", ", which is ", f],
  ]);
  app_code_container_light_blue_cycle_code_multiple(root, [
    [
      "So if we want the ",
      "5 === 3",
      " solved first, it needs to be inside ",
      open,
      " and ",
      close,
    ],
  ]);
}
