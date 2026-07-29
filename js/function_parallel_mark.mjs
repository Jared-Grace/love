import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_block_call_add_first } from "./js_block_call_add_first.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_parallel_mark(f_name) {
  "Put the mark in one function's body saying it shares its shape with another on purpose.";
  "It goes at the front, because a body that ends in a handing-back would swallow a line added after it - written, never reached, and reading to whoever opens the file as though it runs.";
  arguments_assert(arguments, 1);
  async function mark(ast) {
    let block = js_find_body_block(ast);
    let selects = [block];
    let mark_name = fn_name("function_duplicate_kind_parallel");
    await js_block_call_add_first(ast, selects, mark_name);
  }
  await function_transform(f_name, mark);
  await function_auto(f_name);
  return f_name;
}
