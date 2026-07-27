import { function_shadowing_findings } from "./function_shadowing_findings.mjs";
import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_shadowing() {
  "every love function whose file hides a name: one bound inside a scope that a scope around it already binds, or one that is already a repo function, which stops meaning that function anywhere in the file. Both are the same bug arriving the same way — pasted-in code brings its own declaration, and every line below it that reads the name now gets the pasted value. One parse per file serves both checks.";
  let love = await repo_functions_names("love");
  let candidates = await functions_names();
  let offenders = [];
  for (let name of love) {
    let finding = await function_shadowing_findings(name, candidates);
    let shadows_outer = property_get(finding, "shadows_outer");
    let shadows_function = property_get(finding, "shadows_function");
    let count = shadows_outer.length + shadows_function.length;
    let any = greater_than(count, 0);
    if (any) {
      list_add(offenders, finding);
    }
  }
  return offenders;
}
