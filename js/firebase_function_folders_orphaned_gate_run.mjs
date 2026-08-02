import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { firebase_function_folders_orphaned } from "./firebase_function_folders_orphaned.mjs";
import { firebase_function_folders_orphaned_baseline_path } from "./firebase_function_folders_orphaned_baseline_path.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
export async function firebase_function_folders_orphaned_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: no content in the shared bucket is left sitting under a name the repo has stopped saying.");
  ("The twin of the one that asks this of the machine's own storage, and the one that matters more. A rename can now carry a local folder along with it, because that disk can be reached; nothing here can move a file in the bucket. What is stranded there stays stranded, and the readers are shipped pages that build the address out of the name.");
  ("Deliberately not a member of the repo-wide gate, and the reason is the reason to be careful about adding it. It asks the network, so an unreachable bucket has to answer either by failing - reddening every run for everybody who is offline - or by reporting nothing, which is a check that passes hardest exactly when it can see least. Neither is a choice this can make on its own, so it is left to be run on purpose until somebody decides.");
  ("Measured against what was already up there when this was written rather than against zero. Most of that is pages deployed under a naming convention the repo has since left, which is abandoned rather than broken; the two live namespaces among them name no function on purpose and say so at the site.");
  let offenders = await firebase_function_folders_orphaned();
  let path = firebase_function_folders_orphaned_baseline_path();
  let name_write = fn_name("firebase_function_folders_orphaned_baseline_write");
  await baseline_names_gate_generic(
    offenders,
    path,
    "content in the shared bucket is now under a name nothing answers to - nothing here can move it, so point the live code back at the word already up there, or upload it again under the new one",
    name_write,
  );
  let r = {
    checked: list_size(offenders),
    added: 0,
    stale: 0,
  };
  return r;
}
