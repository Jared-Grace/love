import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { list_last } from "./list_last.mjs";
import { list_map } from "./list_map.mjs";
import { list_any } from "./list_any.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
export function js_fn_fold_pattern(fn_ast) {
  arguments_assert(arguments, 1);
  ("Discovery layer: reduce a fn to the index entry the suggester matches against, or null if the fn");
  ("is not foldable-shaped. Foldable-shape = at least two atomic call-declaration statements followed");
  ("by a bare return of an identifier (the same straight-line pure shape the fold rewrites). Async,");
  ("branches, loops, and one-liner wrappers all fail the shape check and are excluded as noise.");
  let declaration = js_flo(fn_ast);
  let statements = js_flo_body(fn_ast);
  let statement_count = list_size(statements);
  let too_small = less_than(statement_count, 3);
  if (too_small) {
    return null;
  }
  let return_statement = list_last(statements);
  let not_return = js_node_type_not_is(return_statement, "ReturnStatement");
  if (not_return) {
    return null;
  }
  let return_argument = js_return_argument_get(return_statement);
  let not_identifier = js_identifier_not_is(return_argument);
  if (not_identifier) {
    return null;
  }
  let k = subtract(statement_count, 1);
  let pattern_statements = list_take(statements, k);
  let pattern_sigs = list_map(
    pattern_statements,
    js_atomic_statement_signature,
  );
  function callee_missing(sig) {
    let callee = property_get(sig, "callee");
    let missing = null_is(callee);
    return missing;
  }
  let not_all_calls = list_any(pattern_sigs, callee_missing);
  if (not_all_calls) {
    return null;
  }
  let defined_name = js_flo_name(fn_ast);
  let params = js_function_declaration_params_names(declaration);
  let pattern = {
    fn_name: defined_name,
    params: params,
    pattern_sigs: pattern_sigs,
  };
  return pattern;
}
