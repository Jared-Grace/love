import { arguments_assert } from "./arguments_assert.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { js_atomic_statement_signature } from "./js_atomic_statement_signature.mjs";
import { js_fold_match_block } from "./js_fold_match_block.mjs";
import { js_fold_block_escapes } from "./js_fold_block_escapes.mjs";
import { js_fold_call_statement } from "./js_fold_call_statement.mjs";
import { js_fold_body_splice } from "./js_fold_body_splice.mjs";
import { js_fold_plan } from "./js_fold_plan.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { property_set } from "./property_set.mjs";
import { list_map } from "./list_map.mjs";
import { list_take } from "./list_take.mjs";
import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
export function js_fold(x_ast, f_ast) {
  // Brick 5a: fold the first contiguous occurrence of pure fn x's body inside F into a call to x.
  // Pure composition of bricks 1-4: extract x's pattern (params, body-sigs minus the return, and the
  // return-output local), match it as a contiguous block in F (js_fold_match_block), verify no
  // internal local escapes (js_fold_block_escapes), then rewrite the block to `let out = x(args)`.
  // Mutates and returns f_ast when a sound fold applies; returns null when none does.
  arguments_assert(arguments, 2);
  let x_name = js_flo_name(x_ast);
  let x_declaration = js_flo(x_ast);
  let params = js_function_declaration_params_names(x_declaration);
  let x_statements = js_flo_body(x_ast);
  let statement_count = list_size(x_statements);
  let k = subtract(statement_count, 1);
  let pattern_statements = list_take(x_statements, k);
  let return_statement = list_last(x_statements);
  let return_argument = js_return_argument_get(return_statement);
  let return_local = property_get_name(return_argument);
  let pattern_sigs = list_map(pattern_statements, js_atomic_statement_signature);

  let f_declaration = js_flo(f_ast);
  let f_block = property_get(f_declaration, "body");
  let f_statements = property_get(f_block, "body");
  let target_sigs = list_map(f_statements, js_atomic_statement_signature);

  let match = js_fold_match_block(pattern_sigs, target_sigs, params);
  let no_match = null_is(match);
  if (no_match) {
    return null;
  }
  let start = property_get(match, "start");
  let binding = property_get(match, "binding");

  let plan = js_fold_plan(binding, params, return_local, target_sigs, start, k);
  let arg_keys = property_get(plan, "arg_keys");
  let output_name = property_get(plan, "output_name");
  let internal_locals = property_get(plan, "internal_locals");

  let escapes = js_fold_block_escapes(f_statements, start, k, internal_locals);
  if (escapes) {
    return null;
  }

  let call_statement = js_fold_call_statement(x_name, arg_keys, output_name);
  let new_statements = js_fold_body_splice(f_statements, start, k, call_statement);
  property_set(f_block, "body", new_statements);
  return f_ast;
}
