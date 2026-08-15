import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_statements_deep } from "./js_function_declaration_statements_deep.mjs";
import { property_get } from "./property_get.mjs";
export async function function_work_statements(f_name) {
  arguments_assert(arguments, 1);
  ("Every line of work the named function holds, at every depth - the prose and the marks and the bare blocks left out.");
  ("Reading a function off the disk and finding the lines of work in it is the opening of every question anybody asks about how big or how tangled it is. Counting them and following them are then two short answers over one list, rather than two functions that each have to know how a file becomes a body.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let deep = js_function_declaration_statements_deep(declaration);
  return deep;
}
