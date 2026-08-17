import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function literals_frozen_gate_run_names(r2) {
  arguments_assert(arguments, 1);
  let fresh = property_get(r2, "fresh");
  let gone = property_get(r2, "gone");
  let moved = property_get(r2, "moved");
  let arrived = property_get(r2, "arrived");
  let r3 = property_get(r2, "r3");
  let names = property_get(r3, "names");
  let r = {
    fresh,
    gone,
    moved,
    arrived,
    r3,
    names,
  };
  return r;
}
