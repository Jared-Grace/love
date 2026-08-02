import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { js_node_to_block } from "./js_node_to_block.mjs";
import { property_get } from "./property_get.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
export function js_selects_pair_same_block(ast, selects, message) {
  arguments_assert(arguments, 3);
  ("The two chosen statements, read as a pair standing in one block: the block's own list of statements, each chosen statement itself, and where each one sits in that list.");
  ("Every verb that works on a range rather than on a single statement needs exactly this and nothing else, and each of them was finding it the same way: take the first and the last of what was chosen, ask which block each one stands in, and refuse to go on unless the answer is the same block. A range across two blocks is not a range at all - there is no list that holds both ends, so there is nothing for a verb to slice or to move things within.");
  ("The refusal carries the caller's own words, because what a range means differs by verb and so does the help a person needs when theirs is not one.");
  let node_from = list_first(selects);
  let node_to = list_last(selects);
  let f_from = js_node_to_block(ast, node_from);
  let f_to = js_node_to_block(ast, node_to);
  let body = property_get(f_from, "body");
  let body_to = property_get(f_to, "body");
  let same = equal(body, body_to);
  assert_message(same, message);
  let item_from = property_get(f_from, "item");
  let item_to = property_get(f_to, "item");
  let index_from = property_get(f_from, "index");
  let index_to = property_get(f_to, "index");
  let r = {
    body,
    item_from,
    item_to,
    index_from,
    index_to,
  };
  return r;
}
