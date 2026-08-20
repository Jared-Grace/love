import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { data_folder } from "./data_folder.mjs";
import { function_run } from "./function_run.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function data_loose_paths_named() {
  "Every function that names a file sitting loose in the data folder rather than in one of its rooms, said as the function's name beside the address it gives.";
  "The set is worked out by asking rather than written down. A file in there is reachable only through the one function that spells its address, so asking every address-naming function where it points finds all of them - including the ones whose name says nothing about what they hold, which is exactly the kind a list typed by hand leaves out. One was already found that way.";
  "Only a function that takes no arguments and hands back a word is asked about. One wanting arguments has no single address to give, and refusing to guess at arguments is what keeps this from calling something with values it invented.";
  "Anything that fails when asked is passed over rather than stopping the sweep. What is wanted here is the list of files still loose, and a function that cannot answer is not a file still loose - it is a separate problem, and letting it end the sweep would hide every file this was asked to find.";
  "Loose means directly inside the data folder and not in a room of it, which is two parts to the address and no more. That is the whole test, so a file put into a room stops being listed the moment it moves and this can be asked again after any interruption.";
  arguments_assert(arguments, 0);
  let paths = await functions_names_to_paths();
  let f_names = object_property_names(paths);
  let path_names = list_filter_ends_with(f_names, "_path");
  let data = data_folder();
  let named = [];
  for (let path_fn_name of path_names) {
    async function lambda() {
      let said = await function_run(path_fn_name, []);
      return said;
    }
    let spelled = await catch_null_async(lambda);
    let is_text = equal(typeof spelled, "string");
    if (not(is_text)) {
      continue;
    }
    let parts = text_split(spelled, "/");
    let two = equal(parts.length, 2);
    if (not(two)) {
      continue;
    }
    let first = list_first(parts);
    let inside = equal(first, data);
    if (not(inside)) {
      continue;
    }
    named.push([path_fn_name, spelled]);
  }
  return named;
}
