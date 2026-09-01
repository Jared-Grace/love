import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_parameters_record } from "./function_parameters_record.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
export async function function_parameters_record_multiple(names_comma) {
  arguments_assert(arguments, 1);
  ("$plain names_comma");
  ("the names of the functions whose parameter rows are to be gathered into one record each, written as one word with commas between them. Every word names a function in this repo and nothing that runs.");
  ("Gathers the parameter row of each named function into a single record and rewrites its callers to hand one over, one function at a time.");
  ("IT COMMITS EACH FUNCTION AS IT LANDS RATHER THAN THE RUN AT THE END. Every name here is an independent change with its own real arguments, so each one is a command that can be read back and run again by itself. A run that committed once would have no single command to name, and in a folder this many hands are editing it would lose most of its files to somebody else's sweep before it ever got to the end.");
  ("THE LIST IS A CHOICE RATHER THAN SOMETHING DERIVABLE, which is why this takes one. The rows that should be gathered whole and the rows that should keep a subject out in front are told apart by reading what the function is for, and no reading of the source makes that call. So the caller decides, and this only spares the repeat.");
  ("A NAME WHOSE FUNCTION IS HANDED OVER AS A VALUE STOPS THE RUN, because the transform refuses it and there is nothing here that could know better than the refusal. The names already done stay done, so the way on is to ask again without that one.");
  await ai_git_noted();
  async function lambda(f_name) {
    let r = await function_call_commit(function_parameters_record, [f_name]);
    return r;
  }
  let outputs = await text_split_comma_map_async(names_comma, lambda);
  return outputs;
}
