import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_literals_used } from "./js_literals_used.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { number_is } from "./number_is.mjs";
export async function function_numbers_used(f_name) {
  "The different numbers a named function writes into itself, each one once however many times the function spells it.";
  "Once each, because a function that writes the same figure in three places has still made one decision, and counting it three times would make a function that repeats itself look like three functions agreeing.";
  arguments_assert(arguments, 1);
  let ast = await function_ast(f_name);
  let used = js_literals_used(ast);
  let values = list_map_unique(used, js_literal_value_get);
  let r = list_filter(values, number_is);
  return r;
}
