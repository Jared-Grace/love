import { js_function_lift_stub_swap } from "./js_function_lift_stub_swap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_function_lift_reading } from "./js_selects_function_lift_reading.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_handback_refusals } from "./js_function_handback_refusals.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_list_map } from "./property_list_map.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_code_handback_object } from "./js_code_handback_object.mjs";
import { js_code_return } from "./js_code_return.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_code_function_declaration_args } from "./js_code_function_declaration_args.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_function_block_statements_prepend } from "./js_function_block_statements_prepend.mjs";
import { js_function_arguments_assert_add } from "./js_function_arguments_assert_add.mjs";
import { js_code_handback_stub_inside } from "./js_code_handback_stub_inside.mjs";
export async function js_selects_function_lift_handback(
  ast,
  selects,
  f_name_new,
) {
  arguments_assert(arguments, 3);
  ("Move the body of a function written inside another one out to stand under a name of its own, have it hand back everything it wrote to that belonged where it used to sit, and leave the name behind on a few lines that call it and put those writes back.");
  ("The third of the lifts, and the answer to the one refusal the other two both stop at. A function reaching out of itself to read something can be handed it as a parameter and never notice the difference. A function reaching out to write cannot: a parameter is a copy, so the write would land on the copy and the line waiting outside to read it would go on reading the old value for ever, with nothing anywhere going red. Handing the writes back and putting them where they went is that same write, made a moment later and in the open.");
  ("What it reached out for is handed in exactly as the plain move next door hands it in, writes and reads alike. A name it writes to still has to arrive holding what it held, because a body may read it before it writes it, or write it only down one branch and leave it alone down the other. Handing it in and handing it back is what makes those two cases the same as they were.");
  ("The lines left behind wait for the call when the body waits, take each write off what comes back, and hand nothing on themselves - which is why a body handing an answer back of its own is turned down next door rather than guessed at here.");
  ("Why it would not go ahead is read next door, so the report of what could be moved this way and the move itself cannot disagree about a single function.");
  let reading = await js_selects_function_lift_reading(ast, selects);
  let declaration = property_get(reading, "declaration");
  let refusals = await js_function_handback_refusals(ast, declaration);
  let name_old = property_get(reading, "name_old");
  let closed = property_get(reading, "closed");
  let written_closed = property_get(reading, "written_closed");
  list_empty_is_assert_json(refusals, {
    name_old,
  });
  let param_names = property_list_map(
    declaration,
    "params",
    js_identifier_name_try,
  );
  let passed = list_concat(param_names, closed);
  let async_is = property_get(declaration, "async");
  let block = property_get(declaration, "body");
  let handed_back = js_code_handback_object(written_closed);
  let returning = js_code_return(handed_back);
  let handback_statement = js_code_statement(returning);
  let moved_code = js_code_function_declaration_args(
    async_is,
    f_name_new,
    passed,
    handback_statement,
  );
  let moved = js_parse_statement(moved_code);
  js_function_block_statements_prepend(moved, block);
  ("The count is written once the body is whole, because it has to say how many the function takes after everything it reached out for has become one.");
  js_function_arguments_assert_add(moved);
  let inside = js_code_handback_stub_inside(
    async_is,
    f_name_new,
    passed,
    written_closed,
  );
  js_function_lift_stub_swap(ast, declaration, name_old, inside, moved);
}
