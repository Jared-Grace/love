import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { subtract } from "./subtract.mjs";
export function list_take_last(list, count) {
  arguments_assert(arguments, 2);
  ("the last few items of a list, in the order they stand in");
  ("the mirror of ",
    fn_name("list_take"),
    ", which answers with the first few");
  let size = list_size(list);
  let skipped = subtract(size, count);
  let taken = list_skip(list, skipped);
  return taken;
}
