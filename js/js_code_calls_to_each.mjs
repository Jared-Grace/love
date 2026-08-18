import { fn_name } from "./fn_name.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_calls_to_each_apply } from "./js_calls_to_each_apply.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_code_calls_to_each(code, names) {
  "This written-out code as it stands after every run of side by side calls on one of the given names has been put into a single walk.";
  ("The step works on a tree, which a corpus cannot write down, and it asks the repo which names are safe to collapse. Both are handed round here: this takes written-out code and a list of names chosen by the case, and hands written-out code back, so a case can say exactly what it expects to be left and can pin the choice of names as well as the change.");
  (fn_name("js_calls_to_each"),
    " is the same change with the names it works out for itself.");
  let ast = js_parse(code);
  js_calls_to_each_apply(ast, names);
  let after = js_unparse(ast);
  return after;
}
