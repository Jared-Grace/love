import { function_arguments_assert_each_add_lambda } from "./function_arguments_assert_each_add_lambda.mjs";
import { js_node_type_is_new_lambda } from "./js_node_type_is_new_lambda.mjs";
import { example_imports_lambda } from "./example_imports_lambda.mjs";
import { example_auto_lambda } from "./example_auto_lambda.mjs";
import { js_atomize } from "./js_atomize.mjs";
import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
export function example_command_lambda(t) {
  if (t[0] === "atomize") {
    return js_atomize;
  }
  if (t[0] === "prune") {
    return js_imports_unused_remove;
  }
  if (t[0] === "aea") {
    return function_arguments_assert_each_add_lambda(t[2]);
  }
  if (t[0] === "ntp") {
    return js_node_type_is_new_lambda(t[1], t[2]);
  }
  if (t[0] === "imports") {
    return example_imports_lambda();
  }
  if (t[0] === "auto") {
    return example_auto_lambda();
  }
  return null;
}
