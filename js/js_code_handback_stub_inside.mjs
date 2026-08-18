import { arguments_assert } from "./arguments_assert.mjs";
import { js_name_handback_answer } from "./js_name_handback_answer.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_await } from "./js_code_await.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_handback_take } from "./js_code_handback_take.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function js_code_handback_stub_inside(
  async_is,
  f_name_new,
  passed,
  written_closed,
) {
  arguments_assert(arguments, 4);
  ("The written-out inside of the few lines left standing where a moved body used to be: call the body under its new name, then put each write it handed back where it used to go.");
  ("The call is waited for when the body waits, which the plain move next door never has to do - that one hands the answer straight on to whoever called, and a promise handed on is the same as a promise waited for. These lines have to read names off what comes back, and a promise has none of them on it.");
  let name_answer = js_name_handback_answer(f_name_new);
  let call = js_code_call_args(f_name_new, passed);
  let waited = async_is ? js_code_await(call) : call;
  let named = js_code_let_statement(name_answer, waited);
  function lambda(name) {
    let taken = js_code_handback_take(name_answer, name);
    return taken;
  }
  let taking = list_map(written_closed, lambda);
  let lines = list_concat([named], taking);
  let inside = list_join_newline(lines);
  return inside;
}
