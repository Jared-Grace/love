import { arguments_assert } from "./arguments_assert.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { app_carried_guarded } from "./app_carried_guarded.mjs";
import { functions_names_weights } from "./functions_names_weights.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export async function apps_carried_guarded_weights() {
  "Every app entry point there is, ranked by how many bytes of source it carries below an environment check - the whole of where a split could be made, in one reading.";
  "★ IT FINDS ITS OWN SET, and that is the point of it existing at all. Asked one app at a time this is thirty-one runs, and a reader comparing thirty-one answers by eye is the part that gets skipped; asked once it is a ranking, and a ranking says which app to open first.";
  "A byte here is a place to look and never a saving. The subtraction names BOTH halves of every check - the page's branch as well as the build machine's - so a browser-only helper reached only from below one is counted here and is exactly what the page needs. The heaviest app is the one worth reading, not the one worth cutting.";
  "It says nothing about a tree imported at the top of a file and only ever CALLED below a check, because both walks reach that one. That shape has already cost this repo fourteen kilobytes on one page and it has to be found by reading; this narrows where to read, it does not replace it.";
  "It asserts it looked at something before reporting, because an empty answer here and a walk that never started are the same text, and the second one reads as a clean bill of health.";
  arguments_assert(arguments, 0);
  let mains = apps_all_main_fns();
  list_empty_not_is_assert_json(mains, {
    hint: "there are no app entry points to weigh, which is a broken list of apps rather than a repo with nothing below a check in it",
  });
  async function main_entry(main) {
    let guarded = await app_carried_guarded(main);
    let weighed = await functions_names_weights(guarded);
    let sizes = list_map_property(weighed, "size");
    let bytes = list_sum(sizes);
    let entry = {
      main,
      count: list_size(guarded),
      bytes,
      names: weighed,
    };
    return entry;
  }
  let entries = await list_map_unordered_async(mains, main_entry);
  function bytes_of(entry) {
    let bytes = property_get(entry, "bytes");
    return bytes;
  }
  let apps = list_sort_number_mapper_reverse(entries, bytes_of);
  let r = {
    checked: list_size(mains),
    apps,
  };
  return r;
}
