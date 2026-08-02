import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_filter_ends_with_any } from "./list_filter_ends_with_any.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function baseline_paths_names() {
  arguments_assert(arguments, 0);
  ("Every function in the repo that names where a ratchet's record is kept, found by");
  ("what it is called.");
  ("The sibling of the writers sweep, and it asks its question the same way for the");
  ("same reason: a name holding baseline and ending in path is the shape every one");
  ("of them already has, while the word alone would sweep in the writers and the");
  ("gates, and the ending alone would sweep in every path in the repo.");
  ("Coming back empty is refused rather than returned. A sweep that visits nothing");
  ("finds nothing wrong, which is the most reassuring shape a total failure can");
  ("wear, and what asks here is a gate whose green light would then mean nothing at");
  ("all.");
  let paths = await functions_names_to_paths();
  let f_names = object_property_names(paths);
  let about_baselines = list_filter_text_includes(f_names, "baseline");
  let path_names = list_filter_ends_with_any(about_baselines, ["_path"]);
  list_empty_not_is_assert_json(path_names, {
    hint: "no ratchet record path was found at all, so whatever asked has learned nothing - the repo is not this small, so the sweep itself is what has stopped working",
    looked_at: f_names.length,
  });
  return path_names;
}
