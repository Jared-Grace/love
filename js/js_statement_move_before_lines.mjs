import { js_flo_body } from "./js_flo_body.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_find_name_body } from "./js_statement_find_name_body.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function js_statement_move_before_lines(ast, address, address_before) {
  arguments_assert(arguments, 3);
  ("$plain address");
  ("the word written on the line that would be moved.");
  ("$plain address_before");
  ("the word written on the line it would come to stand above.");
  ("The two lines a move names, the body they both stand in, and where each of them stands in it.");
  ("★ BOTH SIDES OF A MOVE OPEN THE SAME FOUR LINES. The one that lists the reasons a move is refused and the one that makes the move each looked the two words up, took the body apart, and found the body's list of lines - the same words in the same order, twice. Two copies of a lookup do not go wrong the day one is written, they go wrong the day one of them learns something the other does not.");
  ("WHERE EACH LINE STANDS IS WORKED OUT HERE TOO, though only one of the two callers reads it. It costs a walk of a list that has already been walked to find the lines themselves, and having it here is what keeps the shared opening down to a single line at each caller rather than a run long enough to be one copy again.");
  ("A word pointing at no line stops here, in the lookup, in its own words. Neither caller has to say anything about an unknown word, and neither does.");
  let moved = js_statement_find_name_body(ast, address);
  let target = js_statement_find_name_body(ast, address_before);
  let statements = js_flo_body(ast);
  let index_moved = list_index_of(statements, moved);
  let index_target = list_index_of(statements, target);
  let r = {
    moved,
    target,
    statements,
    index_moved,
    index_target,
  };
  return r;
}
