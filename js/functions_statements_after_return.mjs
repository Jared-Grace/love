import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_statements_after_return } from "./js_function_statements_after_return.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_statements_after_return() {
  "Every love function carrying work below the line that already left it.";
  "Nothing else here can see this. The body parses, every name in it is bound and imported, and each statement is perfectly good code - it simply never runs, so a function can read like it does the work while doing none of it. That is worse than an empty one: an empty function is visibly unfinished, and this one is not.";
  let love = await repo_functions_names("love");
  let offenders = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let declaration = property_get(parsed, "declaration");
    let after = js_function_statements_after_return(declaration);
    let any = list_empty_not_is(after);
    if (any) {
      list_add(offenders, name);
    }
  }
  return offenders;
}
