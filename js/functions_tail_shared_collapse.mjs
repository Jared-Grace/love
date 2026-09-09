import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_tail_shared_collapsible } from "./functions_tail_shared_collapsible.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_tail_shared_replace } from "./function_tail_shared_replace.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_tail_shared_collapse(shared_name) {
  arguments_assert(arguments, 1);
  ("Swaps every copy of the named function's body that another function ends with for a call to it, one function at a time, committing each swap as it lands.");
  ("It finds its own set rather than being handed one. The set is whatever ends with that body at the moment the sweep runs, and a list typed out beforehand can only be what ended with it at the moment somebody read - in a folder several hands are editing, those are not the same set.");
  ("Each swap is committed under its own name and its own two arguments, so the log records the change as a command that could be run again rather than as one entry covering a run of files that no single command names.");
  ("Whatever is already noted as written is committed first, under the bare word. The note of written files is one running list with no divider in it, so anything left standing from earlier work would be swept into the first swap's commit and filed under a command that never touched it.");
  ("The refusals the reading gives back are not acted on and not repeated here. A refusal is a function that really does end with the same work and still cannot take the call, which is a thing to read rather than a thing to sweep.");
  ("A swap can refuse where the reading offered, because the swap asks one question the reading does not, and those come back named so that the difference between the two halves stays visible instead of being counted as done.");
  await ai_git_noted();
  let found = await functions_tail_shared_collapsible(shared_name);
  let refused_shared = property_get(found, "refused_shared");
  let stopped_is = text_empty_not_is(refused_shared);
  if (stopped_is) {
    let stopped = {
      shared: shared_name,
      refused_shared: refused_shared,
      done: [],
      left: [],
    };
    return stopped;
  }
  let collapsible = property_get(found, "collapsible");
  let done = [];
  let left = [];
  for (let listed of collapsible) {
    let f_name = property_get(listed, "f_name");
    let args = [f_name, shared_name];
    let result = await function_call_commit(function_tail_shared_replace, args);
    let ok_is = property_get(result, "ok");
    if (ok_is) {
      list_add(done, f_name);
      continue;
    }
    let reason = property_get(result, "reason");
    list_add(left, {
      f_name: f_name,
      reason: reason,
    });
  }
  let swept = {
    shared: shared_name,
    refused_shared: "",
    done: done,
    left: left,
  };
  return swept;
}
