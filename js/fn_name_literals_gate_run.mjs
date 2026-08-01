import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { functions_fn_name_literals_unresolved } from "./functions_fn_name_literals_unresolved.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function fn_name_literals_gate_run() {
  "QA gate: every spelled function name in the code names a function that exists. Spelling";
  "a name instead of importing it is what keeps a bundle small and a reference rename-safe,";
  "and this is the price of that trade - a plain string cannot fail at import time, so a typo";
  "or a rename that got away survives all the way to the call that uses it. Throws so the";
  "dispatcher seam exits nonzero.";
  let offenders = await functions_fn_name_literals_unresolved();
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let joined = property_list_join_comma(offender, "unresolved");
    console.log("UNRESOLVED  " + name + "  -> " + joined);
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "spelled name gate: " +
      offenders.length +
      " functions spell a name that no function answers to";
    throw new Error(message);
  }
  let result = {
    offenders: 0,
  };
  return result;
}
