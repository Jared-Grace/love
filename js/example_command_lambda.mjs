import { fn_name } from "./fn_name.mjs";
import { js_statement_wrap_if } from "./js_statement_wrap_if.mjs";
import { example_wrap_if_lambda } from "./example_wrap_if_lambda.mjs";
import { equal } from "./equal.mjs";
import { function_arguments_assert_each_add } from "./function_arguments_assert_each_add.mjs";
import { js_node_type_is_new } from "./js_node_type_is_new.mjs";
import { function_identifier_replace } from "./function_identifier_replace.mjs";
import { function_identifier_replace_lambda } from "./function_identifier_replace_lambda.mjs";
import { file_imports_repair } from "./file_imports_repair.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
import { js_atomize } from "./js_atomize.mjs";
import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
import { js_imports_paths_fix } from "./js_imports_paths_fix.mjs";
import { function_arguments_assert_each_add_lambda } from "./function_arguments_assert_each_add_lambda.mjs";
import { js_node_type_is_new_lambda } from "./js_node_type_is_new_lambda.mjs";
import { example_imports_lambda } from "./example_imports_lambda.mjs";
import { example_auto_lambda } from "./example_auto_lambda.mjs";
import { js_statement_if_test_set } from "./js_statement_if_test_set.mjs";
import { js_return_argument_set } from "./js_return_argument_set.mjs";
import { example_slot_expression_set_lambda } from "./example_slot_expression_set_lambda.mjs";
import { js_fold } from "./js_fold.mjs";
import { js_fold_all } from "./js_fold_all.mjs";
import { js_fold_auto } from "./js_fold_auto.mjs";
import { example_fold_lambda } from "./example_fold_lambda.mjs";
import { example_fold_auto_lambda } from "./example_fold_auto_lambda.mjs";
import { js_block_body_add } from "./js_block_body_add.mjs";
import { js_block_body_add_first } from "./js_block_body_add_first.mjs";
import { example_block_body_add_lambda } from "./example_block_body_add_lambda.mjs";
export function example_command_lambda(fn_name, args) {
  if (equal(fn_name, js_atomize.name)) {
    return js_atomize;
  }
  if (equal(fn_name, js_imports_unused_remove.name)) {
    return js_imports_unused_remove;
  }
  if (equal(fn_name, js_imports_paths_fix.name)) {
    return js_imports_paths_fix;
  }
  if (equal(fn_name, function_arguments_assert_each_add.name)) {
    let lambda = function_arguments_assert_each_add_lambda(args[1]);
    return lambda;
  }
  if (equal(fn_name, js_node_type_is_new.name)) {
    let lambda2 = js_node_type_is_new_lambda(args[0], args[1]);
    return lambda2;
  }
  if (equal(fn_name, function_identifier_replace.name)) {
    let lambda22 = function_identifier_replace_lambda(args[0], args[1]);
    return lambda22;
  }
  if (equal(fn_name, file_imports_repair.name)) {
    let lambda3 = example_imports_lambda();
    return lambda3;
  }
  if (equal(fn_name, js_imports_auto_relative.name)) {
    let lambda4 = example_auto_lambda();
    return lambda4;
  }
  if (equal(fn_name, js_statement_if_test_set.name)) {
    let lambda5 = example_slot_expression_set_lambda(
      "IfStatement",
      js_statement_if_test_set,
      args[0],
    );
    return lambda5;
  }
  if (equal(fn_name, js_return_argument_set.name)) {
    let lambda6 = example_slot_expression_set_lambda(
      "ReturnStatement",
      js_return_argument_set,
      args[0],
    );
    return lambda6;
  }
  if (equal(fn_name, js_fold.name)) {
    let lambda7 = example_fold_lambda(args[0]);
    return lambda7;
  }
  if (equal(fn_name, js_fold_all.name)) {
    let lambda8 = example_fold_lambda(args[0]);
    return lambda8;
  }
  if (equal(fn_name, js_fold_auto.name)) {
    let lambda9 = example_fold_auto_lambda(args);
    return lambda9;
  }
  if (equal(fn_name, js_statement_wrap_if.name)) {
    let lambda10 = example_wrap_if_lambda(args[0]);
    return lambda10;
  }
  if (equal(fn_name, js_block_body_add.name)) {
    let lambda11 = example_block_body_add_lambda(
      args[0],
      args[1],
      args[2],
      js_block_body_add,
    );
    return lambda11;
  }
  if (equal(fn_name, js_block_body_add_first.name)) {
    let lambda12 = example_block_body_add_lambda(
      args[0],
      args[1],
      args[2],
      js_block_body_add_first,
    );
    return lambda12;
  }
  if (equal(fn_name, js_fn_name_references_to_calls.name)) {
    let lambda13 = example_fn_name_references_lambda();
    return lambda13;
  }
  return null;
}
