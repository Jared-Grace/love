import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_if_block_reached(blocks, index) {
  arguments_assert(arguments, 2);
  ("whether the section at index of the sections ",
    fn_name("app_code_if_blocks"),
    " finds is ever reached: it is not when it stands inside a section that does not run, because it went with that section");
  let block = list_get(blocks, index);
  let open = property_get(block, "open");
  for (let j = 0; less_than(j, index); j++) {
    let outer = list_get(blocks, j);
    let runs = property_get(outer, "runs");
    let outer_open = property_get(outer, "open");
    let outer_close = property_get(outer, "close");
    if (
      not(runs) &&
      less_than(outer_open, open) &&
      less_than(open, outer_close)
    ) {
      return false;
    }
  }
  return true;
}
