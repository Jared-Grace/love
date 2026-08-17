import { arguments_assert } from "./arguments_assert.mjs";
import { js_stack_function_below_is } from "./js_stack_function_below_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_index_of_next_outside } from "./list_index_of_next_outside.mjs";
export function js_identifier_defineds_block_index(stack, bs_list, item) {
  arguments_assert(arguments, 3);
  ("How far down a block to read for the names standing where a name is written: as far as the statement holding it, or the whole block where the name sits inside a function written in that statement.");
  ("Reading only as far as the statement is right for a run of work and wrong for a function, and the difference is when the two are read. A name read further down the block was already standing by the time a function written above it is called, which is why a function declared anywhere in a block was already answered for the whole block here. A let is no different once the name reading it is inside a function - and a move that did not know this handed a piece its own later let as a parameter, which named the same word twice and wrote a file that would not parse.");
  let below_is = js_stack_function_below_is(stack, item);
  if (below_is) {
    let size = list_size(bs_list);
    return size;
  }
  let index = list_index_of_next_outside(bs_list, item);
  return index;
}
