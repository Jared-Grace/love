import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_expression_value } from "./app_learn_js_expression_value.mjs";
import { app_learn_js_expression_name_is } from "./app_learn_js_expression_name_is.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { app_learn_js_expression_node_index_is } from "./app_learn_js_expression_node_index_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { app_learn_js_expression_value_decoys } from "./app_learn_js_expression_value_decoys.mjs";
import { equal } from "./equal.mjs";
import { text_is } from "./text_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_learn_js_expression_array_decoys(current, node) {
  arguments_assert(arguments, 2);
  ("the wrong values to offer beside the right one when a line reads an array: for a.length, one fewer and one more than it holds; for an item read by its index, the index itself and the items on either side of it; for anything else, what a line of numbers offers");
  ("Each is a mistake somebody makes. One fewer than the length is the last index taken for the length, and one more is counting from 1 past the end. The index offered in place of its item is answering where rather than what, and a neighbour is counting from 1 instead of 0, or the other way round.");
  ("A wrong value for a step of arithmetic is kept only when it is the same kind of value as the right one, because the whole line's answer is an item of the array, and a word offered for what 3 - 1 comes to is not a mistake anybody could make.");
  let value = app_learn_js_expression_value(node);
  let candidates = [];
  if (app_learn_js_expression_name_is(node)) {
    let fewer = subtract(value, 1);
    let more = add(value, 1);
    candidates = [fewer, more];
  } else if (app_learn_js_expression_node_index_is(node)) {
    let items = property_get(node, "left");
    let index = property_get(node, "right");
    list_add(candidates, index);
    let before = subtract(index, 1);
    if (greater_than_equal(before, 0)) {
      let item_before = list_get(items, before);
      list_add(candidates, item_before);
    }
    let after = add(index, 1);
    let size = list_size(items);
    if (less_than(after, size)) {
      let item_after = list_get(items, after);
      list_add(candidates, item_after);
    }
  } else {
    let numbers = app_learn_js_expression_value_decoys(current, node);
    function kind_same_is(candidate) {
      let left = text_is(candidate);
      let right = text_is(value);
      let same = equal(left, right);
      return same;
    }
    candidates = list_filter(numbers, kind_same_is);
  }
  function wrong_is(candidate) {
    let differs = equal_not(candidate, value);
    return differs;
  }
  let wrong = list_filter(candidates, wrong_is);
  let decoys = list_unique(wrong);
  return decoys;
}
