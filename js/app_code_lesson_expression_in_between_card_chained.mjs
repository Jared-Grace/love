import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_in_between_card_chained(root) {
  arguments_assert(arguments, 1);
  ("the chained line a learner reaches for, solved one replacement at a time until the number the question was about has vanished from it");
  ("The line is solved rather than declared broken. But this does not work and not what you meant were both conclusions, stated before anything had shown them - and the reader had no way to reach either one, because nothing on the card said what the line does do. Walked in the replace-and-then-we-have steps the comparing-a-comparison lesson taught, it shows itself: the 2 and the 5 are consumed by the first comparison, so the number being asked about is not in the line any more.");
  ("What true < 8 comes to is deliberately not said. Showing a wrong ANSWER is impossible without it: any chained line solves to a true or false against a number, so a value could only be given by first teaching that JS counts a true as 1 - a rule of this language rather than of comparing, and one that would have to be taught here only to be used once. The card shows the wrong QUESTION instead, which needs no such rule and is equally concrete: the line is asking about a true, and the 5 the reader wanted to ask about is not in it.");
  ("The examples that would show a wrong answer, kept here so they are not searched for twice: 2 < 5 < 3 is true although 5 is not between 2 and 3; 8 > 5 > 2 is false although 5 is between 2 and 8; -1 < 0 < 1 is false although 0 is between -1 and 1. Each still needs the counts-as-1 rule to be checkable, which is why none is used.");
  ("The chained line is named as the maths one before it is worked. A learner who writes 2 < 5 < 8 is not making a mistake, they are writing what they were taught in maths, so the card says that first: the notation is right, the language is what differs.");
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["You might write ", "2 < 5 < 8"],
    ["That is how we would write this in math"],
    ["However, that is not how we write this in JS"],
  ]);
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["JS will solve the ", "2 < 5", " first"],
    ["We replace the ", "2 < 5", " with ", "true"],
    ["And then we have ", "true < 8"],
    ["That asks whether ", "true", " is less than ", "8"],
    ["But we wanted to ask about ", "5"],
    ["So ", "2 < 5 < 8", " is not how we ask this in JS"],
  ]);
}
