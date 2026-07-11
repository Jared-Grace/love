import { js_log_f_name_add } from "../../../love/public/src/js_log_f_name_add.mjs";
import { js_destructure_functionize } from "../../../love/public/src/js_destructure_functionize.mjs";
import { js_assert_arguments_args } from "../../../love/public/src/js_assert_arguments_args.mjs";
import { js_assign_combine } from "../../../love/public/src/js_assign_combine.mjs";
import { js_atomize } from "../../../love/public/src/js_atomize.mjs";
import { js_outside_move } from "../../../love/public/src/js_outside_move.mjs";
import { js_dollar } from "../../../love/public/src/js_dollar.mjs";
import { js_call_fill } from "../../../love/public/src/js_call_fill.mjs";
import { js_return_atomize } from "../../../love/public/src/js_return_atomize.mjs";
import { js_atomize_function } from "../../../love/public/src/js_atomize_function.mjs";
import { js_if_else_if_combine } from "../../../love/public/src/js_if_else_if_combine.mjs";
import { js_declare_assign_null } from "../../../love/public/src/js_declare_assign_null.mjs";
import { js_let_add } from "../../../love/public/src/js_let_add.mjs";
import { js_const_to_let } from "../../../love/public/src/js_const_to_let.mjs";
import { js_function_id_add } from "../../../love/public/src/js_function_id_add.mjs";
import { js_arrow_to_function } from "../../../love/public/src/js_arrow_to_function.mjs";
import { js_if_blockify } from "../../../love/public/src/js_if_blockify.mjs";
import { js_arrow_blockify } from "../../../love/public/src/js_arrow_blockify.mjs";
import { js_await_add } from "../../../love/public/src/js_await_add.mjs";
import { js_bang_to_not } from "../../../love/public/src/js_bang_to_not.mjs";
import { js_triple_equal_to_equal } from "../../../love/public/src/js_triple_equal_to_equal.mjs";
import { js_minus_to_subtract } from "../../../love/public/src/js_minus_to_subtract.mjs";
import { js_asterisk_to_multiply } from "../../../love/public/src/js_asterisk_to_multiply.mjs";
import { js_division_to_divide } from "../../../love/public/src/js_division_to_divide.mjs";
import { js_percent_to_modulo } from "../../../love/public/src/js_percent_to_modulo.mjs";
import { js_double_asterisk_to_exponent } from "../../../love/public/src/js_double_asterisk_to_exponent.mjs";
import { js_less_than_to_call } from "../../../love/public/src/js_less_than_to_call.mjs";
import { js_greater_than_to_call } from "../../../love/public/src/js_greater_than_to_call.mjs";
import { js_less_than_equal_to_call } from "../../../love/public/src/js_less_than_equal_to_call.mjs";
import { js_greater_than_equal_to_call } from "../../../love/public/src/js_greater_than_equal_to_call.mjs";
import { js_double_equal_to_equal_loose } from "../../../love/public/src/js_double_equal_to_equal_loose.mjs";
import { js_bang_equal_to_not_equal_loose } from "../../../love/public/src/js_bang_equal_to_not_equal_loose.mjs";
import { js_bang_double_equal_to_not_equal } from "../../../love/public/src/js_bang_double_equal_to_not_equal.mjs";
export function js_auto_transforms() {
  let transforms = [
    js_bang_to_not,
    js_triple_equal_to_equal,
    js_bang_double_equal_to_not_equal,
    js_double_equal_to_equal_loose,
    js_bang_equal_to_not_equal_loose,
    js_less_than_equal_to_call,
    js_greater_than_equal_to_call,
    js_less_than_to_call,
    js_greater_than_to_call,
    js_double_asterisk_to_exponent,
    js_percent_to_modulo,
    js_division_to_divide,
    js_asterisk_to_multiply,
    js_minus_to_subtract,
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
    js_assign_combine,
    js_assert_arguments_args,
    js_destructure_functionize,
    js_log_f_name_add,
  ];
  return transforms;
  return;
}
