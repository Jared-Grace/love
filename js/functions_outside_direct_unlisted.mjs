import { not } from "./not.mjs";
import { functions_outside_direct } from "./functions_outside_direct.mjs";
import { functions_outside_direct_harmless } from "./functions_outside_direct_harmless.mjs";
import { list_difference } from "./list_difference.mjs";
import { functions_auto_seams } from "./functions_auto_seams.mjs";
import { functions_outside_irreversible_fenced } from "./functions_outside_irreversible_fenced.mjs";
import { function_seams_reached_paths_confined_memo } from "./function_seams_reached_paths_confined_memo.mjs";
import { object_empty_is } from "./object_empty_is.mjs";
import { list_map_async_filter_null_not_is } from "./list_map_async_filter_null_not_is.mjs";
export async function functions_outside_direct_unlisted() {
  "The functions that go outside directly and nobody has decided about yet - not refused by the check, because they reach none of what an unseen grant must not reach, and not marked harmless either. Each one is a place the walk is blind and the self-grant would let through.";
  "Refused is asked the way the check asks it, from the same lists and the same fence, so this cannot call a name covered that the check would let through. A name that is itself on a list reaches itself, so being listed and reaching a listed name are one answer rather than two.";
  let direct = await functions_outside_direct();
  let names = functions_outside_direct_harmless();
  let open = list_difference(direct, names);
  let seams = functions_auto_seams();
  let confined = functions_outside_irreversible_fenced();
  let remembered = {};
  async function lambda(name) {
    let paths = await function_seams_reached_paths_confined_memo(
      name,
      seams,
      confined,
      remembered,
    );
    let b = object_empty_is(paths);
    let refused = not(b);
    if (refused) {
      return null;
    }
    return name;
  }
  let unlisted = await list_map_async_filter_null_not_is(open, lambda);
  return unlisted;
}
