import { js_selects_pair_same_block } from "./js_selects_pair_same_block.mjs";
import { list_index_of_add } from "./list_index_of_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { add } from "./add.mjs";
import { list_slice } from "./list_slice.mjs";
import { js_statements_move_binding_assert } from "./js_statements_move_binding_assert.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_selects_move_after(ast, selects) {
  arguments_assert(arguments, 2);
  ("Moves the first chosen line to sit directly after the second. Both ends are");
  ("ordinary selections, so whichever selector names one can name the other, and");
  ("the pair arrives through the multiple form of the command.");
  ("Every other verb here leaves the order of the lines alone, which is why this");
  ("one carries a guard and they do not: putting a line somewhere else is the only");
  ("edit that can break a function without changing a single line of it.");
  let pair = js_selects_pair_same_block(
    ast,
    selects,
    "The two chosen lines were expected to live in the same block. Would you like to check that both sit in the same scope?",
  );
  let body = property_get(pair, "body");
  let item_moved = property_get(pair, "item_from");
  let item_target = property_get(pair, "item_to");
  let index_from = property_get(pair, "index_from");
  let index_to = property_get(pair, "index_to");
  let down_is = greater_than(index_to, index_from);
  let crossed_from = add(index_from, 1);
  let crossed_to = add(index_to, 1);
  ("The lines it travels past, which is the only part of the block the guard has");
  ("to read. Going down it lands after the target, so the target is one of them;");
  ("going up it lands in front of the target, so the target is not.");
  let statements_crossed = list_slice(body, crossed_to, index_from);
  if (down_is) {
    statements_crossed = list_slice(body, crossed_from, crossed_to);
  }
  let statements_moved = [item_moved];
  js_statements_move_binding_assert(
    statements_moved,
    statements_crossed,
    down_is,
  );
  list_remove(body, item_moved);
  let index_insert = list_index_of_add(body, item_target, 1);
  list_insert(body, index_insert, item_moved);
}
