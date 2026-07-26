import { permission_run_names } from "./permission_run_names.mjs";
import { permission_grant_refusals } from "./permission_grant_refusals.mjs";
import { list_add } from "./list_add.mjs";
import { greater_than } from "./greater_than.mjs";
export async function permission_grants_flagged() {
  "every function that already holds an allow rule and would not be granted one today, with the reasons — an empty list means every standing grant still passes the check";
  "the check runs once, at the moment the rule is written. a granted function that later gains a parameter naming a place to write, or reaches a command runner through an import added since, keeps its grant with nothing looking at it again. this is what looks again.";
  let names = await permission_run_names();
  let flagged = [];
  for (let name of names) {
    let refusals = await permission_grant_refusals(name);
    let any = greater_than(refusals.length, 0);
    if (any) {
      let entry = {
        name,
        refusals,
      };
      list_add(flagged, entry);
    }
  }
  return flagged;
}
