import { function_exists } from "./function_exists.mjs";
import { function_parse_strict_declaration } from "./function_parse_strict_declaration.mjs";
import { js_function_parameter_call_sizes } from "./js_function_parameter_call_sizes.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function function_parameter_call_sizes(f_name, index) {
  "How many arguments the repo function of this name hands to the function it is given at this place, once for every call it makes to it. Nothing when the repo answers to no such name, and nothing when the function does anything with what it was given other than call it.";
  "The reading works on a tree. This is the same question asked about a function the repo holds by name, which is what a caller looking at a call site has.";
  let r = await function_exists(f_name);
  let exists = property_get(r, "exists");
  if (not(exists)) {
    return null;
  }
  let parsed = await function_parse_strict_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let sizes = js_function_parameter_call_sizes(declaration, index);
  return sizes;
}
