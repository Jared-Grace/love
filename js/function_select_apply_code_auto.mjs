import { function_select_apply_code } from "./function_select_apply_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_select_apply_code_auto(
  f_name,
  select_fn_name,
  select_args_comma,
  apply_fn_name,
  code,
) {
  arguments_assert(arguments, 5);
  ("Finds the node, changes it, and canonicalizes the file - the three that are");
  ("always run together and never usefully stopped between.");
  ("A transform that writes a call to a function the file does not yet import");
  ("leaves that file reading a name nothing binds, which is a state no reader");
  ("wants and a gate refuses. The canonicalizing pass is what adds the import, so");
  ("until it runs the edit is only most of the way done - and a commit taken in");
  ("that gap records a file that does not load.");
  ("Both halves stay on their own for the times only one is wanted; this is simply");
  ("the one to reach for.");
  ("This is the code-carrying sibling of the list-carrying one, and it existed on");
  ("that side only, so every line of written code went in through a command that");
  ("stopped one step short. Written code is the shape most likely to name a");
  ("function the file has never imported, which makes the missing step worst");
  ("exactly where it was missing.");
  ("The pairing that made the change is what names this, not the pass that tidied");
  ("up after it: canonicalizing changes nothing anybody asked for.");
  let output = await function_select_apply_code(
    f_name,
    select_fn_name,
    select_args_comma,
    apply_fn_name,
    code,
  );
  await function_auto(f_name);
  return output;
}
