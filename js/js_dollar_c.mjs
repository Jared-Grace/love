import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_keyword_else } from "./js_keyword_else.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_get } from "./list_get.mjs";
import { not } from "./not.mjs";
import { object_replace } from "./object_replace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_dollar_c({
  remaining,
  node,
  stack_,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  ("Writes out the choosing of one of two values into a name already standing there - a name, a test, the value for when it holds and the value for when it does not - and leaves an if and its else where it stood.");
  ("It exists because the only other short way of writing this is a call, and a call settles everything handed to it before it looks at any of it. So the value for the side not taken is worked out anyway: if working it out throws, it throws; if it writes something down, it is written; if it takes a while, it is waited for. An if does not do that, and this is an if.");
  ("The name is declared by hand on the line above rather than here, because one statement is what stands here and one statement is what can be put in its place. A declaration and a choosing are two, and there is no third thing that is both.");
  ("Nothing happens unless what stands here is a statement on its own. Written anywhere else - as what a name is set from, or inside something being worked out - there is no statement to put an if in place of, and quietly wrapping the surroundings to make room would be a different edit from the one asked for. The unexpanded name is left exactly where it was, which nothing binds, so it is a name the repo answers nowhere and says so.");
  let statement_is = js_node_type_is(stack_, "ExpressionStatement");
  if (not(statement_is)) {
    return;
  }
  let name = list_get(remaining, 0);
  let condition = list_get(remaining, 1);
  let on_true = list_get(remaining, 2);
  let on_false = list_get(remaining, 3);
  let taken = text_combine_multiple([name, " = ", on_true, ";"]);
  let left = text_combine_multiple([name, " = ", on_false, ";"]);
  let code = text_combine_multiple([
    js_keyword_if(),
    " ",
    js_code_wrap_parenthesis(condition),
    " ",
    js_code_wrap_braces(taken),
    " ",
    js_keyword_else(),
    " ",
    js_code_wrap_braces(left),
  ]);
  let parsed = js_parse_statement(code);
  object_replace(stack_, parsed);
}
