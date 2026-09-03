import { arguments_assert } from "./arguments_assert.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { html_regenerate_stable_page } from "./html_regenerate_stable_page.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
export async function qa_stage_pages_unsettled(folder, file_names) {
  "$plain folder";
  "$plain file_names";
  "Every generated page among the pieces one build has just put in a stage folder that would not settle if it were written out again, answered page by page.";
  "Settling means parse the page, build it, parse that, and the second answer is the first. A page without that property drifts a little further every time anything writes it out, and the drift is invisible in the moment because each single pass still looks like a page. Measured 2026-08-23, every page failed it: reading a page back handed the wrapped body over as though the app had written it, so building it wrapped it again, and one pass turned 47 lines into 80 while the next turned those into 113.";
  "It is handed the names of the pieces rather than reading the folder, for the same reason its neighbour is: the folder holds every app that has ever been moved up, and a page belonging to somebody else's app is not this run's to refuse.";
  "A page there is no question to ask of is not an offender. A kept copy from a dated release, a page nothing generated, a body no longer in the shape a generated page has - each of those comes back saying which it was, and none of them is a fault in what this run built.";
  arguments_assert(arguments, 2);
  let suffix = html_extension();
  let pages = list_filter_ends_with(file_names, suffix);
  function name_path(name) {
    let joined = path_join([folder, name]);
    return joined;
  }
  let paths = list_map(pages, name_path);
  let judged = await list_map_unordered_async(
    paths,
    html_regenerate_stable_page,
  );
  let offenders = list_filter_property(judged, "settled", false);
  return offenders;
}
