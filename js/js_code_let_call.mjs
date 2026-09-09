import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function js_code_let_call(local_name, f_name, args_names, awaited_is) {
  arguments_assert(arguments, 4);
  ("One line of JavaScript written out: a name being given what a named function hands back, waited for or not.");
  ("Written rather than built out of syntax nodes, because every piece of it is a name and a line made only of names has nothing in it a writer could get wrong that a parser would not catch at once. What it is handed goes straight through, so a caller holding names that came out of a tree gets back a line the same tree can be given.");
  ("Whether to wait is asked as a plain yes or no rather than as the word, so that no caller has to know how the word is spelled or remember the space after it.");
  let args = list_join_comma_space(args_names);
  let awaited = "";
  if (awaited_is) {
    awaited = "await ";
  }
  let code = list_join_empty([
    "let ",
    local_name,
    " = ",
    awaited,
    f_name,
    "(",
    args,
    ");",
  ]);
  return code;
}
