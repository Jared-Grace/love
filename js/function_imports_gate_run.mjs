import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { greater_than } from "./greater_than.mjs";
import { functions_imports_missing } from "./functions_imports_missing.mjs";
import { property_get } from "./property_get.mjs";
export async function function_imports_gate_run() {
  "QA gate: fail if any love function references a repo function it never imports — a guaranteed ReferenceError when that line runs. Throws so the dispatcher seam exits nonzero.";
  "This is one half of the free-name question, the half where the free name does name a real function and so has a repair. The other half — a free name that names nothing at all, which is the same error with no import to add — is the unbound gate's, and between them every free name in the repo is accounted for.";
  let offenders = await functions_imports_missing();
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let joined = property_list_join_comma(offender, "missing");
    console.log("MISSING IMPORT  " + name + "  -> " + joined);
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "imports gate: " +
      offenders.length +
      " functions reference an unimported repo function";
    throw new Error(message);
  }
  let result = {
    offenders: 0,
  };
  return result;
}
