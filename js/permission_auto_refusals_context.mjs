import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { functions_outside_irreversible_seams } from "./functions_outside_irreversible_seams.mjs";
import { functions_permission_seams } from "./functions_permission_seams.mjs";
import { functions_command_seams } from "./functions_command_seams.mjs";
import { functions_dispatch_seams } from "./functions_dispatch_seams.mjs";
import { property_get } from "./property_get.mjs";
import { functions_outside_irreversible_fenced } from "./functions_outside_irreversible_fenced.mjs";
import { function_seams_reached_paths_confined_memo } from "./function_seams_reached_paths_confined_memo.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
import { permission_grant_seam_chains_text } from "./permission_grant_seam_chains_text.mjs";
export async function permission_auto_refusals_context(unaliased, context) {
  "Every reason a dispatcher function must keep asking the human when nobody has granted it by name, with the shared answers handed in - an empty list means it may run without asking.";
  "IT IS THE GRANT CHECK PLUS ONE QUESTION. Everything that stops a standing grant stops this too; on top, reaching anything outside the repo that git cannot hand back refuses, whether or not the function takes arguments. The grant check lets a fixed deletion through because a person read the name before approving it; here no person reads it, so the deletion itself has to be what asks.";
  "The shared answers are handed in so a sweep over every function works them out once - they are the slow part.";
  let refusals = await permission_grant_refusals_context(unaliased, context);
  let b = list_empty_is(refusals);
  if (not(b)) {
    return refusals;
  }
  ("Writing permission rules asks too, arguments or none. The grant check lets an argument-free writer through because its rules come from committed source a person can read; nobody reads this one, and a self-grant that could grant a rule writer would approve every grant after it.");
  ("So does running a command or a function by name, with fixed words or not. The grant check lets fixed words through because a person reads them before approving; here nobody does, and a fixed 'shutdown -r' is still a reboot nobody approved.");
  let names = functions_outside_irreversible_seams();
  let names2 = functions_permission_seams();
  let names3 = functions_command_seams();
  let names4 = functions_dispatch_seams();
  let seams = list_concat_multiple([names, names2, names3, names4]);
  let remembered = property_get(context, "remembered");
  let confined = functions_outside_irreversible_fenced();
  let paths = await function_seams_reached_paths_confined_memo(
    unaliased,
    seams,
    confined,
    remembered,
  );
  let reached = object_property_names(paths);
  let none = list_empty_is(reached);
  if (not(none)) {
    list_add(
      refusals,
      unaliased +
        " reaches something outside the repo that git cannot hand back, or writes permission rules, so a person must see it: " +
        permission_grant_seam_chains_text(paths),
    );
  }
  return refusals;
}
