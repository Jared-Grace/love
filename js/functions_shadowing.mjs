import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_shadowing_names } from "./js_shadowing_names.mjs";
import { js_binding_names_shadowing } from "./js_binding_names_shadowing.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_shadowing() {
  "every love function whose file hides a name: one bound inside a scope that a scope around it already binds, or one that is already a repo function, which stops meaning that function anywhere in the file. Both are the same bug arriving the same way — pasted-in code brings its own declaration, and every line below it that reads the name now gets the pasted value. One parse per file serves both checks.";
  let love = await repo_functions_names("love");
  let candidates = await functions_names();
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let shadows_outer = js_shadowing_names(ast);
    let shadows_function = js_binding_names_shadowing(ast, name, candidates);
    let count = shadows_outer.length + shadows_function.length;
    let any = greater_than(count, 0);
    if (any) {
      list_add(offenders, {
        name,
        shadows_outer,
        shadows_function,
      });
    }
  }
  return offenders;
}
