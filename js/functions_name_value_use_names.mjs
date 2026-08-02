import { function_ast } from "./function_ast.mjs";
import { js_name_value_use_nodes } from "./js_name_value_use_nodes.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_name_value_use_names(f_names, f_name) {
  "the files among these that hand f_name over as a value rather than calling it";
  "read only, and asked of the whole set before anything is written. one file handing the function over is enough to settle the question for every other file, because the parameter list then belongs to whoever that file passed it to";
  let handing = [];
  for (let name of f_names) {
    let ast = await function_ast(name);
    let value_uses = js_name_value_use_nodes(ast, f_name);
    let any = list_empty_not_is(value_uses);
    if (any) {
      list_add(handing, name);
    }
  }
  return handing;
}
