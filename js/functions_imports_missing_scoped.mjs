import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_free_names_scoped } from "./js_free_names_scoped.mjs";
import { js_imports_missing_specify } from "./js_imports_missing_specify.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_difference } from "./list_difference.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_imports_missing_scoped() {
  "the gap between the two gates that together were said to account for every free name. A mention that no scope around it binds, spelled like a real repo function, is reported by neither: the missing-import gate reads names file-wide, so a name bound in any inner scope counts as covered everywhere and the mention outside it is never seen; the unbound gate does read mention by mention, but it keeps only names no function answers to, so it subtracts this one away. What is left over is a name that is either an import nobody wrote or a mention standing outside the scope that binds it, and both of those throw the moment the line runs.";
  "The name-based gate's own offenders are taken out, so what this returns is only what that gate cannot see. Today that subtraction removes nothing, because that gate is green; it is here so the two readings cannot start counting the same function twice.";
  let candidates = await functions_names();
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let free = js_free_names_scoped(ast);
    let named = list_intersection(free, candidates);
    let seen = js_imports_missing_specify(ast, candidates);
    let missing = list_difference(named, seen);
    let any = greater_than(missing.length, 0);
    if (any) {
      list_add(offenders, {
        name,
        missing,
      });
    }
  }
  return offenders;
}
