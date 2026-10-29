import { not } from "./not.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { functions_outside_irreversible_seams } from "./functions_outside_irreversible_seams.mjs";
import { property_get } from "./property_get.mjs";
import { function_seams_reached_paths_confined_memo } from "./function_seams_reached_paths_confined_memo.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { permission_grant_seam_chains_text } from "./permission_grant_seam_chains_text.mjs";
export async function permission_auto_refusals(unaliased) {
  "Every reason a dispatcher function must keep asking the human when nobody has granted it by name - an empty list means it may run without asking.";
  "IT IS THE GRANT CHECK PLUS ONE QUESTION. Everything that stops a standing grant stops this too; on top, reaching anything outside the repo that git cannot hand back refuses, whether or not the function takes arguments. The grant check lets a fixed deletion through because a person read the name before approving it; here no person reads it, so the deletion itself has to be what asks.";
  let context = await permission_grant_context();
  let refusals = await permission_grant_refusals_context(unaliased, context);
  let b = list_empty_is(refusals);
  if (not(b)) {
    return refusals;
  }
  let seams = functions_outside_irreversible_seams();
  let remembered = property_get(context, "remembered");
  let paths = await function_seams_reached_paths_confined_memo(
    unaliased,
    seams,
    [],
    remembered,
  );
  let reached = object_property_names(paths);
  let none = list_empty_is(reached);
  if (not(none)) {
    list_add(
      refusals,
      unaliased +
        " reaches something outside the repo that git cannot hand back, so a person must see it: " +
        permission_grant_seam_chains_text(paths),
    );
  }
  return refusals;
}
