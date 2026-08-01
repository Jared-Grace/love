import { arguments_assert } from "./arguments_assert.mjs";
import { function_literal_route_generic } from "./function_literal_route_generic.mjs";
import { js_literal_calls_set } from "./js_literal_calls_set.mjs";
export async function function_literal_route(f_name, getter_f_name) {
  arguments_assert(arguments, 2);
  ("Points one file at the function that returns the word the file spells out, and");
  ("repairs the imports so the file still loads.");
  ("Every place the named file spells the word is pointed at the function - not");
  ("only the places naming a field. It used to be only those, on the argument that");
  ("the same word elsewhere might be a different thing spelled alike. But that");
  ("argument is the guess this command already refuses to make one line up, made");
  ("again in a smaller place: the caller who named the file is the one who read it,");
  ("and a command that half-trusts its caller trusts nobody. What it cost was worse");
  ("than untidiness - the report that offers this command named six files spelling");
  ("a word in a plain declaration, and the command refused all six and guessed in");
  ("its message that they must be inside a list.");
  ("The naming of a field is the one place this does not reach, and that is not a");
  ("judgement made here: the skip it borrows belongs to the pass that promotes");
  ("names, where a field name turned into a reference to a function of the same");
  ("name drags that function's imports in and makes a value already sitting in");
  ("somebody's browser follow a rename. The sibling command routes exactly those");
  ("sites, where writing a call is safe because a call is not a reference.");
  let r = await function_literal_route_generic(
    f_name,
    getter_f_name,
    js_literal_calls_set,
  );
  return r;
}
