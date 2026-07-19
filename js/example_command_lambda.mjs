import { function_arguments_assert_each_add } from "./function_arguments_assert_each_add.mjs";
import { js_node_type_is_new } from "./js_node_type_is_new.mjs";
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
// Dispatch on the demonstrated fn's name (a strong reference), NOT an alias
// string — so renaming an alias can never break which transform an example runs.
export function example_command_lambda(fn_name, args) {
  if (fn_name === js_atomize.name) {
    return js_atomize;
  }
  if (fn_name === js_imports_unused_remove.name) {
    return js_imports_unused_remove;
  }
  if (fn_name === js_imports_paths_fix.name) {
    return js_imports_paths_fix;
  }
  if (fn_name === function_arguments_assert_each_add.name) {
    return function_arguments_assert_each_add_lambda(args[1]);
  }
  if (fn_name === js_node_type_is_new.name) {
    return js_node_type_is_new_lambda(args[0], args[1]);
  }
  if (fn_name === file_imports_repair.name) {
    return example_imports_lambda();
  }
  if (fn_name === js_imports_auto_relative.name) {
    return example_auto_lambda();
  }
  if (fn_name === js_statement_if_test_set.name) {
    return example_slot_expression_set_lambda(
      "IfStatement",
      js_statement_if_test_set,
      args[0],
    );
  }
  if (fn_name === js_return_argument_set.name) {
    return example_slot_expression_set_lambda(
      "ReturnStatement",
      js_return_argument_set,
      args[0],
    );
  }
  return null;
}
