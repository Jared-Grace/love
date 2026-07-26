import { memory_fn_references_unresolved } from "./memory_fn_references_unresolved.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function memory_fn_reference_gate_run() {
  "Gate: every function a memory note points at has to be a function that exists. Marking a name is a promise that it is real, and this is where the promise is kept. Throws so the dispatcher seam exits nonzero.";
  "Nothing here judges the bare names memory is full of - those are narrative, and telling a stale one from a deliberate record of a rename needs a reader, not a rule. Only what somebody marked is held to this.";
  let unresolved = await memory_fn_references_unresolved();
  for (let one of unresolved) {
    let name = property_get(one, "name");
    let note = property_get(one, "note");
    console.log("unresolved  " + name + "  in  " + note);
  }
  console.log("fn reference defects: " + unresolved.length);
  if (list_empty_not_is(unresolved)) {
    throw new Error(
      "memory fn reference gate: " +
        unresolved.length +
        " marked pointers name no live function - was one of them renamed, or is the marker a typo?",
    );
  }
  let r = {
    unresolved: 0,
  };
  return r;
}
