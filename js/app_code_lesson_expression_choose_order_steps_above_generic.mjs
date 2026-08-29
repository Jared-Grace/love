import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_choose_order_walks_above_generic } from "./app_code_lesson_expression_choose_order_walks_above_generic.mjs";
export function app_code_lesson_expression_choose_order_steps_above_generic(
  root,
  recall,
  tree,
  intro,
) {
  arguments_assert(arguments, 4);
  ("what stands above the card on a lesson whose line is taken down one operator at a time: the thing to remember first, then the one line handed in walked all the way to its value, then the one sentence saying what is different here");
  ("The same three-part shape - recall, run, hinge - as every step-at-a-time lesson around it, because a learner arriving here has read that shape on the screens behind them. A run laid out a new way would be read as a new thing to learn, when the only new thing on the screen is what the line is allowed to hold.");
  ("What a part needs on each side used to be handed in, because the shape could not read it off the line and an arithmetic line wants a number there where a line of true and false wants one of those two. Nothing is handed in now: the walk gives the rule that decided the step instead of saying what the part had beside it, and that rule is read off the line itself. So the one thing this shape could not work out for itself turned out to be a thing it did not need to say.");
  ("THE LAYING OUT IS NEXT DOOR NOW. It used to be written out here and the three lessons walking two lines each wrote it out again, on the reasoning that a second walk could only be had by copying this shape - which stopped being so once the shape took its walks as a list. What is left here is the one decision a lesson walking a single line makes.");
  ("No heading is asked for above the line, because a lesson walking one line has nothing to say about that walk which is not already said in the last card. It hands in an empty one rather than nothing at all, so the shape next door never has to ask which walk it is on.");
  let heading_none = [];
  let walks = [
    {
      heading: heading_none,
      tree,
    },
  ];
  app_code_lesson_expression_choose_order_walks_above_generic(
    root,
    recall,
    walks,
    intro,
  );
}
