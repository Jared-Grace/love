import { apps_names_prefixed } from "./apps_names_prefixed.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { function_imports } from "./function_imports.mjs";
import { function_name_app_try } from "./function_name_app_try.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_app_specific_imports_generic(
  near_wanted_is,
  pair_wanted_is,
) {
  arguments_assert(arguments, 2);
  ("Every import in this repo that the caller says it wants, as a line naming the function doing the importing and the name it reached for. The caller says which functions are worth asking about at all, and then which of their imports count.");
  ("Every reading of the rule that shared code depends on no single app is this one walk. What changes between them is only which pairs count: one family against the rest, everything that belongs to no app, or one app reaching into another. Written out separately they were the same file over again, differing in a line, and the walk is the expensive half.");
  ("One hop is enough for all of them, and that is why the set is widened rather than the walk deepened. A road from one kind of function to another has to cross between the two kinds somewhere, and wherever it crosses, the function on the near side is of the first kind and imports one of the second - which is a pair this already offers. So asking every function about its direct imports answers the closure question exactly, at one parse per file instead of a walk per function.");
  ("The near side is asked first and separately so that a reading which only cares about one family still only reads that family. Reading a function's imports means parsing it, which is the whole cost here, and folding the two questions into one would have made the narrowest reading pay for the widest.");
  ("An app is named by the prefix its functions wear, and a function belonging to no app answers with an empty word rather than refusing. So the caller compares words and never has to know how an app is recognised.");
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
    let near_is = near_wanted_is(f_name, app_own);
    if (not(near_is)) {
      continue;
    }
    let imports = await function_imports(f_name);
    for (let imported of imports) {
      let app = function_name_app_try(imported, app_names);
      let wanted_is = pair_wanted_is(f_name, app_own, imported, app);
      if (wanted_is) {
        let pair = text_combine_multiple([f_name, " -> ", imported]);
        list_add(offenders, pair);
      }
    }
  }
  offenders.sort();
  return offenders;
}
