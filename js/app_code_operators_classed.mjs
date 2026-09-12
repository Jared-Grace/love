import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_by_rank } from "./app_code_operators_by_rank.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function app_code_operators_classed() {
  arguments_assert(arguments, 0);
  ("every operator this app has said how strong it is, gathered from the classes themselves: || , &&, the comparisons including == and !=, + and -, * / and the remainder, the power sign, and ! and Math.floor");
  ("Gathered from the strength classes rather than listed, so an operator added to a class is covered by whatever asks this without anybody remembering to come here. A list typed out here would agree with the classes on the day it was typed and never again.");
  ("It used to be a SHORTER list than the operators a lesson may put in a shape, and that gap was the fault. The comparisons were the class reached by falling through, so four operators nobody had classed - the remainder sign, the power sign, and the two loose equality signs - came back with a comparison's strength and could not be told apart from a real comparison. Nothing falls through now: asking the strength of an unclassed operator refuses. So this list and the operators a shape may hold are the same set, and a check may hold one against the other.");
  let classes = app_code_operators_by_rank();
  let all = list_concat_multiple(classes);
  return all;
}
