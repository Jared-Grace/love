import { arguments_assert } from "./arguments_assert.mjs";
import { function_number_route } from "./function_number_route.mjs";
import { functions_literal_route_generic } from "./functions_literal_route_generic.mjs";
export async function functions_number_route(f_names_comma, getter_f_name) {
  "Points several files' writings of one number at the getter holding it, naming the files as one comma-joined word.";
  "A number chosen once and written out in six places is the shape this exists for: every one of them has to move together the day the choice turns out wrong, and until they are named there is nothing recording that they were ever one choice rather than six coincidences.";
  arguments_assert(arguments, 2);
  let outputs = await functions_literal_route_generic(
    f_names_comma,
    getter_f_name,
    function_number_route,
  );
  return outputs;
}
