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
import { js_operators_to_calls } from "./js_operators_to_calls.mjs";
import { js_identifiers_rename_unused_number_suffixes } from "./js_identifiers_rename_unused_number_suffixes.mjs";
import { js_strings_add_reference_to_fn_names_if_underscore } from "./js_strings_add_reference_to_fn_names_if_underscore.mjs";
export function js_auto_transforms() {
  let transforms = [
    js_operators_to_calls,
    js_await_add,
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
  ];
  return transforms;
  return;
}
