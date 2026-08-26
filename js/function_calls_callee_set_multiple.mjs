import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_calls_callee_set } from "./function_calls_callee_set.mjs";
import { list_add } from "./list_add.mjs";
export async function function_calls_callee_set_multiple(
  names_comma,
  f_name_before,
  f_name_after,
) {
  arguments_assert(arguments, 3);
  ("Moves the calls of several named functions from one helper to another, one function");
  ("at a time, committing each move under its own name before the next one starts.");
  ("This exists because splitting an overloaded reading in two is never a one-file edit.");
  ("One function was answering two questions, a second function is written to answer the");
  ("other one, and then some of the callers have to be pointed at it - which is the same");
  ("single-function command run once per caller. Run by hand that many times it leaves");
  ("nothing behind and it cannot be given a truthful commit message, because a batch has");
  ("no one command to name and so forces a description into the place a description must");
  ("never go.");
  ("THE SET IS HANDED IN RATHER THAN FOUND, and that is not a shortcut. Which callers");
  ("meant the other question is a judgment about what each one is for - it is read out of");
  ("the sentences they were written with, not out of anything the code says. A command");
  ("that went looking would have to guess it, and guessing it wrong points a deploy check");
  ("at the wrong set of apps without anything going red.");
  ("What is already noted as changed is committed first, under the bare word. The note is");
  ("one running list with no divider in it, so leftovers from earlier would otherwise be");
  ("swept into the first move and filed under a command that never touched them.");
  await ai_git_noted();
  let names = text_split_comma(names_comma);
  let outputs = [];
  for (let f_name of names) {
    let args = [f_name, f_name_before, f_name_after];
    let output = await function_call_commit(function_calls_callee_set, args);
    list_add(outputs, output);
  }
  return outputs;
}
