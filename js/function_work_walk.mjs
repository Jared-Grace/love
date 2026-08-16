import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_function_declaration_walk_reading } from "./js_function_declaration_walk_reading.mjs";
import { property_get } from "./property_get.mjs";
export async function function_work_walk(f_name) {
  arguments_assert(arguments, 1);
  ("How much of the named function is one walk that cannot be taken apart, said in the two numbers that decide it.");
  ("The fourth reading of a body beside counting its lines, following them, and asking whether they are a table. Counting says a function is long, following says it is tangled, the table asks whether its length is cases to look up, and this one asks whether its length is a walk - one loop carrying a name it keeps re-pointing, which is long in a way no cutting can shorten.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let reading = js_function_declaration_walk_reading(declaration);
  return reading;
}
