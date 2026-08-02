import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function baseline_names_ending(ending, missing_hint) {
  "$plain ending";
  "$plain missing_hint";
  arguments_assert(arguments, 2);
  ("Every function in the repo whose name holds the word baseline and ends in the words given, refusing outright when there are none.");
  ("The two questions are asked separately on purpose. A name holding baseline and ending in one of the ratchet endings is the shape every one of them already has, and asking for the ending alone would sweep in every function in the repo carrying that ending while asking for the word alone would sweep the readers, the writers and the paths together.");
  ("The ending is asked for rather than the exact words, so a function named for the file it touches rather than for the ratchet is still found. One writer already is.");
  ("Coming back empty is refused rather than returned. A sweep that visits nothing finds nothing wrong, which is the most reassuring shape a total failure can wear, and the callers here are gates whose green light would then mean nothing at all.");
  ("What to say when there are none is left to whoever asked, because only they know which ending they wanted and therefore where to look when it finds nothing.");
  let paths = await functions_names_to_paths();
  let f_names = object_property_names(paths);
  let about_baselines = list_filter_text_includes(f_names, "baseline");
  let found = list_filter_ends_with(about_baselines, ending);
  list_empty_not_is_assert_json(found, {
    hint: missing_hint,
    ending,
    looked_at: f_names.length,
  });
  return found;
}
