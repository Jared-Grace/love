import { examples_data_json } from "./examples_data_json.mjs";
import { examples_data_paths } from "./examples_data_paths.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { equal } from "./equal.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function examples_data_stale() {
  "The written copies of the corpus that no longer say what the corpus says. A file that cannot be read at all counts as stale rather than as an error, because the answer wanted here is the same either way - write it again.";
  "The corpus is read once and compared against both copies, since reading it is the whole cost here and asking twice would only make the check slower at saying the same thing.";
  let expected = await examples_data_json();
  let paths = examples_data_paths();
  async function checked_get(path) {
    let actual = await file_read_try(path);
    let fresh = equal(actual, expected);
    let checked = {
      path,
      fresh,
    };
    return checked;
  }
  let checked = await list_map_async(paths, checked_get);
  let stale = list_filter_property_not(checked, "fresh", true);
  let stale_paths = list_map_property(stale, "path");
  return stale_paths;
}
