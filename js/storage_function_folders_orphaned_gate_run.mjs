import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
import { storage_function_folders_orphaned } from "./storage_function_folders_orphaned.mjs";
import { storage_function_folders_orphaned_baseline_path } from "./storage_function_folders_orphaned_baseline_path.mjs";
export async function storage_function_folders_orphaned_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no stored data is left sitting under the name of a function that has been renamed away.");
  ("This is the one place a rename is not free. A rename is behavior-preserving by construction and so it is the safe edit here, done unasked and auto-approved - but a function handed to ",
    fn_name("local_function_folder"),
    " has its own name written into a folder path on user storage, and a path on a disk follows nothing. The code moves and the data does not.");
  ("So the check runs the other way round from the rest: rather than reading the code and asking what it depends on, it reads the disk and asks whether the repo still answers to what is written there. A name that has stopped answering is data nobody is reading any more.");
  ("Measured against what was already lying about when this was written rather than against zero, because two of the three entries are hand-made copies rather than anything a rename did. The record only shrinks, so clearing one means moving the folder onto the live name or deleting it on purpose.");
  let offenders = await storage_function_folders_orphaned();
  let path = storage_function_folders_orphaned_baseline_path();
  let name_write = fn_name("storage_function_folders_orphaned_baseline_write");
  await baseline_names_gate_generic(
    offenders,
    path,
    "stored data is now sitting under a name nothing answers to - a rename walked away from it, so move the folder onto the new name, or delete it on purpose",
    name_write,
  );
  let r = {
    checked: list_size(offenders),
    added: 0,
    stale: 0,
  };
  return r;
}
