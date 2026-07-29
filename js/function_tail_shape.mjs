import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_function_declaration_statements_doing } from "./js_function_declaration_statements_doing.mjs";
import { js_function_marker_call_not_is } from "./js_function_marker_call_not_is.mjs";
import { js_statements_shape } from "./js_statements_shape.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export async function function_tail_shape(f_name, size) {
  arguments_assert(arguments, 2);
  ("What the named function does in its last few working statements, with its own");
  ("name, its private names and its prose taken away.");
  ("A function with less work in it than that has no tail of this length, and");
  ("answers with nothing rather than with all of itself - a short function is not a");
  ("shared ending, and letting it count as one would group every two-line function");
  ("in the repo together.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let doing = js_function_declaration_statements_doing(declaration);
  let working = list_filter(doing, js_function_marker_call_not_is);
  let count = list_size(working);
  let short_is = less_than(count, size);
  if (short_is) {
    let nothing = "";
    return nothing;
  }
  let own = js_function_declaration_name(declaration);
  let params = js_function_declaration_params_names(declaration);
  let locals = js_declared_names(declaration);
  let named = list_concat(params, locals);
  let personal = list_concat([own], named);
  let skipped = subtract(count, size);
  let tail = list_skip(working, skipped);
  let shape = js_statements_shape(tail, personal);
  return shape;
}
