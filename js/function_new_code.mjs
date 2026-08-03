import { each } from "./each.mjs";
import { function_auto } from "./function_auto.mjs";
import { js_block_body_add_code } from "./js_block_body_add_code.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_flo_params_add } from "./js_flo_params_add.mjs";
import { function_new_transform } from "./function_new_transform.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_new_code(f_name, parameters, lines) {
  "Writes a whole new function from its name, the names it receives, and the lines it is made of, then puts the file into the shape this repo writes.";
  "The one that writes a named constant already does this for the single shape it knows, and everything above it had to reach for the three separate pieces - make the file, add the names it receives, add each line - and remember the pass at the end. A command that writes four related functions had to spell that out four times, and the four spellings are where a forgotten pass hides.";
  "The lines arrive as written code, so this is an atom for a command to build on rather than a command to run. What makes a command built on it safe to approve is that the command shapes its own lines from names it has already checked, and nobody outside hands it code.";
  "The pass at the end is what adds the imports the new lines need, so a caller names a function it wants to call and does not also have to say where it lives.";
  arguments_assert(arguments, 3);
  async function lambda(ast) {
    js_flo_params_add(ast, parameters);
    let block = js_find_body_block(ast);
    function line_add(line) {
      js_block_body_add_code(ast, [block], line);
    }
    each(lines, line_add);
  }
  await function_new_transform(f_name, lambda);
  await function_auto(f_name);
  return f_name;
}
