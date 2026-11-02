import { permission_grant_gates_ungranted } from "./permission_grant_gates_ungranted.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { permission_grant_add_multiple } from "./permission_grant_add_multiple.mjs";
export async function permission_grant_add_gates_ungranted_generic(
  refusals_get,
) {
  "Grants every check that holds no grant yet and that the check handed in clears, and reports the rest with their reasons.";
  "★ ONE REFUSAL DOES NOT STOP THE REST. The batch adder stops whole on any refused name, so the refused are sorted out first.";
  "The shared answers are worked out once for the whole sweep, because they cost a walk of the whole repo and asking the single-name check once per name made them fresh every time.";
  let ungranted = await permission_grant_gates_ungranted();
  let context = await permission_grant_context();
  let clean = [];
  let refused = [];
  for (let name of ungranted) {
    let refusals = await refusals_get(name, context);
    let none = list_empty_is(refusals);
    if (none) {
      list_add(clean, name);
    } else {
      list_add(refused, {
        name,
        refusals,
      });
    }
  }
  let added = null;
  let any = list_empty_not_is(clean);
  if (any) {
    let names_comma = list_join_comma(clean);
    added = await permission_grant_add_multiple(names_comma);
  }
  let report = {
    granted: clean,
    refused,
    added,
  };
  return report;
}
