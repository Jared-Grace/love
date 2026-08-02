import { arguments_assert } from "./arguments_assert.mjs";
import { query_key_getters_all } from "./query_key_getters_all.mjs";
import { key_getters_frozen_gate_run_generic } from "./key_getters_frozen_gate_run_generic.mjs";
export async function query_key_getters_frozen_gate_run() {
  "QA gate: every function holding the name of a field of the query part of a page address has been frozen.";
  "The part after the hash had a full watch over it while this half had one frozen word and nothing looking. That is the gap this closes, and it was a gap of the worst kind: everything about it read as healthy.";
  "All that is said here is which part of the address is meant. The judging is shared with the part after the hash, which asks the identical question of a different walk.";
  arguments_assert(arguments, 0);
  let pairs = await query_key_getters_all();
  let r = key_getters_frozen_gate_run_generic(pairs, "the query part");
  return r;
}
