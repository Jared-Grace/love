import { js_functions_nested_where } from "./js_functions_nested_where.mjs";
import { js_node_function_declared_is } from "./js_node_function_declared_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_functions_nested_declarations(ast) {
  arguments_assert(arguments, 1);
  ("Every function declared inside the exported one, however deep it sits, in the order they are written.");
  ("The exported function is left out, so asking about a file's closures cannot hand back the file itself - which as an address would be a move that empties the file, and as a size would be the number the question was asked to break down.");
  ("Only declarations, because the caller for this reading is a move that takes a function's name away with its body. A function written as a value is reached by whatever holds it, so taking its name away leaves nothing behind for that holder to reach. The wider reading beside this one asks for those as well, and is what the move that leaves the name behind asks.");
  let declarations = js_functions_nested_where(
    ast,
    js_node_function_declared_is,
  );
  return declarations;
}
