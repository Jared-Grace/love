import { permission_run_names } from "./permission_run_names.mjs";
import { functions_names } from "./functions_names.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function permission_run_names_not_function() {
  "audit: every r.mjs permission rule whose name is not a real function — an alias key, or a name that no longer exists";
  ("a permission rule is matched as literal text, so a rule naming an alias grants whatever that alias points to LATER — repointing it silently moves the auto-approval to a different function");
  let names = await permission_run_names();
  let f_names = await functions_names();
  let aliases = await function_aliases();
  function function_named_is(name) {
    let is = list_includes(f_names, name);
    return is;
  }
  let offenders = list_filter(names, function (name) {
    let is = not(function_named_is(name));
    return is;
  });
  let described = list_map(offenders, function (name) {
    let target = property_get(aliases, name);
    let kind = target
      ? "alias pointing at " + target
      : "dangling — neither a function nor an alias, so the name is free for anyone to claim";
    return { name, kind };
  });
  return described;
}
