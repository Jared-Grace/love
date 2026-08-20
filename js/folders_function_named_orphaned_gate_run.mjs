import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_walked_generic } from "./baseline_names_gate_walked_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { folders_function_named_orphaned_walked } from "./folders_function_named_orphaned_walked.mjs";
import { folders_function_named_orphaned_baseline_path } from "./folders_function_named_orphaned_baseline_path.mjs";
import { property_get } from "./property_get.mjs";
export async function folders_function_named_orphaned_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no stored data is left sitting under the name of a function that has been renamed away.");
  ("This is the one place a rename is not free. A rename is behavior-preserving by construction and so it is the safe edit here, done unasked and auto-approved - but a function handed to ",
    fn_name("local_function_folder"),
    " has its own name written into a folder path on user storage, and a path on a disk follows nothing. The code moves and the data does not.");
  ("So the check runs the other way round from the rest: rather than reading the code and asking what it depends on, it reads the disk and asks whether the repo still answers to what is written there. A name that has stopped answering is data nobody is reading any more.");
  ("Measured against what was already lying about when this was written rather than against zero, because two of the three entries are hand-made copies rather than anything a rename did. The record only shrinks, so clearing one means moving the folder onto the live name or deleting it on purpose.");
  ("What it says about itself is how many folders it looked at, not how many were wrong. The two are different questions and only the first one can fall to nothing without anybody noticing: this gate reads a disk that may not be mounted, and an unmounted disk reports exactly what a clean one does. Counting the offenders would have printed a nought on both.");
  let told = await folders_function_named_orphaned_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "orphaned");
  let path = folders_function_named_orphaned_baseline_path();
  let name_write = fn_name("folders_function_named_orphaned_baseline_write");
  let r = await baseline_names_gate_walked_generic(
    walked,
    offenders,
    path,
    "stored data is now sitting under a name nothing answers to - a rename walked away from it, so move the folder onto the new name, or delete it on purpose",
    name_write,
  );
  return r;
}
