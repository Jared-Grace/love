import { js_statement_find_name_generic } from "./js_statement_find_name_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_next } from "./list_next.mjs";
export function js_statement_find_name_body(ast, name) {
  arguments_assert(arguments, 2);
  ("The first line of the function's own body that mentions a word, however deep inside that line the word is written.");
  ("The address a span of work is chosen by. Asking for the line that calls a named function was the first try and it could not reach the line a span most often starts on, because that line is an accumulator being opened - a list or an object with nothing in it and so no call in it either. A word covers both: the accumulator is named by the name it introduces, and a loop is named by anything called inside it.");
  ("First mention rather than only mention, because a word worth addressing by is usually written several times and demanding one would refuse most of them. That makes the address readable straight off the function: it is the earliest line the word appears on, which is the line a reader points at anyway.");
  ("Mentions outside the body do not count, and the import line is why - a called function's earliest mention in the file is the line that imports it, which is not a line of the body at all.");
  ("All of the searching is held one name down, and the only thing said here is which node of the stack over the word to take: the one directly under the body, which is the line at the top level of the function however deep the word itself is written.");
  let found = js_statement_find_name_generic(ast, name, list_next);
  return found;
}
