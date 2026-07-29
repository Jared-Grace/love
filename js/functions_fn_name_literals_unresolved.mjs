import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name_arg_get } from "./fn_name_arg_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function functions_fn_name_literals_unresolved() {
  "every spelled-name literal in the repo that names no live function - the string";
  "was written to survive a rename, so a name that resolves to nothing is either a typo";
  "or a rename that got away, and nothing else in the repo would ever say so out loud.";
  "A plain string cannot fail at import time the way a missing import does, so the wrong";
  "name travels all the way to the call that uses it and only then behaves as if absent.";
  let candidates = await functions_names();
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let unresolved = [];
    function lambda({ args }) {
      let first = fn_name_arg_get(args, name);
      let value = property_get(first, "value");
      let known = list_includes(candidates, value);
      if (not(known)) {
        list_add(unresolved, value);
      }
    }
    js_visit_calls_named(ast, fn_name("fn_name"), lambda);
    let any = greater_than(unresolved.length, 0);
    if (any) {
      list_add(offenders, {
        name,
        unresolved,
      });
    }
  }
  return offenders;
}
