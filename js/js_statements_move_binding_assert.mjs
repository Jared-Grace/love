import { arguments_assert } from "./arguments_assert.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { js_statements_referenced_names } from "./js_statements_referenced_names.mjs";
import { list_intersect_empty_is_assert_json } from "./list_intersect_empty_is_assert_json.mjs";
export function js_statements_move_binding_assert(
  statements_moved,
  statements_crossed,
  down_is,
) {
  arguments_assert(arguments, 3);
  ("Refuse a move that would carry a line past the lines that depend on it, or");
  ("past the lines it depends on. Reordering is the one edit that can leave every");
  ("line intact and still break the whole function, because what a line means");
  ("depends on what came before it.");
  ("Which way it travels decides which question to ask, and there are only two.");
  ("Going down, the danger is what the moved line makes: the lines it passes were");
  ("reading it and would now be reading nothing. Going up, the danger is what the");
  ("moved line reads: the lines it passes were making those, and now come after.");
  if (down_is) {
    let bound_moved = js_statements_declared_names_direct(statements_moved);
    let read_crossed = js_statements_referenced_names(statements_crossed);
    list_intersect_empty_is_assert_json(bound_moved, read_crossed, {
      hint: "the lines this one would move past are reading what it makes, so moving it down would leave them reading nothing — would you like to move those lines too, or move this one somewhere above them?",
    });
    return;
  }
  let read_moved = js_statements_referenced_names(statements_moved);
  let bound_crossed = js_statements_declared_names_direct(statements_crossed);
  list_intersect_empty_is_assert_json(read_moved, bound_crossed, {
    hint: "this line reads what the lines it would move past are making, so moving it up would put it in front of them — would you like to move it to somewhere below them?",
  });
}
