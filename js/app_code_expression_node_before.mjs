import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_node_before(symbol, right) {
  arguments_assert(arguments, 2);
  ("one operator written before the single thing it acts on, where that thing may itself be another one of these: the shape !true has, and the shape !(3 < 5) has around it");
  ("The twin of the two-sided shape, and a shape of its own rather than a two-sided one with nothing on its left. Nothing on its left would be a value a learner could be asked to press, and there is no such value: ! is one symbol with one side, and a lesson that takes a line apart a press at a time has to hand the learner exactly the parts that are there.");
  ("Told apart by having no left at all rather than by a mark saying so. A mark can be forgotten at one of the places that build one of these; an absent side is the same fact read off the shape itself, and every reader asks the same question of it.");
  let node = {
    operator: symbol,
    right,
  };
  return node;
}
