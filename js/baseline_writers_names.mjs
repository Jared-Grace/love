import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_filter_ends_with_any } from "./list_filter_ends_with_any.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function baseline_writers_names() {
  "every function in the repo that puts a ratchet's record on disk, found by what it is called";
  "the two words are asked for separately on purpose. a name holding baseline and ending in write is the shape every one of them already has, and asking for the ending alone would sweep in every writer in the repo while asking for the word alone would sweep in the readers and the paths";
  "the ending is asked for rather than the exact words baseline_write, so a writer named for the file it writes rather than for the ratchet is still found. one already is";
  "coming back empty is refused rather than returned. a sweep that visits nothing finds nothing wrong, which is the most reassuring shape a total failure can wear, and the caller here is a gate whose green light would then mean nothing at all";
  let paths = await functions_names_to_paths();
  let f_names = object_property_names(paths);
  let about_baselines = list_filter_text_includes(f_names, "baseline");
  let writers = list_filter_ends_with_any(about_baselines, ["_write"]);
  list_empty_not_is_assert_json(writers, {
    hint: "no ratchet writer was found at all, so whatever asked has learned nothing - the repo is not this small, so the sweep itself is what has stopped working",
    looked_at: f_names.length,
  });
  return writers;
}
