import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_find_name_body } from "./js_statement_find_name_body.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_index_of } from "./list_index_of.mjs";
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
  let refusals = [];
  let moved = js_statement_find_name_body(ast, address);
  let target = js_statement_find_name_body(ast, address_before);
  let declaration = js_flo(ast);
  let statements = js_function_declaration_to_block_body(declaration);
  let index_moved = list_index_of(statements, moved);
  let index_target = list_index_of(statements, target);
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
  let crossed = list_slice(statements, index_target, index_moved);
  js_statement_move_before_refusals_flow(refusals, moved, crossed);
  return refusals;
}
