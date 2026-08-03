import { property_list_size } from "./property_list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_arguments_assert_first_is } from "./js_function_arguments_assert_first_is.mjs";
import { text_to } from "./text_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_call_args_statement } from "./js_code_call_args_statement.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_add_first } from "./list_add_first.mjs";
export function js_function_arguments_assert_add(declaration) {
  arguments_assert(arguments, 1);
  ("Write the line that counts a function's arguments at the top of its body, saying how many it takes.");
  ("Every function standing on its own in this repo opens with that line, and the commands that make a new one out of an old one's insides were writing functions without it. A helper written inside another function never needed it - it was reached from one place, by lines standing beside it - but the moment it stands on its own anything may call it, and the count is the only thing left saying what it expects.");
  ("A function already opening with the line is left exactly as it stands. Running a cut twice must not leave the count written twice, and a line already there says what this would say.");
  let body = property_get(declaration, "body");
  let statements = property_get(body, "body");
  let already = js_function_arguments_assert_first_is(statements);
  if (already) {
    return;
  }
  let count = property_list_size(declaration, "params");
  let counted = text_to(count);
  let name = fn_name("arguments_assert");
  let code = js_code_call_args_statement(name, ["arguments", counted]);
  let statement = js_parse_statement(code);
  list_add_first(statements, statement);
}
