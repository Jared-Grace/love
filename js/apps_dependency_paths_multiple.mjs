import { text_split_comma } from "./text_split_comma.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { function_dependency_path } from "./function_dependency_path.mjs";
import { function_browser_guarded_is } from "./function_browser_guarded_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
export async function apps_dependency_paths_multiple(targets_comma) {
  "Which apps can reach each of these functions, by what route, and where on that route someone remembered to ask about the browser. An app reaching a Node-only function is only a fault when nothing along the way guards it, so the route and its guards are the answer rather than the yes or no.";
  "Every app is asked about every target in one call, because the finding that matters is which apps differ - one app reaching it and its neighbour not is what says the reach was accidental.";
  let targets = text_split_comma(targets_comma);
  let mains = apps_all_main_fns();
  let found = [];
  for (let target of targets) {
    for (let main of mains) {
      let path = await function_dependency_path(main, target);
      let missing = null_is(path);
      if (missing) {
        continue;
      }
      async function step_guard(f_name) {
        let guarded = await function_browser_guarded_is(f_name);
        let step = {
          f_name,
          guarded,
        };
        return step;
      }
      let steps = await list_map_async(path, step_guard);
      function guarded_is(step) {
        let b = property_get(step, "guarded");
        return b;
      }
      let guarded_steps = list_filter(steps, guarded_is);
      let reach = {
        app: main,
        target,
        guards: list_map_property(guarded_steps, "f_name"),
        path,
      };
      list_add(found, reach);
    }
  }
  return found;
}
