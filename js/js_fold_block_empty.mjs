import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { list_take_less_1 } from "./list_take_less_1.mjs";
import { list_last } from "./list_last.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { list_map_filter } from "./list_map_filter.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_signature_has_callee } from "./js_signature_has_callee.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function js_fold_block_empty(x_ast) {
  arguments_assert(arguments, 1);
  let x_name = js_flo_name(x_ast);
  let x_declaration = js_flo(x_ast);
  let params = js_function_declaration_params_names(x_declaration);
  let x_statements = js_flo_body(x_ast);
  let body_statements = list_take_less_1(x_statements);
  let return_statement = list_last(x_statements);
  let return_argument = js_return_argument_get(return_statement);
  let return_local = property_get_name(return_argument);
  let pattern_sigs = list_map_filter(
    body_statements,
    js_atomic_statement_signature,
    js_signature_has_callee,
  );
  let k = list_size(pattern_sigs);
  let empty = equal(k, 0);
  let r = {
    x_name,
    params,
    return_local,
    pattern_sigs,
    k,
    empty,
  };
  return r;
}
