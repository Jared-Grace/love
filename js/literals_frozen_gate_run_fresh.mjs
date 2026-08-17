import { arguments_assert } from "./arguments_assert.mjs";
import { literals_frozen_gate_run_arrived } from "./literals_frozen_gate_run_arrived.mjs";
import { property_get } from "./property_get.mjs";
export async function literals_frozen_gate_run_fresh() {
  arguments_assert(arguments, 0);
  let r3 = await literals_frozen_gate_run_arrived();
  let arrived = property_get(r3, "arrived");
  let moved = property_get(r3, "moved");
  let gone = property_get(r3, "gone");
  let fresh = property_get(r3, "fresh");
  let r = {
    r3,
    arrived,
    moved,
    gone,
    fresh,
  };
  return r;
}
