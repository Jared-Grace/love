import { arguments_assert } from "./arguments_assert.mjs";
import { function_args_count_assert } from "./function_args_count_assert.mjs";
import { ai_git_command_generic } from "./ai_git_command_generic.mjs";
export async function function_call_commit(f, args) {
  arguments_assert(arguments, 2);
  ("Runs one step of a longer command and commits what that step wrote before the");
  ("next step starts. A command that rewrites many files and commits once at the end");
  ("loses its own name: with many hands editing the same folder at once, somebody");
  ("else's sweep reaches those files first and files them under a bare word. The");
  ("answer is not to commit sooner, which nothing can do, but to commit smaller, so");
  ("the window a sweep can win is one step long instead of one run long.");
  ("The message names the step rather than the run around it, so each entry is a real");
  ("command with its real arguments and can be run again by itself. A run of many");
  ("files has no single command to name, which is exactly why it must not try to");
  ("claim one.");
  function_args_count_assert(f, args);
  let result = await f(...args);
  await ai_git_command_generic(f.name, args);
  return result;
}
