import { permission_grant_refusals_parameters_object } from "./permission_grant_refusals_parameters_object.mjs";
import { permission_grant_refusals_context_destructive } from "./permission_grant_refusals_context_destructive.mjs";
import { permission_grant_refusals_parameters } from "./permission_grant_refusals_parameters.mjs";
import { permission_grant_seam_chains_text } from "./permission_grant_seam_chains_text.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function permission_grant_refusals_context(unaliased, context) {
  "every reason this dispatcher function must not be handed an automatic allow rule — an empty list is the clean answer";
  "each reason is a whole sentence rather than a code, because the one who reads it is deciding by hand whether to grant anyway";
  "the shared answers arrive already worked out, so asking this about every standing grant in turn costs one pass over the repo instead of one pass per name";
  let live_names = property_get(context, "live");
  let denied = property_get(context, "denied");
  let openers = property_get(context, "openers");
  let remembered = property_get(context, "remembered");
  let parsed = property_get(context, "parsed");
  let refusals = [];
  let live = list_includes(live_names, unaliased);
  if (not(live)) {
    list_add(
      refusals,
      unaliased +
        " is not a live function, so the rule would grant a name that is free for anyone to claim",
    );
    return refusals;
  }
  let r = await permission_grant_refusals_context_destructive(
    denied,
    unaliased,
    refusals,
    openers,
    parsed,
    remembered,
  );
  let destructive = property_get(r, "destructive");
  let delete_paths = property_get(r, "delete_paths");
  let ast = property_get(r, "ast");
  let params = property_get(r, "params");
  if (destructive) {
    list_add(
      refusals,
      unaliased +
        " declares arguments and reaches a function that erases what its argument names, so nothing here can rule out an argument choosing what gets deleted: " +
        permission_grant_seam_chains_text(delete_paths),
    );
  }
  permission_grant_refusals_parameters(ast, params, refusals, unaliased);
  permission_grant_refusals_parameters_object(ast, params, refusals, unaliased);
  return refusals;
}
