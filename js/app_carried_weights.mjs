import { arguments_assert } from "./arguments_assert.mjs";
import { functions_reachable_carried } from "./functions_reachable_carried.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { file_size } from "./file_size.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function app_carried_weights(a_main) {
  "$plain a_main";
  "Every function one app's bundle holds, heaviest source first.";
  "★ A CEILING SAYS A PAGE IS TOO BIG AND NAMES NOTHING TO CUT. The reader is left walking the imports by hand looking for something fat, and the thing actually costing the bytes is rarely the file anybody suspects. This turns the one number into a list somebody can act on.";
  "The measure is the source file's own bytes, not the share it takes in the built page. Those differ - a bundler renames, drops what nobody reads, and writes its own wrapping around each one - so a figure here is a guide to where to look rather than a promise of what a cut would save. The alternative was reading the bundler's own accounting, which needs a build to have happened and answers only about the app already built; this answers about any entry point at all, in a second.";
  "Prose weighs the same as work. A function carrying several paragraphs about why it exists is heavy here and yet nearly free once built, because a bundler keeps the strings but the page never reads them - so a fat file near the top is a reason to open it, never by itself a reason to cut it.";
  arguments_assert(arguments, 1);
  let mains = [a_main];
  let carried = await functions_reachable_carried(mains);
  list_empty_not_is_assert_json(carried, {
    a_main,
    hint: "this entry point reached nothing at all, so nothing was weighed - the name is the thing to look at, not the empty answer",
  });
  let sorted = await functions_names_weights(carried);
  return sorted;
}
