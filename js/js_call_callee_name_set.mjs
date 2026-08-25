import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_call_get } from "./js_selects_call_get.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { list_size } from "./list_size.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_set } from "./property_set.mjs";
export async function js_call_callee_name_set(ast, selects, f_name) {
  arguments_assert(arguments, 3);
  ("Points a call already written at a different function, leaving it exactly where it stands and leaving its arguments alone.");
  ("THE ONE THING THAT COULD NOT BE SAID ABOUT A LINE THAT CALLS SOMETHING. Its arguments could be changed by name, a call could be added above a return, a whole line could be pointed at a call - but a line already calling the right thing in the wrong place had no verb, so swapping which function runs there meant deleting the line and writing it again. Which is two edits, either of which can land alone.");
  ("It is what a step becoming a step done differently looks like. Asking the same question in a process of its own, writing through a checked door rather than an open one, going to the cached reader rather than the disk - each is one call changing its mind about who answers it, and nothing about the line around it changes at all.");
  ("The two functions are made to agree on how many arguments they take, because the arguments stay as they were written. Left unchecked, a swap to something that takes one fewer would parse, print, and read correctly, and be wrong from the first run - which is the whole failure this family exists to make unwritable.");
  ("The tree is taken and not read, the same as its neighbour that sets an argument. It is the shape every apply has, and an address that has already found the call carries everything either of them needs.");
  let call = js_selects_call_get(selects);
  let name_before = js_call_callee_name_try(call);
  let args = js_call_arguments_get(call);
  let names = await function_params_names(f_name);
  let size_args = list_size(args);
  let size_names = list_size(names);
  equal_assert_json(size_args, size_names, {
    hint: "the call as written hands over a different number of arguments than the function it is being pointed at takes, and the arguments are left as they are",
    name_before,
    f_name,
    names,
  });
  let callee = js_identifier_expression(f_name);
  property_set(call, "callee", callee);
}
