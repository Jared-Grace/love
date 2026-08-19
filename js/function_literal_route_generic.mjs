import { arguments_assert } from "./arguments_assert.mjs";
import { function_value_route_generic } from "./function_value_route_generic.mjs";
import { js_code_getter_literal_or_null } from "./js_code_getter_literal_or_null.mjs";
import { property_get } from "./property_get.mjs";
export async function function_literal_route_generic(
  f_name,
  getter_f_name,
  calls_set,
) {
  "Points one file's spellings of a written word at the function that returns it, and repairs the imports so the file still loads. Which places count as somewhere a call may stand is the reading handed in, because the two answers are opposites and neither is the right one everywhere.";
  "A written word and a written number are routed by the same steps, and the sort of value was the only thing telling them apart. So the sort is handed down and the steps are shared, and this is the half of it that says: a word.";
  arguments_assert(arguments, 3);
  let routed = await function_value_route_generic(
    f_name,
    getter_f_name,
    calls_set,
    js_code_getter_literal_or_null,
  );
  let literal = property_get(routed, "value");
  let sites = property_get(routed, "sites");
  let r = {
    f_name,
    getter_f_name,
    literal,
    sites,
  };
  return r;
}
