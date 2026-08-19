import { function_declaration_or_null } from "./function_declaration_or_null.mjs";
import { js_function_parameter_call_sizes } from "./js_function_parameter_call_sizes.mjs";
import { null_is } from "./null_is.mjs";
import { number_from_text } from "./number_from_text.mjs";
export async function function_parameter_call_sizes(f_name, index) {
  "How many arguments the repo function of this name hands to the function it is given at this place, once for every call it makes to it. Nothing when the repo answers to no such name, and nothing when the function does anything with what it was given other than call it.";
  "The reading works on a tree. This is the same question asked about a function the repo holds by name, which is what a caller looking at a call site has.";
  "Reading the function out of the repo is done next door, because every question asked of a function by name starts with exactly that and it was being written out again here.";
  "The place is read as a number before it is used, because a command line hands every argument over as text, and a place written as text reaches the list reader as something it refuses. A place that already arrived as a number is handed back unchanged, so both callers ask the same way.";
  let declaration = await function_declaration_or_null(f_name);
  let missing = null_is(declaration);
  if (missing) {
    return null;
  }
  let place = number_from_text(index);
  let sizes = js_function_parameter_call_sizes(declaration, place);
  return sizes;
}
