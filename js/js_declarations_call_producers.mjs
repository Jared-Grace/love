import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { list_add } from "./list_add.mjs";
export function js_declarations_call_producers(decls) {
  arguments_assert(arguments, 1);
  ("Each declared name whose value came out of a call to a named function, paired with the name of that function.");
  ("It is how a name gets traced back to whoever made what stands in it. A name is only worth following where there is one thing that made it, and a call to a plain name is that: one function, findable by its own name, whose answer this name holds.");
  ("Waiting on the answer is looked through rather than counted as something else being done. A name is made by the same function whether or not the making took time, and reading the wait as the thing that made it would lose every maker in the repo that has to be waited for.");
  ("Anything else is passed over rather than guessed at. A value read out of something, worked out from two things, or written out in place has no one function behind it, and a name with no single maker cannot be followed to one.");
  let producers = [];
  for (let decl of decls) {
    let name = property_get(decl, "name");
    let init = property_get(decl, "init");
    let value = init;
    let waited_is = js_node_type_is(init, "AwaitExpression");
    if (waited_is) {
      value = property_get(init, "argument");
    }
    let called_is = js_node_type_is(value, "CallExpression");
    if (not(called_is)) {
      continue;
    }
    let callee = property_get(value, "callee");
    let named_is = js_identifier_is(callee);
    if (not(named_is)) {
      continue;
    }
    let producer = js_identifier_name(callee);
    list_add(producers, {
      name,
      producer,
    });
  }
  return producers;
}
