import { arguments_assert } from "./arguments_assert.mjs";
import { functions_code } from "./functions_code.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_entries_dispatcher_commands_unresolved } from "./function_entries_dispatcher_commands_unresolved.mjs";
export async function functions_dispatcher_commands_unresolved() {
  "Every command the repo's own writing tells a reader to run that names no live function, with the function whose writing tells them. Read-only.";
  "A docstring ending in run this, and then the command, is the one place a function name is written where nothing carries it. The transforms follow a name through every call, every import and every alias; they do not follow it through a sentence, and they should not - a sentence recording that something used to be called one thing is meant to keep saying it. So the instruction goes stale silently, and the reader who follows it is told the dispatcher does not know that name, on the run they were doing something else.";
  "Every repo, because a command written in one is run at the same seam as a command written in another, and the reader following it does not care which folder the sentence lived in.";
  arguments_assert(arguments, 0);
  let entries = await functions_code();
  let f_names = await functions_names();
  let unresolved = function_entries_dispatcher_commands_unresolved(
    entries,
    f_names,
  );
  return unresolved;
}
