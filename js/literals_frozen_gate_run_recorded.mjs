import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function literals_frozen_gate_run_recorded(r2) {
  arguments_assert(arguments, 1);
  let r3 = property_get(r2, "r3");
  let names = property_get(r2, "names");
  let r4 = property_get(r2, "r4");
  let gone = property_get(r4, "gone");
  let fresh = property_get(r4, "fresh");
  let recorded = property_get(r3, "recorded");
  let r = {
    names,
    gone,
    fresh,
    recorded,
  };
  return r;
}
