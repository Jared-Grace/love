import { fn_name } from "./fn_name.mjs";
import { js_builtin_to_calls } from "./js_builtin_to_calls.mjs";
import { js_returns_empty_last_remove } from "./js_returns_empty_last_remove.mjs";
import { js_log_f_name_add } from "./js_log_f_name_add.mjs";
import { js_destructure_functionize } from "./js_destructure_functionize.mjs";
import { js_assert_arguments_args } from "./js_assert_arguments_args.mjs";
import { js_list_add_combine } from "./js_list_add_combine.mjs";
import { js_atomize } from "./js_atomize.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_dollar } from "./js_dollar.mjs";
import { js_call_fill } from "./js_call_fill.mjs";
import { js_return_atomize } from "./js_return_atomize.mjs";
import { js_atomize_function } from "./js_atomize_function.mjs";
import { js_if_else_if_combine } from "./js_if_else_if_combine.mjs";
import { js_declare_assign_null } from "./js_declare_assign_null.mjs";
import { js_let_add } from "./js_let_add.mjs";
import { js_const_to_let } from "./js_const_to_let.mjs";
import { js_function_id_add } from "./js_function_id_add.mjs";
import { js_arrow_to_function } from "./js_arrow_to_function.mjs";
import { js_if_blockify } from "./js_if_blockify.mjs";
import { js_arrow_blockify } from "./js_arrow_blockify.mjs";
import { js_await_add } from "./js_await_add.mjs";
import { js_calls_to_each } from "./js_calls_to_each.mjs";
import { js_operators_to_calls } from "./js_operators_to_calls.mjs";
import { js_identifiers_rename_unused_number_suffixes } from "./js_identifiers_rename_unused_number_suffixes.mjs";
import { js_strings_add_reference_to_fn_names_if_underscore } from "./js_strings_add_reference_to_fn_names_if_underscore.mjs";
import { js_imports_fix } from "./js_imports_fix.mjs";
export function js_auto_transforms() {
  "Every step the pass that tidies a file runs, in the order it runs them.";
  "Some of these steps ask the repo about a name, and there are two kinds of asking, which fail in two different ways and are answered in two different places.";
  ("A step of the first kind writes a call to a name it already knew - the operator rewrite writes equal and add, the argument-count step writes ",
    fn_name("arguments_assert"),
    ". The name is fixed, so nothing about the file being tidied can make the step ask the wrong question. What can go wrong is that the file binds that name itself, and the call the step writes then lands on the local one. Nothing in the step can see that coming, and nothing needs to: the repo forbids the shadowing outright, in ",
    fn_name("functions_shadowing_operator_gate_run"),
    " and ",
    fn_name("functions_shadowing_function_gate_run"),
    ", both of which stand at zero.");
  ("A step of the second kind reads a name out of the file and asks the repo about that. Here a gate cannot help, because the name is whatever the file happens to say, and because the step has already written its change by the time any gate runs. So each of these steps drops the names the file binds for itself before it asks - ",
    fn_name("js_await_add"),
    " by the scopes around each call, ",
    fn_name("js_calls_to_each"),
    " for the whole tree, ",
    fn_name("js_imports_fix"),
    " afterwards in ",
    fn_name("js_imports_shadowed_remove"),
    ". An import is never such a binding, in all three, because an import of the repo function is the one case where the name does mean what was asked about.");
  (fn_name("js_call_fill"),
    " is of the second kind and deliberately has no such filter. It acts on a statement that is nothing but a name, and a statement of that shape does nothing at all in a running program - so there is no behavior for it to change, and reading the name as the repo's is what the shorthand is for.");
  let transforms = [
    js_operators_to_calls,
    js_builtin_to_calls,
    js_await_add,
    js_calls_to_each,
    js_dollar,
    js_arrow_blockify,
    js_if_blockify,
    js_arrow_to_function,
    js_function_id_add,
    js_let_add,
    js_const_to_let,
    js_declare_assign_null,
    js_if_else_if_combine,
    js_return_atomize,
    js_call_fill,
    js_atomize_function,
    js_outside_move,
    js_atomize,
    js_list_add_combine,
    js_assert_arguments_args,
    js_destructure_functionize,
    js_identifiers_rename_unused_number_suffixes,
    js_log_f_name_add,
    js_strings_add_reference_to_fn_names_if_underscore,
    js_returns_empty_last_remove,
    js_imports_fix,
  ];
  return transforms;
}
