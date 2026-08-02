import { arguments_assert } from "./arguments_assert.mjs";
import { hash_key_getters_all } from "./hash_key_getters_all.mjs";
import { key_getters_frozen_gate_run_generic } from "./key_getters_frozen_gate_run_generic.mjs";
export async function hash_key_getters_frozen_gate_run() {
  "QA gate: every function holding the name of a field of the part of a page address after the hash has been frozen.";
  "All that is said here is which part of the address is meant. The judging is shared with the part after the question mark, which asks the identical question of a different walk.";
  arguments_assert(arguments, 0);
  let pairs = await hash_key_getters_all();
  let r = key_getters_frozen_gate_run_generic(pairs, "the part after the hash");
  return r;
}
