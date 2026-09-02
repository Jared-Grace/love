import { arguments_assert } from "./arguments_assert.mjs";
import { functions_gate_walk_escapes_names_walked } from "./functions_gate_walk_escapes_names_walked.mjs";
import { property_get } from "./property_get.mjs";
import { functions_gate_walk_escapes_baseline_path } from "./functions_gate_walk_escapes_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_gate_walk_escapes_baseline_write() {
  "Rewrite the escaping-walk ratchet from what the repo carries right now. For seeding it once, and for shrinking it after a gate has been taught to catch - never for blessing a new one, which is the one thing the gate exists to refuse.";
  arguments_assert(arguments, 0);
  let found = await functions_gate_walk_escapes_names_walked();
  let known = property_get(found, "names");
  let path = functions_gate_walk_escapes_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these gates wait on a call uncaught inside a loop they are gathering in, and did not before - hand the call to a catcher and collect the refusal as an offender, rather than letting it end the walk",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
