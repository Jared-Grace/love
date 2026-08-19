import { arguments_assert } from "./arguments_assert.mjs";
import { function_value_route_generic } from "./function_value_route_generic.mjs";
import { js_code_getter_number } from "./js_code_getter_number.mjs";
import { js_number_calls_set } from "./js_number_calls_set.mjs";
export async function function_number_route(f_name, getter_f_name) {
  "Points every place one file writes out a number at the function that hands that number back, wherever in the file the number stands, and repairs the imports.";
  "There is one reading here rather than the two a word gets. A word is written both as the name of a field and as a value, and telling those apart is what the two readings over words are for. A number naming a field is a field spelled with digits and is never something anybody meant to route, so it is simply left alone and there is nothing left to choose between.";
  arguments_assert(arguments, 2);
  let r = await function_value_route_generic(
    f_name,
    getter_f_name,
    js_number_calls_set,
    js_code_getter_number,
  );
  return r;
}
