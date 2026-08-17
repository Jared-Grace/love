import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_gate_run_fresh } from "./literals_frozen_gate_run_fresh.mjs";
import { literals_frozen_gate_run_names } from "./literals_frozen_gate_run_names.mjs";
import { property_get } from "./property_get.mjs";
export async function literals_frozen_gate_run_moved() {
  arguments_assert(arguments, 0);
  let r2 = await literals_frozen_gate_run_fresh();
  let r4 = literals_frozen_gate_run_names(r2);
  let names = property_get(r4, "names");
  let r3 = property_get(r4, "r3");
  let arrived = property_get(r4, "arrived");
  let moved = property_get(r4, "moved");
  let r = {
    r4,
    names,
    r3,
    arrived,
    moved,
  };
  return r;
}
