import { functions_imports_unexported } from "./functions_imports_unexported.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_imports_unexported_gate_run() {
  "QA gate: fail if any import line asks a neighbouring file for a name that file does not give out. Throws so the dispatcher seam exits nonzero.";
  "It ratchets against nothing, because there were none the day it was written - thirty-two thousand and twenty-five names asked for across the files here, and every one of them written out by the file it was asked of.";
  "With its two neighbours the import line is now watched at every point it can break: that a name read is imported, that the file named is there, and that the file named gives out the name asked of it.";
  let offenders = await functions_imports_unexported();
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let unexported = property_get(offender, "unexported");
    for (let one of unexported) {
      let path = property_get(one, "path");
      let name = property_get(one, "name");
      console.log("UNEXPORTED  " + f_name + "  -> " + name + " from " + path);
    }
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "unexported imports gate: " +
      offenders.length +
      " functions ask a file for a name it does not give out";
    throw new Error(message);
  }
  let result = {
    offenders: 0,
  };
  return result;
}
