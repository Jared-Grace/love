import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_statements_doing } from "./js_function_declaration_statements_doing.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_function_marker_call_not_is } from "./js_function_marker_call_not_is.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_statements_shape } from "./js_statements_shape.mjs";
export async function function_run_shape_generic(f_name, size, fn_take) {
  arguments_assert(arguments, 3);
  ("What the named function does in a run of its working statements, with its own");
  ("name, its private names and its prose taken away - the taker says which run.");
  ("A function with less work in it than that has no run of this length, and");
  ("answers with nothing rather than with all of itself - a short function is not a");
  ("shared run, and letting it count as one would group every two-line function in");
  ("the repo together.");
  ("Which end the run is taken from is the only difference between asking about a");
  ("shared ending and asking about a shared opening, so it is the only thing a");
  ("caller passes - everything else here would otherwise have been written twice,");
  ("which the gate over shared openings would have caught in its own author.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let doing = js_function_declaration_statements_doing(declaration);
  let working = list_filter(doing, js_function_marker_call_not_is);
  let short_is = list_size_less_than_value(working, size);
  if (short_is) {
    let nothing = "";
    return nothing;
  }
  let own = js_function_declaration_name(declaration);
  let params = js_function_declaration_params_names(declaration);
  let locals = js_declared_names(declaration);
  let named = list_concat(params, locals);
  let personal = list_concat([own], named);
  let run = fn_take(working, size);
  let shape = js_statements_shape(run, personal);
  return shape;
}
