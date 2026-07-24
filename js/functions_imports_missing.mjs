import { greater_than } from "./greater_than.mjs";
import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_free_names } from "./js_free_names.mjs";
import { list_intersect } from "./list_intersect.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_imports_missing() {
  "every love function that references a real repo function it never imports — a runtime ReferenceError waiting to fire, the class of bug where a body calls one name but the import line named a different symbol";
  let candidates = await functions_names();
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let free = js_free_names(ast);
    let missing = list_intersect(free, candidates);
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
