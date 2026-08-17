import { arguments_assert } from "./arguments_assert.mjs";
import { js_fold_block_start } from "./js_fold_block_start.mjs";
import { js_fold_block_f_statements } from "./js_fold_block_f_statements.mjs";
import { js_fold_block_partial_is } from "./js_fold_block_partial_is.mjs";
import { js_fold_block_x_name } from "./js_fold_block_x_name.mjs";
import { js_fold_block_escapes } from "./js_fold_block_escapes.mjs";
import { js_fold_call_statement } from "./js_fold_call_statement.mjs";
import { js_fold_body_splice } from "./js_fold_body_splice.mjs";
import { js_fold_plan } from "./js_fold_plan.mjs";
import { js_fold_equivalent_assert } from "./js_fold_equivalent_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function js_fold_block(x_ast, f_ast, f_block) {
  arguments_assert(arguments, 3);
  ("One fold, in one named run of statements, rather than in whatever run a function");
  ("happens to open with.");
  ("Every check that made this safe is here unchanged - the same contiguous match,");
  ("the same escape gate, the same equivalence assert. The only thing that moved is");
  ("which statements are being looked at, and that is safe to move because a name");
  ("declared between braces cannot be read outside them, so a run that is sound to");
  ("collapse under an if is sound for exactly the reason it is sound at the top.");
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
  let r3 = js_fold_block_f_statements(f_block, pattern_sigs, params);
  let f_statements = property_get(r3, "f_statements");
  let target_sigs = property_get(r3, "target_sigs");
  let match = property_get(r3, "match");
  let no_match = property_get(r3, "no_match");
  if (no_match) {
    return null;
  }
  let r2 = js_fold_block_start(match, params, return_local);
  let start = property_get(r2, "start");
  let binding = property_get(r2, "binding");
  let any_unbound = property_get(r2, "any_unbound");
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
