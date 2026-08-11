import { arguments_assert } from "./arguments_assert.mjs";
import { dispatcher_run_name } from "./dispatcher_run_name.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function permission_settings_local_dangling_remove_dangling_is(
  rule,
  f_names,
  aliases,
) {
  arguments_assert(arguments, 3);
  let name = dispatcher_run_name(rule);
  let unnamed = text_empty_is(name);
  if (unnamed) {
    return false;
  }
  let alive = list_includes(f_names, name);
  if (alive) {
    return false;
  }
  let target = property_or_null(aliases, name);
  let aliased = null_not_is(target);
  if (aliased) {
    return false;
  }
  return true;
}
