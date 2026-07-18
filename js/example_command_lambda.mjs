import { function_arguments_assert_each_add_lambda } from "./function_arguments_assert_each_add_lambda.mjs";
import { js_node_type_is_new_lambda } from "./js_node_type_is_new_lambda.mjs";
import { example_imports_lambda } from "./example_imports_lambda.mjs";
import { example_auto_lambda } from "./example_auto_lambda.mjs";
export function example_command_lambda(t) {
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
