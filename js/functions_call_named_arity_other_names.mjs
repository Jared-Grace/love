import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_call_named_arity_other_nodes } from "./js_call_named_arity_other_nodes.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_call_named_arity_other_names(
  f_names,
  f_name,
  names,
) {
  arguments_assert(arguments, 3);
  ("The files among these holding a call to f_name that neither hands over the whole row of these names nor already hands over one record filing exactly them, each named beside the numbers it was found handing over.");
  ("Read only, and asked of the whole set before anything is written, in the manner of every other refusal standing in front of a move that touches a declaration and its callers together. One such call is enough to stop the whole move, because half of it written is a repo where the callers and the function disagree about how anything arrives at all.");
  let other = [];
  for (let name of f_names) {
    let ast = await function_ast(name);
    let sizes = js_call_named_arity_other_nodes(ast, f_name, names);
    let any = list_empty_not_is(sizes);
    if (any) {
      let found = {
        name: name,
        sizes: sizes,
      };
      list_add(other, found);
    }
  }
  return other;
}
