import { arguments_assert } from "./arguments_assert.mjs";
import { permission_grant_add_gates_ungranted_generic } from "./permission_grant_add_gates_ungranted_generic.mjs";
import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
export async function permission_grant_add_gates_ungranted() {
  "The human's line for what the auto sweep has to leave asking: grants every check that holds no grant yet and that the ordinary grant check clears.";
  "★ THE HUMAN RUNNING IT IS THE APPROVAL. The auto sweep answers to a stricter check because nobody reads what it grants; this one answers to the ordinary check, the same one a person granting a single name goes through, and it reports exactly which names it granted.";
  "It writes Claude's own allow rules, so do NOT grant it a standing approval.";
  arguments_assert(arguments, 0);
  let report = await permission_grant_add_gates_ungranted_generic(
    permission_grant_refusals_context,
  );
  return report;
}
