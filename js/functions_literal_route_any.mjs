import { arguments_assert } from "./arguments_assert.mjs";
import { functions_literal_route_generic } from "./functions_literal_route_generic.mjs";
import { function_literal_route_any } from "./function_literal_route_any.mjs";
export async function functions_literal_route_any(
  f_names_comma,
  getter_f_name,
) {
  arguments_assert(arguments, 2);
  ("Points several files at one getter, wherever in each file the word stands,");
  ("naming the files as one comma-joined word.");
  ("This is the shape a field name arrives in. One word keyed in a record that has");
  ("been written to storage is read back by every file that touches that record, and");
  ("each of them writes it in whichever way suited the line it was on - as the name");
  ("of a field in one place and as the argument of a function that takes a field");
  ("name in the next. A sweep that had to be told which of the two each file was");
  ("would stop dead on the first file holding both.");
  let outputs = await functions_literal_route_generic(
    f_names_comma,
    getter_f_name,
    function_literal_route_any,
  );
  return outputs;
}
