import { arguments_assert } from "./arguments_assert.mjs";
import { function_read } from "./function_read.mjs";
import { path_base } from "./path_base.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_temp_write(f_name) {
  arguments_assert(arguments, 1);
  ("A function already in the repo copied out into the throwaway folder under its own name, ready to be worked on and put back.");
  ("★ IT IS THE WAY IN THAT WAS MISSING. The throwaway folder is the door out of the commands-only switch, and until now the door only opened outwards: a function could be drafted there and promoted, but a function that already existed could only get there by being typed out again from what reading it printed. Typing it out again is how a long function loses a line nobody notices, and it is the one thing the whole arrangement exists to avoid.");
  ("★ WHAT LANDS IS THE FILE AS IT IS, IMPORT LINES AND ALL, AND THOSE LINES POINT AT THE WRONG PLACE FROM WHERE IT NOW SITS. That is not worth mending: only the function itself is carried back on the way in, and the imports are worked out again from the names the body reads. So the copy is for editing and putting back, and not for running where it lies.");
  ("The name it is filed under is its own, because that is the name the way back insists on: a draft has to be named after its own file, and the file has to be named after the function.");
  let source = await function_read(f_name);
  let base = path_base(f_name);
  let file_name = text_combine(base, ".mjs");
  let path = path_join(["scripts", "temp", file_name]);
  await file_overwrite(path, source);
  return path;
}
