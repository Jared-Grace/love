import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_auto_refusals_context } from "./permission_auto_refusals_context.mjs";
export async function permission_auto_refusals(unaliased) {
  "Every reason a dispatcher function must keep asking the human when nobody has granted it by name - an empty list means it may run without asking.";
  "One name asked on its own has nothing worked out beforehand to draw on, so this makes the shared answers fresh and then asks exactly the question the sweep asks.";
  let context = await permission_grant_context();
  let refusals = await permission_auto_refusals_context(unaliased, context);
  return refusals;
}
