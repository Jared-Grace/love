import { js_list_type } from "./js_list_type.mjs";
import { js_function_forwarding_target } from "./js_function_forwarding_target.mjs";
import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
import { js_name_variable_declared_is } from "./js_name_variable_declared_is.mjs";
import { js_call_argument_site } from "./js_call_argument_site.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { function_parameter_call_sizes } from "./function_parameter_call_sizes.mjs";
import { object_replace } from "./object_replace.mjs";
import { property_get } from "./property_get.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_all_equal_to } from "./list_all_equal_to.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_size } from "./list_size.mjs";
import { list_is } from "./list_is.mjs";
import { each_async } from "./each_async.mjs";
import { equal } from "./equal.mjs";
import { equal_not } from "./equal_not.mjs";
import { not } from "./not.mjs";
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
async function js_function_forwarding_removed(ast, node, stack) {
  "Drops this one function when every condition for dropping it holds, and leaves the code exactly as it stands when any one of them does not.";
  let target = js_function_forwarding_target(node);
  if (equal(target, null)) {
    return;
  }
  let id = property_get(node, "id");
  if (equal(id, null)) {
    return;
  }
  let name = property_get(id, "name");
  ("its own name where it is declared, and one other place. anything more is a use this does not look at");
  let mentions = js_identifiers_named_count(ast, name);
  if (equal_not(mentions, 2)) {
    return;
  }
  ("a name given to a variable holds nothing until its line has run, and the place this would be handed over may sit above that line");
  let variable_is = js_name_variable_declared_is(ast, target);
  if (variable_is) {
    return;
  }
  let site = js_call_argument_site(ast, name);
  if (equal(site, null)) {
    return;
  }
  let call = property_get(site, "call");
  let callee = property_get(call, "callee");
  let callee_is = js_node_type_is(callee, "Identifier");
  if (not(callee_is)) {
    return;
  }
  let receiver = property_get(callee, "name");
  let index = property_get(site, "index");
  let sizes = await function_parameter_call_sizes(receiver, index);
  if (equal(sizes, null)) {
    return;
  }
  let params = property_get(node, "params");
  let wanted = list_size(params);
  let agreed_is = list_all_equal_to(sizes, wanted);
  if (not(agreed_is)) {
    return;
  }
  let holder = list_get_end_1(stack);
  let holder_is = list_is(holder);
  if (not(holder_is)) {
    return;
  }
  list_remove(holder, node);
  let argument = property_get(site, "argument");
  let expression = js_parse_expression(target);
  object_replace(argument, expression);
}
