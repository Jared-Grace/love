import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast_body } from "./function_ast_body.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { js_statement_address_name } from "./js_statement_address_name.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export async function function_span_opening_is(f_name, address_from) {
  "$plain f_name";
  "$plain address_from";
  arguments_assert(arguments, 2);
  ("Whether a run of lines addressed by this word starts on the very first line of work in the named function's body.");
  ("The opening line of a body is not an ordinary line of work, and the difference is what this is for. A function keeps two kinds of thing at the top: the count of how many arguments it was called with, and the prose saying what it is for and why. Both are about the function itself rather than about the work, so both belong to whatever name is on the door - and a cut starting there takes them out through it.");
  ("What that costs was measured rather than guessed. One walk over one function cut a run from the opening line, and the function left behind ended up with no count of its arguments at all while the piece cut out carried the parent's whole explanation on its front, reading as though it were the thing being explained. Nothing went red: the count moved into a function with a different number of arguments and was quietly rewritten to that number, which is a passing file and a lost check.");
  ("The first line of work is asked for rather than the first line, because the prose sits between the two and is not work. So this is not a count of lines - it is the same reading of what a line of work is that the size record itself is made of.");
  ("Nothing is written and nothing is moved.");
  let read = await function_ast_body(f_name);
  let ast = property_get(read, "ast");
  let statements = property_get(read, "statements");
  let working = list_filter(statements, js_statement_work_is);
  let opening = list_first_try(working);
  let bodiless_is = null_is(opening);
  if (bodiless_is) {
    return false;
  }
  let address_opening = js_statement_address_name(ast, opening);
  let same_is = equal(address_opening, address_from);
  return same_is;
}
