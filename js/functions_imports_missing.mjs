import { js_imports_missing_specify_set } from "./js_imports_missing_specify_set.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { greater_than } from "./greater_than.mjs";
import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_imports_missing() {
  "every love function that references a real repo function it never imports — a runtime ReferenceError waiting to fire, the class of bug where a body calls one name but the import line named a different symbol";
  "The names to look for are gathered into a set once, before the walk, rather than once for each file walked. They do not change between files, so gathering them again for every file was nine thousand names re-gathered seven thousand times - thirteen seconds of the gate spent building the same set over and over.";
  let candidates = await functions_names();
  let known = list_unique_set(candidates);
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let missing = js_imports_missing_specify_set(ast, known);
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
