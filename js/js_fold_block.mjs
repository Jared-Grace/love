import { js_fold_block_partial_is } from "./js_fold_block_partial_is.mjs";
import { js_fold_block_any_unbound } from "./js_fold_block_any_unbound.mjs";
import { js_fold_block_x_name } from "./js_fold_block_x_name.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_fold_match_block } from "./js_fold_match_block.mjs";
import { js_fold_block_escapes } from "./js_fold_block_escapes.mjs";
import { js_fold_call_statement } from "./js_fold_call_statement.mjs";
import { js_fold_body_splice } from "./js_fold_body_splice.mjs";
import { js_fold_plan } from "./js_fold_plan.mjs";
import { js_fold_equivalent_assert } from "./js_fold_equivalent_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_map } from "./list_map.mjs";
import { null_is } from "./null_is.mjs";
export function js_fold_block(x_ast, f_ast, f_block) {
  let partial_is = js_fold_block_partial_is(x_ast);
  if (partial_is) {
    return null;
  }
  let r = js_fold_block_x_name(x_ast);
  let x_name = property_get(r, "x_name");
  let params = property_get(r, "params");
  let return_local = property_get(r, "return_local");
  let pattern_sigs = property_get(r, "pattern_sigs");
  let k = property_get(r, "k");
  let empty = property_get(r, "empty");
  if (empty) {
    return null;
  }
  let f_statements = property_get(f_block, "body");
  let target_sigs = list_map(f_statements, js_atomic_statement_signature);
  let match = js_fold_match_block(pattern_sigs, target_sigs, params);
  let no_match = null_is(match);
  if (no_match) {
    return null;
  }
  let r2 = js_fold_block_any_unbound(match, params, return_local);
  let any_unbound = property_get(r2, "any_unbound");
  let binding = property_get(r2, "binding");
  let start = property_get(r2, "start");
  if (any_unbound) {
    return null;
  }
  let plan = js_fold_plan(binding, params, return_local, target_sigs, start, k);
  let arg_keys = property_get(plan, "arg_keys");
  let output_name = property_get(plan, "output_name");
  let internal_locals = property_get(plan, "internal_locals");
  let escapes = js_fold_block_escapes(f_statements, start, k, internal_locals);
  if (escapes) {
    return null;
  }
  js_fold_equivalent_assert(
    pattern_sigs,
    params,
    return_local,
    target_sigs,
    arg_keys,
    output_name,
    start,
    k,
  );
  let call_statement = js_fold_call_statement(x_name, arg_keys, output_name);
  let new_statements = js_fold_body_splice(
    f_statements,
    start,
    k,
    call_statement,
  );
  property_set(f_block, "body", new_statements);
  return f_ast;
}
