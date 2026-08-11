import { arguments_assert } from "./arguments_assert.mjs";
import { function_imports } from "./function_imports.mjs";
import { function_name_app_try } from "./function_name_app_try.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function function_app_own_imports(imported, app_names, app) {
  arguments_assert(arguments, 3);
  let uses = await function_imports(imported);
  let reaches = [];
  for (let used of uses) {
    let app_used = function_name_app_try(used, app_names);
    let own_is = equal(app_used, app);
    if (own_is) {
      list_add(reaches, used);
    }
  }
  return reaches;
}
