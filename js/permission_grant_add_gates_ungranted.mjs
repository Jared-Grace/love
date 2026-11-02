import { arguments_assert } from "./arguments_assert.mjs";
import { permission_grant_gates_ungranted } from "./permission_grant_gates_ungranted.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { permission_grant_add_multiple } from "./permission_grant_add_multiple.mjs";
export async function permission_grant_add_gates_ungranted() {
  "The human's line for what the auto sweep has to leave asking: grants every check that holds no grant yet and that the ordinary grant check clears.";
  "★ THE HUMAN RUNNING IT IS THE APPROVAL. The auto sweep answers to a stricter check because nobody reads what it grants; this one answers to the ordinary check, the same one a person granting a single name goes through, and it reports exactly which names it granted.";
  "★ ONE REFUSAL DOES NOT STOP THE REST. The batch adder stops whole on any refused name, so the refused are sorted out first and reported with their reasons.";
  "It writes Claude's own allow rules, so do NOT grant it a standing approval.";
  arguments_assert(arguments, 0);
  let ungranted = await permission_grant_gates_ungranted();
  let context = await permission_grant_context();
  let clean = [];
  let refused = [];
  for (let name of ungranted) {
    let refusals = await permission_grant_refusals_context(name, context);
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
