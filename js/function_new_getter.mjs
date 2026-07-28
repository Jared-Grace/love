import { function_new_transform } from "./function_new_transform.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_block_body_add_code } from "./js_block_body_add_code.mjs";
import { function_auto } from "./function_auto.mjs";
import { text_combine } from "./text_combine.mjs";
export async function function_new_getter(f_name, meaning, value) {
  "Writes a whole named constant in one command - the file, the line saying what it is for, and the value it hands back - and leaves nothing to finish by hand.";
  "This is the shape the repo makes most often and had no command for. Asking the history which hand edits dominate answers with new files of exactly this kind, forty of the last hundred and twenty-eight, all of them a size or a color being lifted out of the place it was written so it can be named once and shared.";
  "The value is a whole argument of the command rather than a word inside a joined list, which is what lets it hold a full stop - every size here is written like nought point eight five of the surrounding text, and a joined list would tear that in two.";
  async function lambda(ast) {
    let block = js_find_body_block(ast);
    let left = JSON.stringify(meaning);
    let prose = text_combine(left, ";");
    js_block_body_add_code(ast, [block], prose);
    let right = JSON.stringify(value);
    let bound = text_combine("let v = ", right);
    let statement = text_combine(bound, ";");
    js_block_body_add_code(ast, [block], statement);
    js_block_body_add_code(ast, [block], "return v;");
  }
  await function_new_transform(f_name, lambda);
  await function_auto(f_name);
  return f_name;
}
