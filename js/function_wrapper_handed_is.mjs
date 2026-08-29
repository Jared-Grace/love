import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { function_name_value_use_names } from "./function_name_value_use_names.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_name_value_use_nodes } from "./js_name_value_use_nodes.mjs";
export async function function_wrapper_handed_is(f_name, wrapper) {
  arguments_assert(arguments, 2);
  ("whether a function written in this file is handed somewhere as a value rather than only ever called");
  ("where the wrapper is the file's own exported function, the whole repo has to be asked, because the file handing it over is by definition some other one");
  ("where it is written inside that function it is visible nowhere else, so the file itself is the whole of the question - and asking the repo there would be worse than wasteful. a short inner name is written in dozens of files, each with one of its own, and any single one of them handed over would answer for all the rest");
  let top_is = equal(wrapper, f_name);
  if (top_is) {
    let handing = await function_name_value_use_names(wrapper);
    let handed_repo = list_empty_not_is(handing);
    return handed_repo;
  }
  let ast = await function_ast(f_name);
  let value_uses = js_name_value_use_nodes(ast, wrapper);
  let handed_file = list_empty_not_is(value_uses);
  return handed_file;
}
