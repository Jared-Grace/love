import { list_size_subtract } from "./list_size_subtract.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_skip } from "./list_skip.mjs";
export function list_take_last(list, count) {
  arguments_assert(arguments, 2);
  ("the last few items of a list, in the order they stand in");
  ("the mirror of ",
    fn_name("list_take"),
    ", which answers with the first few");
  let skipped = list_size_subtract(list, count);
  let taken = list_skip(list, skipped);
  return taken;
}
