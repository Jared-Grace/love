import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { function_imports } from "./function_imports.mjs";
import { function_name_app_try } from "./function_name_app_try.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_app_specific_imports() {
  arguments_assert(arguments, 0);
  ("Every place a function belonging to no app imports one that belongs to a single app - each answer naming the importer and the app-specific name it reached for.");
  ("This asks the whole invariant rather than a corner of it. Its predecessor walked js/app_shared_*.mjs alone, which is one family among many that belong to no app: html_, list_, ebible_ and every plain tooling name are shared in exactly the same sense, and an app-specific import in any of them hands that app to everybody downstream just the same.");
  ("One hop is enough here, and that is the whole reason to widen the set rather than to walk deeper. A road from a no-app function to an app-specific one has to cross from the first kind to the second somewhere, and wherever it crosses, the function on the near side belongs to no app and imports one that does - which is a pair this already reports. So asking every no-app function about its direct imports answers the closure question exactly, at one parse per file instead of a walk per function.");
  ("Measured on the day it was written: the narrow check had just reached zero, and this one starts from what the wider set really carries.");
  let names = await folder_read_files("js");
  let app_names = await apps_names_prefixed();
  let offenders = [];
  for (let name of names) {
    let is_source = name.endsWith(".mjs");
    if (not(is_source)) {
      continue;
    }
    let f_name = name.slice(0, -4);
    let app_own = function_name_app_try(f_name, app_names);
    let owned_is = not_equal(app_own, "");
    if (owned_is) {
      continue;
    }
    let imports = await function_imports(f_name);
    for (let imported of imports) {
      let app = function_name_app_try(imported, app_names);
      let reaches_is = not_equal(app, "");
      if (reaches_is) {
        let pair = text_combine_multiple([f_name, " -> ", imported]);
        list_add(offenders, pair);
      }
    }
  }
  offenders.sort();
  return offenders;
}
