import { js_function_forwarding_removed } from "./js_function_forwarding_removed.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { each_async } from "./each_async.mjs";
export async function js_function_forwarding_remove(ast) {
  "Drops each function that only hands its arguments to another one and is handed over in a single place, and hands the other one over in its stead.";
  "A function whose whole body is one call, given every argument it received in the order it received them, is a second name for the function it calls. Where it is only ever handed to something, the something can be handed the first function instead and the second name has nothing left to do.";
  "Nothing here is decided from the function alone. The receiver decides how many arguments arrive, and a wrapper is often written precisely because that number differs - the built-in walk over a list hands its function three things where a repo function takes one, and a wrapper standing between them is the whole reason both work. So the receiver is read, and a wrapper is kept whenever the number it takes and the number the receiver hands over are not the same, or the receiver cannot be read at all.";
  let declarations = js_list_type(ast, "FunctionDeclaration");
  async function lambda(v) {
    let node = property_get(v, "node");
    let stack = property_get(v, "stack");
    await js_function_forwarding_removed(ast, node, stack);
  }
  await each_async(declarations, lambda);
}
