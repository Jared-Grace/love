import { add } from "./add.mjs";
import { app_code_expression_leaves_count } from "./app_code_expression_leaves_count.mjs";
import { app_code_expression_node_is } from "./app_code_expression_node_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_leaves_before(item, node) {
  arguments_assert(arguments, 2);
  ("how many numbers of a line are read before a given piece of it, and nothing at all when that piece is no part of this line");
  ("Numbers counted rather than characters, because this is asked to say WHICH number of the next line the piece is about to become - and that line is written as a run of separate pieces, where each number can be pointed at, rather than as a run of text where every number looks alike.");
  ("It answers about the line as it stands BEFORE the working out. Everything to the left of the piece is untouched by working it out, and the whole piece becomes one number, so the count that stands before it is the same count in the line that follows - which is the line the answer is wanted about.");
  let same = equal(item, node);
  if (same) {
    let r = 0;
    return r;
  }
  let node_is = app_code_expression_node_is(item);
  if (not(node_is)) {
    return null;
  }
  let left = property_get(item, "left");
  let left_before = app_code_expression_leaves_before(left, node);
  let left_missing = null_is(left_before);
  if (not(left_missing)) {
    return left_before;
  }
  let right = property_get(item, "right");
  let right_before = app_code_expression_leaves_before(right, node);
  let right_missing = null_is(right_before);
  if (right_missing) {
    return null;
  }
  ("found down the right side, so everything read on the left side stands before it as well");
  let left_count = app_code_expression_leaves_count(left);
  let counted = add(left_count, right_before);
  return counted;
}
