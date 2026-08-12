import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_in_between_card_chained(root) {
  arguments_assert(arguments, 1);
  ("the chained line a learner reaches for, solved one replacement at a time until the number the question was about has vanished from it");
  ("The line is solved rather than declared broken. But this does not work and not what you meant were both conclusions, stated before anything had shown them - and the reader had no way to reach either one, because nothing on the card said what the line does do. Walked in the replace-and-then-we-have steps the comparing-a-comparison lesson taught, it shows itself: the 2 and the 5 are consumed by the first comparison, so the number being asked about is not in the line any more.");
  ("What true < 8 comes to is deliberately not said. That would need comparing a true with a number, which no lesson has taught, and the vanished 5 is the whole point and needs no such rule.");
  ("The chained line is named as the maths one before it is worked. A learner who writes 2 < 5 < 8 is not making a mistake, they are writing what they were taught in maths, so the card says that first: the notation is right, the language is what differs.");
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["You might write ", "2 < 5 < 8"],
    ["That is how we would write this in maths"],
    ["However, that is not how we write this in JavaScript"],
  ]);
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["JavaScript will solve the ", "2 < 5", " first"],
    ["We replace the ", "2 < 5", " with ", "true"],
    ["And then we have ", "true < 8"],
    ["The ", "2", " and the ", "5", " are both gone"],
    [
      "So ",
      "2 < 5 < 8",
      " does not ask whether ",
      "5",
      " is between ",
      "2",
      " and ",
      "8",
    ],
  ]);
}
