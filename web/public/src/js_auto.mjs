import { js_await_add } from "./js_await_add.mjs";
import { js_bang_to_not } from "./js_bang_to_not.mjs";
import { js_if_blockify } from "./js_if_blockify.mjs";
import { js_if_else_if_combine } from "./js_if_else_if_combine.mjs";
import { js_return_atomize } from "./js_return_atomize.mjs";
import { each_async } from "./each_async.mjs";
import { js_atomize } from "./js_atomize.mjs";
import { js_outside_move } from "./js_outside_move.mjs";
import { js_dollar } from "./js_dollar.mjs";
import { js_call_fill } from "./js_call_fill.mjs";
import { js_atomize_function } from "./js_atomize_function.mjs";
import { js_declare_assign_null } from "./js_declare_assign_null.mjs";
import { js_let_add } from "./js_let_add.mjs";
import { js_function_id_add } from "./js_function_id_add.mjs";
import { js_arrow_to_function } from "./js_arrow_to_function.mjs";
import { js_arrow_blockify } from "./js_arrow_blockify.mjs";
export async function js_auto(ast) {
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
  ];
  async function lambda(t) {
    await t(ast);
  }
  await each_async(transforms, lambda);
  return;
  [];
}
