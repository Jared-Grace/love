import { functions_imports_missing } from "./functions_imports_missing.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export async function function_imports_gate_run() {
  "QA gate: fail if any love function references a repo function it never imports — a guaranteed ReferenceError when that line runs. Throws so the dispatcher seam exits nonzero.";
  let offenders = await functions_imports_missing();
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let missing = property_get(offender, "missing");
    let joined = list_join_comma(missing);
    console.log("MISSING IMPORT  " + name + "  -> " + joined);
  }
  console.log("\noffenders " + offenders.length);
  let any = offenders.length > 0;
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
