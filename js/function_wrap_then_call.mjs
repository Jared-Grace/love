import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_unalias_only } from "./function_name_unalias_only.mjs";
import { function_parse_declaration_unaliased } from "./function_parse_declaration_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_size } from "./list_size.mjs";
import { error } from "./error.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_wrap } from "./function_wrap.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
import { equal } from "./equal.mjs";
import { js_call_add_before_return } from "./js_call_add_before_return.mjs";
import { list_first } from "./list_first.mjs";
import { js_call_add_before_return_argument_returned } from "./js_call_add_before_return_argument_returned.mjs";
import { js_find_return } from "./js_find_return.mjs";
import { property_set } from "./property_set.mjs";
import { js_returns_empty_last_remove } from "./js_returns_empty_last_remove.mjs";
import { js_declaration_unused_to_expression } from "./js_declaration_unused_to_expression.mjs";
export async function function_wrap_then_call(f_name, then_fn, f_name_wrapper) {
  arguments_assert(arguments, 3);
  ("Writes a new function that calls the first, then calls then_fn, and returns nothing. When then_fn takes one parameter it is handed the first function's answer; when it takes none it is called with nothing, and the answer is dropped. Either name may be an alias; asked by the human 2026-09-28.");
  ("A then_fn of two or more parameters is refused rather than guessed at: only one of them could be the answer, and a generated call carries the other parameters' own names, which name nothing where the call lands. Not picked: handing the answer to the first of several, which writes a call that throws when run.");
  ("The wrapping is the existing one, as ",
    fn_name("function_wrap_copy"),
    "'s is, so the arguments, the awaiting and the naming stay decided in one place. Canonicalised before it is handed back, because the added call is the wrapper's only mention of then_fn and a written call brings no import with it.");
  let then_unaliased = await function_name_unalias_only(then_fn);
  let r = await function_parse_declaration_unaliased(then_unaliased);
  let declaration = property_get(r, "declaration");
  let params = js_function_declaration_params_names(declaration);
  let count = list_size(params);
  if (greater_than(count, 1)) {
    let message = text_combine_multiple([
      then_unaliased,
      " takes more than one parameter, so which one gets the answer is not known",
    ]);
    error(message);
  }
  await function_wrap(f_name, f_name_wrapper);
  await function_transform(f_name_wrapper, lambda);
  let checked = await function_auto_checked(f_name_wrapper);
  return checked;
  async function lambda(ast) {
    if (equal(count, 0)) {
      await js_call_add_before_return(ast, then_unaliased);
    } else {
      let param = list_first(params);
      await js_call_add_before_return_argument_returned(
        ast,
        then_unaliased,
        param,
      );
    }
    let found = js_find_return(ast);
    property_set(found, "argument", null);
    js_returns_empty_last_remove(ast);
    js_declaration_unused_to_expression(ast);
  }
}
