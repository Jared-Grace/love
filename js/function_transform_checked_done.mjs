import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
export async function function_transform_checked_done(
  f_name,
  edit,
  local_name,
) {
  arguments_assert(arguments, 3);
  ("Make a change to a function, put the canonicalizing pass over it afterwards, and answer that it was done, with whatever the pass had to say and the name the change kept.");
  ("This is how a swap ends, and both of the swaps that put a call where a copy of a shared body stood - the one that works at a function's opening and the one that works at its ending - closed with these same three lines written out in full.");
  ("The pass has to follow the change rather than wait for a sweep, because a swap writes a line naming a function the file has never imported. Until the pass has been over it the file reads a name nothing binds, and a commit taken in that gap records a file that does not load.");
  ("It does not commit, and that is the one thing this must not quietly start doing. Committing is left to whatever is calling, so that a sweep over many functions can commit each place as it lands and file each under its own name.");
  ("What the pass said travels out rather than being thrown away, because a pass that had to mend something is worth seeing next to the swap that made the mending necessary.");
  await function_transform(f_name, edit);
  let checked = await function_auto_checked(f_name);
  let done = {
    ok: true,
    reason: "",
    local_name: local_name,
    checked: checked,
  };
  return done;
}
