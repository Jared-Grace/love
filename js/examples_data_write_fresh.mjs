import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_run_fresh } from "./function_run_fresh.mjs";
export async function examples_data_write_fresh() {
  arguments_assert(arguments, 0);
  ("Writes the corpus data file out from a process that has loaded nothing yet, which is what a command that has just changed the corpus needs.");
  ("THE ORDER THE EXAMPLES ARE MET IN IS A FUNCTION, not a file that gets read each time. So a command that has just placed a new example in a group and then writes the data file out is rendering with the order it loaded before its own edit: the new example lands at the end, as though nobody had said where it belongs, and the gate that compares the file to a fresh reading goes red for a reason that is nowhere in the command.");
  ("It is not a second way of writing the file. It is the same one, asked from somewhere that can see the change.");
  let f_name = fn_name("examples_data_write");
  let written = await function_run_fresh(f_name);
  return written;
}
