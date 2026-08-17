import { arguments_assert } from "./arguments_assert.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function webpack_watch_deps_refresh(
  a_name,
  app_deps,
  app_deps_get,
) {
  arguments_assert(arguments, 3);
  ("re-index the app that just built: the index was made at startup, so a function written since then belongs to no app and editing it alone would rebuild nothing until a restart");
  let ad = list_find_property_or_null(app_deps, "a_name", a_name);
  let known_not = null_is(ad);
  if (known_not) {
    return;
  }
  let fresh = await app_deps_get(a_name);
  let failed = null_is(fresh);
  if (failed) {
    return;
  }
  let value = property_get(fresh, "deps");
  property_set(ad, "deps", value);
}
