import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_name(name, value) {
  arguments_assert(arguments, 2);
  ("a name standing in an expression shape, still to be read, with the value it will be read as: the a in a + 1 while a is 3");
  ("2026-10-17, at the human's asking: a program's line is solved in the order JavaScript solves it, which reads a name only when it reaches it - after everything to its left, and so after any operator to its left that is done first, as the second s in ++s * s is read only once ++s is done. So a name is a part of the line pressed in its turn like an operator, rather than all of a line's names being put in first. Not picked: putting in each name just before the operator that uses it, which reads the left s in s + ++s after the ++ and gets 6 where JavaScript gets 5");
  ("Told apart from an operator by having no operator, so a line no program built - every expression lesson's - never holds one");
  let named = {
    name,
    value,
  };
  return named;
}
