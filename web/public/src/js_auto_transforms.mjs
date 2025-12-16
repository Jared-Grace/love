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
import { js_function_id_add } from "../../../love/public/src/js_function_id_add.mjs";
import { js_arrow_to_function } from "../../../love/public/src/js_arrow_to_function.mjs";
import { js_if_blockify } from "../../../love/public/src/js_if_blockify.mjs";
import { js_arrow_blockify } from "../../../love/public/src/js_arrow_blockify.mjs";
import { js_await_add } from "../../../love/public/src/js_await_add.mjs";
import { js_bang_to_not } from "../../../love/public/src/js_bang_to_not.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_auto_transforms() {
  marker("transforms");
  let transforms = [
    js_bang_to_not,
    js_await_add,
    js_arrow_blockify,
    js_if_blockify,
    js_arrow_to_function,
    js_function_id_add,
    js_let_add,
    js_declare_assign_null,
    js_if_else_if_combine,
    js_atomize_function,
    js_return_atomize,
    js_call_fill,
    js_dollar,
    js_outside_move,
    js_atomize,
    js_assign_combine,
    js_assert_arguments_args,
    js_destructure_functionize,
  ];
  return transforms;
  return;
  return;
}
