import { property_or_null } from "./property_or_null.mjs";
import { permission_run_names } from "./permission_run_names.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { not } from "./not.mjs";
export async function permission_run_names_not_function() {
  "audit: every r.mjs permission rule whose name is not a real function — an alias key, or a name that no longer exists";
  "a permission rule is matched as literal text, so a rule naming an alias grants whatever that alias points to LATER — repointing it silently moves the auto-approval to a different function";
  let names = await permission_run_names();
  let f_names = await functions_names();
  let aliases = await function_aliases();
  function function_named_is(name) {
    let is = list_includes(f_names, name);
    return is;
  }
  function lambda(name) {
    let b = function_named_is(name);
    let is = not(b);
    return is;
  }
  let offenders = list_filter(names, lambda);
  function lambda2(name) {
    let target = property_or_null(aliases, name);
    let kind = target
      ? "alias pointing at " + target
      : "dangling — neither a function nor an alias, so the name is free for anyone to claim";
    let r = {
      name,
      kind,
    };
    return r;
  }
  let described = list_map(offenders, lambda2);
  return described;
}
