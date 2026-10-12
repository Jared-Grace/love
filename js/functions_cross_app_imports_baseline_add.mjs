import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { functions_cross_app_imports } from "./functions_cross_app_imports.mjs";
import { functions_cross_app_imports_baseline_path } from "./functions_cross_app_imports_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
export async function functions_cross_app_imports_baseline_add(
  importers_comma,
) {
  arguments_assert(arguments, 1);
  ("$plain importers_comma");
  ("the names of the functions doing the importing, joined by commas. They name functions to look up and nothing that runs.");
  ("Record as known every place a NAMED function reaches into another app, and leave every other one still failing.");
  ("The whole-file writer refuses to grow the record at all, which is right for an app that took a button from the app next door by accident and wrong for an app built out of another on purpose - a read-only twin, say, that draws the same list as its sibling so the list is written once. Such an app reaches into its sibling at least once however it is cut, so nothing but a recorded line lets it stand.");
  ("It takes the importers rather than the pairs, because an importer is one plain name and a pair is two names with an arrow between them, which is not a word a command line hands over whole. Every pair a named importer holds that the record does not is recorded; naming an importer that holds none is refused, because asking for it means the caller believes something about the repo that is not true.");
  ("The reason an app is allowed to reach into another belongs in that app's own prose, where the next reader of it will be, and not here. This is narrower than the whole-file writer would be: what it adds is only ever pairs that are failing right now.");
  let importers = text_split_comma(importers_comma);
  let offending = await functions_cross_app_imports();
  let path = functions_cross_app_imports_baseline_path();
  let known = await baseline_known_read(path);
  let names = [];
  for (let pair of offending) {
    let parts = text_split(pair, " -> ");
    let importer = list_first(parts);
    let named_is = list_includes(importers, importer);
    let new_is = list_includes_not(known, pair);
    if (named_is && new_is) {
      list_add(names, pair);
    }
  }
  list_empty_not_is_assert_json(names, {
    importers,
    hint: "none of these functions reaches into another app in a way the record does not already hold, so there is nothing to record",
  });
  let r = await baseline_known_add(names, path, offending);
  return r;
}
