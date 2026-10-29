import { arguments_assert } from "./arguments_assert.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { functions_names } from "./functions_names.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { permission_auto_refusals_context } from "./permission_auto_refusals_context.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export async function permission_auto_clean_names() {
  "Every function that holds no grant yet and that the auto check finds nothing wrong with - the set a person could let run unasked in one go. It writes nothing.";
  "A name whose check threw is left out, not let in. A verdict that could not be reached is not a clean one.";
  arguments_assert(arguments, 0);
  let context = await permission_grant_context();
  let all = await functions_names();
  let granted = permission_grant_names();
  let ungranted = list_without_multiple(all, granted);
  let clean = [];
  for (let f_name of ungranted) {
    async function refusals_one() {
      let refusals = await permission_auto_refusals_context(f_name, context);
      return refusals;
    }
    let refusals = await catch_null_async(refusals_one);
    if (null_is(refusals)) {
      continue;
    }
    if (list_empty_is(refusals)) {
      list_add(clean, f_name);
    }
  }
  return clean;
}
