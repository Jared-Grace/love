import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_missing_all } from "./js_imports_missing_all.mjs";
import { js_imports_unused } from "./js_imports_unused.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty } from "./list_empty.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
export async function js_imports_verify_assert(ast) {
  "Gate 1: after a transform rewrites a fn, verify its imports still bind every referenced repo fn";
  "(nothing resolvable left unimported) and carry nothing dead (no unused import). Throws with the";
  "offending names otherwise — so a fold that broke a file fails loudly instead of being written and";
  "committed. Verifies the repair worked rather than trusting it.";
  arguments_assert(arguments, 1);
  let missing = await js_imports_missing_all(ast);
  let missing_bad = not(list_empty(missing));
  if (missing_bad) {
    error_json({ missing: missing, hint: "transform left references unimported" });
  }
  let unused_records = js_imports_unused(ast);
  let unused = list_map_property(unused_records, "name");
  let unused_bad = not(list_empty(unused));
  if (unused_bad) {
    error_json({ unused: unused, hint: "transform left dead imports" });
  }
  return;
}
