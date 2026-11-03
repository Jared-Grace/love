import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { functions_auto_seams } from "./functions_auto_seams.mjs";
import { property_get } from "./property_get.mjs";
import { functions_outside_irreversible_fenced } from "./functions_outside_irreversible_fenced.mjs";
import { function_seams_reached_paths_confined_memo } from "./function_seams_reached_paths_confined_memo.mjs";
import { object_empty_is } from "./object_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { permission_grant_seam_chains_text } from "./permission_grant_seam_chains_text.mjs";
import { function_machine_unlisted_paths_memo } from "./function_machine_unlisted_paths_memo.mjs";
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
  let seams = functions_auto_seams();
  let remembered = property_get(context, "remembered");
  let confined = functions_outside_irreversible_fenced();
  let paths = await function_seams_reached_paths_confined_memo(
    unaliased,
    seams,
    confined,
    remembered,
  );
  let none = object_empty_is(paths);
  if (not(none)) {
    list_add(
      refusals,
      unaliased +
        " reaches something outside the repo that git cannot hand back, or writes permission rules, so a person must see it: " +
        permission_grant_seam_chains_text(paths),
    );
  }
  ("The roster above names dangers, so it misses any it does not name: writing a shell startup file and sending a secret to any address both passed it. This second question is the other way round. Everything reached that touches the machine must be on a short list of steps that only read, so a new danger asks by default.");
  let paths_unlisted = await function_machine_unlisted_paths_memo(
    unaliased,
    context,
  );
  let none_unlisted = object_empty_is(paths_unlisted);
  if (not(none_unlisted)) {
    list_add(
      refusals,
      unaliased +
        " reaches a step that touches the machine and is not on the read-only list, so it might change a file or send something, and a person must see it: " +
        permission_grant_seam_chains_text(paths_unlisted),
    );
  }
  return refusals;
}
