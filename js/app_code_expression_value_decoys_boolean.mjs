import { app_code_expression_solved } from "./app_code_expression_solved.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
export function app_code_expression_value_decoys_boolean(current_unused, node) {
  arguments_assert(arguments, 2);
  ("the wrong value to offer beside the right one when the part a learner just chose is a comparison: the other of true and false");
  ("There is only ever one, and nothing has to be invented to find it. A comparison comes to true or false and to nothing else, so the whole of what could be pressed instead is the other word - two buttons, both of them a real reading of the line, and no third value that could only be there to fill a row.");
  ("The arithmetic lessons on this same engine need a different set - the value the other operator would have given, and the value of the whole line - because a number has no other. Neither of those carries over: the other operator on a comparison line is another comparison and would answer with a true or false already on offer, and the whole line's value IS a true or false, so it would be the right answer half the time.");
  ("The line the part is standing in is not needed, because nothing about the rest of the line changes what a comparison can come to. It is taken all the same, because this is asked for wherever the arithmetic one is and the two are handed the same two things.");
  let value = app_code_expression_solved(node, node);
  let other = not(value);
  let decoys = [other];
  return decoys;
}
