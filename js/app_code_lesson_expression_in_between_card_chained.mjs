import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_in_between_card_chained(root) {
  arguments_assert(arguments, 1);
  ("the chained line a learner reaches for, named as the maths one, said to do something else in JS, and left unexplained on purpose");
  ("The chained line is named as the maths one before anything is said against it. A learner who writes 2 < 5 < 8 is not making a mistake, they are writing what they were taught in maths, so the card says that first: the notation is right, the language is what differs.");
  ("What 2 < 5 < 8 does in JS is deliberately not shown, not even part way. A walk through it - solve 2 < 5, replace it with true, and then we have true < 8 - was written and then removed. It derives the claim, which is worth something, but every step of it is a fact about JS alone: Java refuses the line outright, C compiles it with a warning naming it, Python chains it like maths. The habit that travels is 2 < 5 && 5 < 8, and a learner who has watched the chained line be taken apart has spent that attention on the one language's answer instead. Withholding it is also the only way to avoid teaching that JS counts a true as 1, a rule needed nowhere else in this track.");
  ("The examples that would show a wrong answer, kept here so they are not searched for twice: 2 < 5 < 3 is true although 5 is not between 2 and 3; 8 > 5 > 2 is false although 5 is between 2 and 8; -1 < 0 < 1 is false although 0 is between -1 and 1. Each still needs the counts-as-1 rule to be checkable, which is why none is used.");
  ("Not explaining is said out loud, with its reason. An unexplained rule the reader is told to trust reads as one the writer could not justify; naming that many languages call the line an error, and that this track is about programming rather than about JS, turns the omission from a gap into a choice.");
  app_code_container_light_blue_cycle_code_multiple(root, [
    ["You might write ", "2 < 5 < 8"],
    ["That is how we would write this in math"],
    ["However, that is not how we write this in JS"],
    [
      "In JS, ",
      "2 < 5 < 8",
      " does something other than answer whether ",
      "5",
      " is between ",
      "2",
      " and ",
      "8",
    ],
    [
      "Some languages like JS will solve ",
      "2 < 5 < 8",
      ", but many will call it an error",
    ],
    [
      "Our goal is to teach programming in general, not the ways JS differs from other languages",
    ],
    ["So we will not explain here what JS does with ", "2 < 5 < 8"],
  ]);
}
