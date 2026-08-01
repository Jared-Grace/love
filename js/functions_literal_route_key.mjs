import { arguments_assert } from "./arguments_assert.mjs";
import { functions_literal_route_generic } from "./functions_literal_route_generic.mjs";
import { function_literal_route_key } from "./function_literal_route_key.mjs";
export async function functions_literal_route_key(
  f_names_comma,
  getter_f_name,
) {
  arguments_assert(arguments, 2);
  ("Points several files' naming of one field at the getter holding that word,");
  ("naming the files as one comma-joined word.");
  ("This is the shape a word kept in a page address arrives in, and it arrives");
  ("several files at a time: one word for the chapter, written at every place that");
  ("reads the address and every place that changes it.");
  let outputs = await functions_literal_route_generic(
    f_names_comma,
    getter_f_name,
    function_literal_route_key,
  );
  return outputs;
}
