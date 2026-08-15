import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { less_than } from "./less_than.mjs";
import { lift_candidate_size_least } from "./lift_candidate_size_least.mjs";
import { js_function_declaration_statements_deep } from "./js_function_declaration_statements_deep.mjs";
export function function_lift_candidate_row(
  reading,
  declaration,
  names_nested,
) {
  arguments_assert(arguments, 3);
  ("One line of a report of what could be moved out of a function: what the piece is called, how many lines of work it holds, what it would have to be handed, and which of those are its neighbours. Nothing when the piece is too small to be worth moving.");
  ("The two reports ask different questions about whether a piece can be moved and the same question about everything else, so everything else is written once here. Two copies would not drift into a wrong answer; they would drift into two reports whose rows can no longer be read side by side, which is worse, because nothing about either one would look wrong.");
  ("A piece too small to be worth moving is left out rather than listed. It is the same rule as leaving out a function with nothing liftable in it - a row here is a command to run, and a command that moves one line out of a long function has not shortened anything.");
  ("Without this the list ends by naming the smallest thing in the file. It names the biggest piece inside each function, so once every piece worth cutting has been cut the biggest one left is whatever is left, and a one-line wrapper stood at the top of the work list looking like work.");
  let deep = js_function_declaration_statements_deep(declaration);
  let size = list_size(deep);
  let least = lift_candidate_size_least();
  let small_is = less_than(size, least);
  if (small_is) {
    return null;
  }
  let name = property_get(reading, "name_old");
  let closed = property_get(reading, "closed");
  ("Which of the names it closes over are themselves functions written here, because those are the ones to lift first rather than hand in.");
  let closed_nested = list_intersection(closed, names_nested);
  let row = {
    name,
    size,
    closed,
    closed_nested,
  };
  return row;
}
