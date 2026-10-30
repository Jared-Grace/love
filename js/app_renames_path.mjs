import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { json_extension } from "./json_extension.mjs";
export function app_renames_path() {
  arguments_assert(arguments, 0);
  ("Where every app rename is written down, old short name and new, oldest first. The old address is already out in the world - in bookmarks, in links people sent, in a store listing - so it is kept here for good and every redirect is built from it.");
  let r = "data/given/frozen/" + fn_name("app_renames") + json_extension();
  return r;
}
