import { arguments_assert } from "./arguments_assert.mjs";
import { js_calls_named_sized } from "./js_calls_named_sized.mjs";
import { js_call_callee_set } from "./js_call_callee_set.mjs";
import { list_size } from "./list_size.mjs";
export async function js_calls_named_sized_callee_set(
  ast,
  f_name_before,
  f_name_after,
  count,
) {
  arguments_assert(arguments, 4);
  ("Points every call in this file that hands one name a given number of things at");
  ("a different function.");
  ("The count is what makes this safe to run over a whole file rather than one");
  ("call at a time. A helper and the fuller helper beside it differ by a parameter,");
  ("so the callers that meant the fuller one are exactly the ones already handing");
  ("over that many things - and the callers that meant this one are left alone by");
  ("the same test, without anybody reading them.");
  ("Each call still goes through the single-call verb, which refuses when the two");
  ("disagree about how many things they take. That check is the whole guarantee");
  ("here, so it is worth paying for once per call rather than once per file.");
  let calls = js_calls_named_sized(ast, f_name_before, count);
  for (let call of calls) {
    let selects = [call];
    await js_call_callee_set(ast, selects, f_name_after);
  }
  let moved = list_size(calls);
  return moved;
}
