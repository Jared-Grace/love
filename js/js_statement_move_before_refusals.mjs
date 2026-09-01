import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_move_before_lines } from "./js_statement_move_before_lines.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_slice } from "./list_slice.mjs";
import { js_statement_move_before_refusals_flow } from "./js_statement_move_before_refusals_flow.mjs";
export function js_statement_move_before_refusals(
  ast,
  address,
  address_before,
) {
  arguments_assert(arguments, 3);
  ("$plain address");
  ("the word written on the line that would be moved.");
  ("$plain address_before");
  ("the word written on the line it would come to stand above.");
  ("Every reason one line of a function's body cannot be lifted to stand above another, said in words rather than counted, and an empty list when there is none.");
  ("MOVING A LINE EARLIER IS ONLY THE SAME CODE IF NOTHING BETWEEN THE TWO PLACES CARES WHICH SIDE OF IT THE LINE IS ON. That is what makes it worth a reading of its own: the move is the one thing that unsticks a body whose sections were written before the value they all close over, and every one of those bodies looks unsafe at a glance because the name is written above the line that binds it dozens of times.");
  ("IT ANSWERS WITH THE REASONS RATHER THAN THROWING, so that a caller may ask whether a move is possible without asking for it. A caller that wants the move made asks for it next door and that one stops.");
  ("A word pointing at no line is the one thing that stops here rather than being reported, and it stops one name down, where the pointing is done. That reading already refuses an unknown word in its own words and says what to try instead, so a second refusal written here would only be a worse copy of it - and there was one, until it was found to be unreachable.");
  ("ONE THING IT CANNOT DECIDE AND DOES NOT PRETEND TO: what the moved line does to the world besides binding a name. A line that draws something, sends something, or writes into something reached through a name that is bound at both places does that earlier after the move, and no reading of the two lines can tell whether the earlier is wrong. That judgment is the caller's, exactly as choosing a name is the caller's when a run of lines is cut out.");
  ("FINDING THE TWO LINES IS DONE NEXT DOOR AND NOT HERE, because the one that makes the move has to find exactly the same two, and a lookup written out on both sides of a proof is the copy most worth removing - the whole point of this reading is that the mover acts on the lines this reading judged.");
  let refusals = [];
  let lines = js_statement_move_before_lines(ast, address, address_before);
  let index_moved = property_get(lines, "index_moved");
  let index_target = property_get(lines, "index_target");
  let earlier = less_than(index_target, index_moved);
  if (not(earlier)) {
    let backwards = {
      about: "order",
      name: null,
      why: "the line to move already stands at or above the line it was to be lifted over, so there is nothing to lift it over. This moves a line earlier and never later - a later move is a different question, because what it would jump over has already run.",
    };
    list_add(refusals, backwards);
    return refusals;
  }
  let statements = property_get(lines, "statements");
  let crossed = list_slice(statements, index_target, index_moved);
  let moved = property_get(lines, "moved");
  js_statement_move_before_refusals_flow(refusals, moved, crossed);
  return refusals;
}
