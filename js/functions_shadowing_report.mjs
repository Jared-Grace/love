import { functions_shadowing } from "./functions_shadowing.mjs";
import { shadowing_entries_counts } from "./shadowing_entries_counts.mjs";
import { shadowing_entries_print } from "./shadowing_entries_print.mjs";
export async function functions_shadowing_report() {
  "prints every shadowed name in the repo, one line per function per rule, then the two totals — the reading a person needs before deciding which rule is worth clearing next";
  let offenders = await functions_shadowing();
  shadowing_entries_print(offenders, "");
  let counts = shadowing_entries_counts(offenders);
  return counts;
}
