import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_params_count } from "./function_params_count.mjs";
import { functions_calls_named_sized } from "./functions_calls_named_sized.mjs";
import { function_calls_callee_set } from "./function_calls_callee_set.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_calls_callee_set(f_name_before, f_name_after) {
  arguments_assert(arguments, 2);
  ("Moves every call in this repo that hands one helper more things than it takes");
  ("over to the helper that takes them.");
  ("A helper that drops what it is given fails silently and everywhere at once, so");
  ("the fix is never one file - and running the one-file command down a list leaves");
  ("nothing behind that says how the repo was changed. This asks the repo which");
  ("files they are, so the set cannot drift from what is actually wrong.");
  ("How many things to look for is read off the helper being moved to. That is what");
  ("keeps the callers who were already right out of it: they hand over a different");
  ("number, so they are never selected.");
  ("Each file is committed as it lands, under its own name and its own arguments,");
  ("because a run over many files lasts long enough for somebody else's sweep to");
  ("take them first and file them under a bare word.");
  await ai_git_noted();
  let count = await function_params_count(f_name_after);
  let callers = await functions_calls_named_sized(f_name_before, count);
  let moved = [];
  for (let caller of callers) {
    let args = [caller, f_name_before, f_name_after];
    await function_call_commit(function_calls_callee_set, args);
    list_add(moved, caller);
  }
  let r = {
    count,
    moved,
  };
  return r;
}
