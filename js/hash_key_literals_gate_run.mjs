import { arguments_assert } from "./arguments_assert.mjs";
import { hash_key_literals_all } from "./hash_key_literals_all.mjs";
import { key_literals_gate_run_generic } from "./key_literals_gate_run_generic.mjs";
export async function hash_key_literals_gate_run() {
  "QA gate: no word is written straight into the part of a page address after the hash. Every one of them is held by a function, so it can be frozen.";
  "All that is said here is which part of the address is meant. The judging is shared with the part after the question mark, which asks the identical question of a different walk.";
  arguments_assert(arguments, 0);
  let walked = await hash_key_literals_all();
  let r = key_literals_gate_run_generic(walked, "the part after the hash");
  return r;
}
