import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_table_reading } from "./js_function_declaration_table_reading.mjs";
import { property_get } from "./property_get.mjs";
export async function function_work_table(f_name) {
  arguments_assert(arguments, 1);
  ("How much of the named function is one written-out table, said in the three numbers that decide it.");
  ("The third reading of a body beside counting its lines and following them. Counting says a function is long, following says it is tangled, and this one says whether its length is a table of cases somebody looks things up in - which is long without being anything a reader has to hold.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let reading = js_function_declaration_table_reading(declaration);
  return reading;
}
