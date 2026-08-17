import { literals_frozen_gate_run_names } from "./literals_frozen_gate_run_names.mjs";
import { literals_frozen_gate_run_fresh } from "./literals_frozen_gate_run_fresh.mjs";
import { literals_frozen_gate_run_r } from "./literals_frozen_gate_run_r.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function literals_frozen_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: every constant whose value has escaped this repo still hands back what the record says it did.");
  ("Merging two spellings is safe to do without asking, and splitting them again later is safe too, because the repair adds a second function rather than changing the first. What that repair cannot reach is a value already written into somebody's browser or bookmarked in an address: change it in place and every future read looks for the new word while every past write still holds the old one.");
  ("So the one edit this watches for is the value moving with the name standing still. It is invisible in every other way - the file still loads, every caller still compiles, and the damage is to data nobody here can see.");
  ("A deliberate change is still allowed and takes one command; what it may not do is happen quietly.");
  let r2 = await literals_frozen_gate_run_fresh();
  let r4 = literals_frozen_gate_run_names(r2);
  let names = property_get(r4, "names");
  let r3 = property_get(r4, "r3");
  let arrived = property_get(r4, "arrived");
  let moved = property_get(r4, "moved");
  let gone = property_get(r4, "gone");
  let fresh = property_get(r4, "fresh");
  let recorded = property_get(r3, "recorded");
  let r = literals_frozen_gate_run_r(
    recorded,
    arrived,
    gone,
    moved,
    fresh,
    names,
  );
  return r;
}
