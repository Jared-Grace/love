import { fn_name } from "./fn_name.mjs";
import { function_exists_not } from "./function_exists_not.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_return_own_is } from "./js_function_return_own_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function js_function_names_return_own_not(names) {
  "Of these names, the ones a repo function answers to whose body hands no answer back of its own.";
  ("A name nothing in the repo answers to is left out, because there is no body to look at and no way to say what it does. So is a name whose function hands something back, however rarely - ");
  (fn_name("js_function_return_own_is"),
    " counts a bare handing back with nothing after it too, which errs toward leaving a name out, and leaving one out only means a change is not made.");
  let kept = [];
  async function name_keep(name) {
    let missing_is = await function_exists_not(name);
    if (missing_is) {
      return;
    }
    let ast = await function_ast(name);
    let declaration = js_flo(ast);
    let handed_back_is = js_function_return_own_is(declaration);
    if (handed_back_is) {
      return;
    }
    list_add(kept, name);
  }
  await each_async(names, name_keep);
  return kept;
}
