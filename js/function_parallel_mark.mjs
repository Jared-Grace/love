import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_block_call_add_first } from "./js_block_call_add_first.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_parallel_mark(f_name) {
  "Put the mark in one function's body saying it shares its shape with another on purpose.";
  "It goes at the front, because a body that ends in a handing-back would swallow a line added after it - written, never reached, and reading to whoever opens the file as though it runs.";
  "A function already carrying the mark is left exactly as it is. Saying a thing twice does not say it harder, and the second line is worse than useless: it is invisible to every reader of the mark, since one call is what they all look for, so nothing would ever report it and it would sit there being read as though somebody meant two of them. The way it gets written is not an odd one either - the run that marks a whole group commits each name as it lands, so a run that dies partway leaves some names done, and the obvious repair is to run the same command again over the same group.";
  arguments_assert(arguments, 1);
  let marked = await function_parallel_marked_is(f_name);
  if (marked) {
    return f_name;
  }
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
