import { js_function_declaration_param_named_assert } from "./js_function_declaration_param_named_assert.mjs";
export function js_function_declaration_params_named_assert(
  declaration,
  f_name,
  names,
) {
  ("Insist that a function really has every one of the parameters it is about to be asked about, before any of them is removed.");
  ("Deleting a list of parameters is done one at a time, and each one writes the declaration and every call site as it goes. So a name that is wrong stops the run in the middle: the names before it are gone from every file, the names after it are untouched, and the caller is told it refused. A folder left half changed under a refusal is worse than either answer on its own, because nothing afterwards knows which half it is looking at. Measured on a two-name list where the second was a letter short - the first argument was stripped from the call site and the command then threw.");
  ("Asking here rather than inside the loop is the whole of the fix. The question each name would have been asked anyway is asked of all of them first, so the run either does everything or does nothing.");
  for (let name of names) {
    js_function_declaration_param_named_assert(declaration, f_name, name);
  }
}
