import { arguments_assert } from "./arguments_assert.mjs";
import { data_functions_get } from "./data_functions_get.mjs";
import { js_calls_unawaited } from "./js_calls_unawaited.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
export async function functions_calls_unawaited() {
  arguments_assert(arguments, 0);
  ("Every function in the repo holding a call that has to be waited for and is not, each named beside the calls themselves.");
  ("The record of which functions have to be waited for is fetched once and handed to every reading, rather than being asked for again per file. It is one file read either way, but a reading that fetched it itself would have to be told to, and the sweep hands its reader nothing but the code.");
  let functions = await data_functions_get();
  function reader(ast) {
    let found = js_calls_unawaited(functions, ast);
    return found;
  }
  let offenders = await functions_ast_offenders_generic(reader, "calls");
  return offenders;
}
