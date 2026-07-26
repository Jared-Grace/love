import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_binding_names_duplicated } from "./js_binding_names_duplicated.mjs";
import { js_binding_names_shadowing } from "./js_binding_names_shadowing.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_shadowing() {
  "every love function whose file breaks one of the two name rules — a name it binds twice, where the second binding shadows the first, or a name that is already a repo function, where the identifier stops meaning that function inside this file. Both are the copy-paste bug: pasted code brings its own declaration, and the lines below it now read a name that no longer points where they think. One parse per file serves both checks.";
  let love = await repo_functions_names("love");
  let candidates = await functions_names();
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let duplicated = js_binding_names_duplicated(ast);
    let shadowed = js_binding_names_shadowing(ast, name, candidates);
    let count = duplicated.length + shadowed.length;
    let any = greater_than(count, 0);
    if (any) {
      list_add(offenders, {
        name,
        duplicated,
        shadowed,
      });
    }
  }
  return offenders;
}
