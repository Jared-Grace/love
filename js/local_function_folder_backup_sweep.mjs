import { function_import } from "./function_import.mjs";
import { local_function_folder_backup } from "./local_function_folder_backup.mjs";
export async function local_function_folder_backup_sweep(
  sweep_f_name,
  store_f_name,
) {
  "Run one sweep over one function's store, having first kept a copy of everything that store holds.";
  "The copy is taken here rather than left to the caller, because the caller is whoever is about to rewrite something git has never seen, and that is exactly the moment nobody remembers an undo. Made part of the same command, the backup cannot be the step that was skipped - there is no spelling of this that runs the sweep without it.";
  "Both names are looked up rather than handed on as text, which is what makes the whole family of store sweeps reachable at all. Each of them takes the function itself, so its folder can be spelled after a name rather than after a word that merely looks like one - and a command line carries only words, so before this there was no way to call any of them from one. The refusal was correct and the way through is to resolve the name, not to loosen what the sweep accepts.";
  "The lookups happen before the copy so that a misspelt sweep is refused for nothing, rather than after a whole store has been copied for a run that was never going to start.";
  "It answers with both halves - what was copied and what the sweep did - because either alone can look like success. A sweep reporting no changes over a store the backup found empty has repaired nothing and touched nothing, and only the two read together tell that apart from a store that was already clean.";
  let sweep = await function_import(sweep_f_name);
  let store_fn = await function_import(store_f_name);
  let backup = await local_function_folder_backup(store_f_name);
  let swept = await sweep(store_fn);
  let r = {
    backup,
    swept,
  };
  return r;
}
