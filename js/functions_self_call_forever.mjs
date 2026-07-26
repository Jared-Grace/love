import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_self_call_unconditional_is } from "./js_function_self_call_unconditional_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_self_call_forever() {
  "Every love function that calls itself at its own top level with the very things it was handed - a stack overflow the first time anything reaches it.";
  "No existing check can see this one. The import gate catches a body naming a function it never imported, and a function never imports itself, so the fault produces a file that reads as correct everywhere else.";
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let declaration = property_get(parsed, "declaration");
    let forever = js_function_self_call_unconditional_is(declaration);
    if (forever) {
      list_add(offenders, name);
    }
  }
  return offenders;
}
