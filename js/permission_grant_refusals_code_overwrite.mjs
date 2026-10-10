import { arguments_assert } from "./arguments_assert.mjs";
import { functions_code_overwrite_seams } from "./functions_code_overwrite_seams.mjs";
import { function_seams_reached_paths_memo } from "./function_seams_reached_paths_memo.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { permission_grant_seam_chains_text } from "./permission_grant_seam_chains_text.mjs";
export async function permission_grant_refusals_code_overwrite(
  unaliased,
  refusals,
  remembered,
) {
  "Adds the refusal for a function that can write new code over an existing function - approving it approves whatever that code goes on to do.";
  "Refused on any reach, whether or not the function declares arguments: the code written comes from the throwaway folder, not from the call, so no reading of the arguments can bound it.";
  arguments_assert(arguments, 3);
  let seams = functions_code_overwrite_seams();
  let paths = await function_seams_reached_paths_memo(
    unaliased,
    seams,
    remembered,
  );
  let reached = object_property_names(paths);
  let overwrites = list_empty_not_is(reached);
  if (overwrites) {
    list_add(
      refusals,
      unaliased +
        " reaches a function that writes new code over an existing function, so approving it approves whatever any granted function is rewritten to do: " +
        permission_grant_seam_chains_text(paths),
    );
  }
}
