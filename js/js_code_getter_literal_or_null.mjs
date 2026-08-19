import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_getter_literal } from "./js_code_getter_literal.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function js_code_getter_literal_or_null(code, f_name) {
  "The one written word a getter of that name hands back, said as nothing at all when the file is shaped some other way.";
  "The reader underneath says an empty word for both answers, which is right where it is asked - a word nobody wrote and a file that writes no word are the same thing to a count. It is wrong one step up, where a reader over numbers stands beside it and has to say the same 'no' about a file: nothing is the one answer both sorts of value can give.";
  arguments_assert(arguments, 2);
  let literal = js_code_getter_literal(code, f_name);
  let none = text_empty_is(literal);
  if (none) {
    return null;
  }
  return literal;
}
