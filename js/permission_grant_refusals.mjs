import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
export async function permission_grant_refusals(unaliased) {
  "every reason this dispatcher function must not be handed an automatic allow rule — an empty list is the clean answer";
  "one name asked on its own has nothing worked out beforehand to draw on, so this makes the shared answers fresh and then asks exactly the question the sweep asks";
  let context = await permission_grant_context();
  let refusals = await permission_grant_refusals_context(unaliased, context);
  return refusals;
}
