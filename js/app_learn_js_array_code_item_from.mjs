import { arguments_assert } from "./arguments_assert.mjs";
import { list_slice } from "./list_slice.mjs";
import { js_value_code } from "./js_value_code.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { add } from "./add.mjs";
export function app_learn_js_array_code_item_from(items, index) {
  arguments_assert(arguments, 2);
  ("where the item at index starts in the array written as code, the [ counted: the items before it written out, less their ], and the comma and space after them when there are any. The items before it are the same in the array before and after a change at index, so it starts at the same place in both");
  let before_items = list_slice(items, 0, index);
  let before_code = js_value_code(before_items);
  let left = text_size(before_code);
  let item_from = subtract(left, 1);
  if (greater_than(index, 0)) {
    item_from = add(item_from, 2);
  }
  return item_from;
}
