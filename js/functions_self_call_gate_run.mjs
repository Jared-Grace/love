import { functions_self_call_forever } from "./functions_self_call_forever.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_self_call_gate_run() {
  "QA gate: fail if any love function calls itself at its own top level with the arguments it was handed. That runs out of stack the first time anything reaches it, and the one instance the repo carried sat on a path nothing reaches yet, so nothing ever failed to show it.";
  "There is no baseline beside this gate and there should not be one. It starts at nothing, every recursive function in the repo already differs from the shape it looks for, and a list to add things to would turn the one red light into a habit of writing them down. Throws so the dispatcher seam exits nonzero.";
  let offenders = await functions_self_call_forever();
  for (let name of offenders) {
    console.log("CALLS ITSELF FOREVER  " + name);
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "self call gate: " +
      offenders.length +
      " functions call themselves with what they were handed";
    throw new Error(message);
  }
  let result = {
    offenders: 0,
  };
  return result;
}
