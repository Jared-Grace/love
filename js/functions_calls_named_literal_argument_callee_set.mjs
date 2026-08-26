import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { functions_calls_named_literal_argument } from "./functions_calls_named_literal_argument.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_calls_named_literal_argument_callee_set } from "./function_calls_named_literal_argument_callee_set.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_calls_named_literal_argument_callee_set(
  f_name_before,
  literal,
  f_name_after,
) {
  "$plain literal";
  arguments_assert(arguments, 3);
  ("Moves every call in this repo that hands one helper a particular written-out word over to the helper that already knows that word, and says which are left.");
  ("One fact copied into many lines is not many decisions; it is one, written out again each time somebody needed it. So the fix is never one file, and running the one-file command down a list leaves nothing behind saying how the repo was changed - the list has no single command to name, and a run that cannot name itself ends up filed under a bare word.");
  ("The set is asked for rather than handed in, so it cannot drift from what is actually still spelling the word. Asking again at the end is the only honest way to say the move worked: what was changed says what was attempted, and the two differ exactly where it failed.");
  ("Each file is committed the moment it is moved, under its own name and its own real arguments, because a run over many files lasts long enough for somebody else's sweep to reach those files first and file them under a bare word. Anything already waiting to be committed is swept first, so the first file moved cannot carry somebody else's work in under its name.");
  await ai_git_noted();
  let callers = await functions_calls_named_literal_argument(
    f_name_before,
    literal,
  );
  let moved = [];
  for (let caller of callers) {
    let args = [caller, f_name_before, literal, f_name_after];
    await function_call_commit(
      function_calls_named_literal_argument_callee_set,
      args,
    );
    list_add(moved, caller);
  }
  let remaining = await functions_calls_named_literal_argument(
    f_name_before,
    literal,
  );
  let r = {
    moved,
    remaining,
  };
  return r;
}
