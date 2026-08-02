import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { functions_app_specific_imports } from "./functions_app_specific_imports.mjs";
import { functions_app_specific_imports_baseline_path } from "./functions_app_specific_imports_baseline_path.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_app_specific_imports_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: a function belonging to no app depends on no single app - asked of every such function, not of one prefix family.");
  ("Its narrower sibling asks the same question of js/app_shared_*.mjs alone. That is one family among many that belong to no app: html_, list_, ebible_, g_ and every plain tooling name are shared in exactly the same sense, and an app-specific import in any of them hands that app to everybody downstream just the same. Both gates stay, because they ratchet at different heights - the narrow one holds its family at zero, this one holds the whole repo where it stands.");
  ("One hop over the whole set answers the closure question exactly. A road from a no-app function to an app-specific one has to cross from the first kind to the second somewhere, and the function on the near side of that crossing belongs to no app and imports one that does, which is a pair this reports. So there is no need to walk deeper, and the cost is one parse per file.");
  ("Measured against what the repo already carried rather than against zero. Some of what it holds is structural and will never clear - a gate registry has to name the app gates it registers, and the tooling that deploys apps has to name them. The rest is a leak, and the record only shrinks.");
  let offenders = await functions_app_specific_imports();
  let path = functions_app_specific_imports_baseline_path();
  let name_write = fn_name("functions_app_specific_imports_baseline_write");
  await baseline_names_gate_generic(
    offenders,
    path,
    "these functions belong to no app and reach into one, and did not before - move what they need into shared code, or move the unit into the app it belongs to",
    name_write,
  );
  let r = {
    checked: list_size(offenders),
    added: 0,
    stale: 0,
  };
  return r;
}
