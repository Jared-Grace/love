import { arguments_assert } from "./arguments_assert.mjs";
import { function_read } from "./function_read.mjs";
import { function_prose_lines } from "./function_prose_lines.mjs";
import { each_index } from "./each_index.mjs";
export async function function_prose_numbered(f_name) {
  "What a function says about itself, each line with the number that names it.";
  "The command that changes one of these lines is told which line by its number, and a number nobody can see is a number nobody can pass. So this is the half that makes that one usable: read here, then change there.";
  "Counting starts at one, because these are lines being read rather than places in a list, and a reader asked for the third line counts one, two, three.";
  arguments_assert(arguments, 1);
  let code = await function_read(f_name);
  let lines = function_prose_lines(code);
  let numbered = {};
  function note(line, index) {
    let position = index + 1;
    numbered[position] = line;
  }
  each_index(lines, note);
  return numbered;
}
