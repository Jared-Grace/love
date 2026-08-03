import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_statements_deep } from "./js_function_declaration_statements_deep.mjs";
import { list_size } from "./list_size.mjs";
export async function function_work_size(f_name) {
  arguments_assert(arguments, 1);
  ("How many lines of work the named function holds, counted at every depth.");
  ("This is the one number a function can be too big by. Bytes would count a long name against a function that reads perfectly, and top-level statements would let a function hide twenty lines inside one loop; a count of the work at every depth is what a reader actually has to hold in their head.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let deep = js_function_declaration_statements_deep(declaration);
  let size = list_size(deep);
  return size;
}
