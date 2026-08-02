import { list_size_equal } from "./list_size_equal.mjs";
import { list_index_of_add } from "./list_index_of_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { js_node_to_block } from "./js_node_to_block.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { greater_than } from "./greater_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { and } from "./and.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
import { list_slice } from "./list_slice.mjs";
import { js_statements_move_binding_assert } from "./js_statements_move_binding_assert.mjs";
import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { list_insert_at_multiple } from "./list_insert_at_multiple.mjs";
export function js_selects_span_move_after(ast, selects) {
  arguments_assert(arguments, 2);
  ("Moves a RUN of lines to sit directly after a line elsewhere in the same");
  ("block. Three addresses, named the same way as any other: where the run");
  ("starts, where it ends, and what it should follow.");
  ("The one-line mover beside this is the same edit with the run cut to a single");
  ("line, and its guard already took a LIST of the lines being moved - so nothing");
  ("here had to be invented, only the run handed over whole instead of one line");
  ("wrapped in a list.");
  ("Reordering is the only edit that can break a function without changing a");
  ("single line of it, which is why this carries the guard and the other verbs do");
  ("not. Moving several lines at once cannot be safer than moving one, so the");
  ("same question is asked of the whole run: does it cross anything it reads, or");
  ("anything that reads it.");
  let three = list_size_equal(selects, 3);
  assert_message(
    three,
    "Three lines were expected here - where the run starts, where it ends, and the line it should follow. Would you like to name all three?",
  );
  let node_first = list_get(selects, 0);
  let node_last = list_get(selects, 1);
  let node_target = list_get(selects, 2);
  let f_first = js_node_to_block(ast, node_first);
  let f_last = js_node_to_block(ast, node_last);
  let f_target = js_node_to_block(ast, node_target);
  let body = property_get(f_first, "body");
  let body_last = property_get(f_last, "body");
  let body_target = property_get(f_target, "body");
  let same_ends = equal(body, body_last);
  assert_message(
    same_ends,
    "The two ends of the run were expected to live in the same block. Would you like to check that both sit in the same scope?",
  );
  let same_target = equal(body, body_target);
  assert_message(
    same_target,
    "The line to follow was expected to live in the same block as the run. Would you like to check that all three sit in the same scope?",
  );
  let index_first = property_get(f_first, "index");
  let index_last = property_get(f_last, "index");
  let index_target = property_get(f_target, "index");
  let ordered = greater_than_equal(index_last, index_first);
  assert_message(
    ordered,
    "The run was expected to start at or above where it ends. Would you like to name the two ends the other way round?",
  );
  ("A destination inside the run has no meaning - the lines would have to follow");
  ("themselves - so it is refused rather than resolved to something arbitrary.");
  let after_start = greater_than_equal(index_target, index_first);
  let before_end = greater_than_equal(index_last, index_target);
  let inside = and(after_start, before_end);
  let outside = not(inside);
  assert_message(
    outside,
    "The line to follow sits inside the run being moved. Would you like to name a line outside it?",
  );
  let past_last = add(index_last, 1);
  let statements_moved = list_slice(body, index_first, past_last);
  let down_is = greater_than(index_target, index_last);
  ("The lines the run travels past, which is the only part of the block the guard");
  ("has to read. Going down it lands after the target, so the target is one of");
  ("them; going up it lands in front of the target, so the target is not.");
  let past_target = add(index_target, 1);
  let statements_crossed = list_slice(body, past_target, index_first);
  if (down_is) {
    statements_crossed = list_slice(body, past_last, past_target);
  }
  js_statements_move_binding_assert(
    statements_moved,
    statements_crossed,
    down_is,
  );
  let item_target = property_get(f_target, "item");
  list_remove_multiple(body, statements_moved);
  let index_insert = list_index_of_add(body, item_target, 1);
  list_insert_at_multiple(body, index_insert, statements_moved);
}
