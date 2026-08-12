import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_in_between_card_unexplained(root) {
  arguments_assert(arguments, 1);
  ("the aside: the chained line does something else in JS, and what it does is deliberately not explained here");
  ("This is its own card, and it is last, because it can be cut whole. What a learner has to keep is the chained line before it and the fix above it - that line is maths, JS is not written that way, so write two pieces. Everything here answers a question a curious reader asks and an incurious one does not, so it sits after the line that changes what they type rather than in front of it.");
  ("What 2 < 5 < 8 does in JS is deliberately not shown, not even part way. A walk through it - solve 2 < 5, replace it with true, and then we have true < 8 - was written and then removed. It derives the claim, which is worth something, but four of its six lines only re-practised the earlier lesson, and its one new line was true < 8, which cannot be finished without teaching that JS counts a true as 1 - a rule needed nowhere else in this track. So the walk's whole value lay in the step being withheld, which left the reader holding a question they arrived without. Every step of it is a fact about JS alone: Java refuses the line outright, C compiles it with a warning naming it, Python chains it like maths. The habit that travels is 2 < 5 && 5 < 8.");
  ("The examples that would show a wrong answer, kept here so they are not searched for twice: 2 < 5 < 3 is true although 5 is not between 2 and 3; 8 > 5 > 2 is false although 5 is between 2 and 8; -1 < 0 < 1 is false although 0 is between -1 and 1. Each still needs the counts-as-1 rule to be checkable, which is why none is used.");
  ("Not explaining is said out loud, with its reason. An unexplained rule the reader is told to trust reads as one the writer could not justify; naming that many languages call the line an error, and that this track is about programming rather than about JS, turns the omission from a gap into a choice.");
  app_code_container_light_blue_cycle_code_multiple(root, [
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
