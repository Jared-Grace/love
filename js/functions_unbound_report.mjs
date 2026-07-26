import { functions_unbound_names } from "./functions_unbound_names.mjs";
import { unbound_entries_print } from "./unbound_entries_print.mjs";
export async function functions_unbound_report() {
  "prints every name the repo reads without binding, one line per function, then the total - the reading a person needs before deciding which one is worth clearing next";
  let offenders = await functions_unbound_names();
  unbound_entries_print(offenders, "");
  let r = offenders.length;
  return r;
}
