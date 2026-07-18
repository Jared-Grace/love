import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_first } from "./list_first.mjs";
// The alias to SHOW for an example — derived from the fn name via the inverted
// alias map, never hard-coded. Fns without an alias return null (show no command).
export function example_alias_derive(fn_name, inverted) {
  let aliases = property_get_or_null(inverted, fn_name);
  if (aliases === null) {
    return null;
  }
  return list_first(aliases);
}
