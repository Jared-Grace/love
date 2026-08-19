import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { js_node_identifier_replace } from "./js_node_identifier_replace.mjs";
import { list_first } from "./list_first.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { property_get } from "./property_get.mjs";
export function js_property_path_get_2_step_replace(call, name) {
  arguments_assert(arguments, 2);
  ("Rewrite a reading that goes two steps in so that it starts from a name already standing for what the first step would have reached, and goes only the one step that is left.");
  ("The first step is the one somebody has just worked out the answer to. Reading two steps into a record that is about to be taken away is not a reading that can simply be replaced by a name, the way a single step can, because the second step still has to happen at run time. So the first step is taken off and the reading is left standing as the second.");
  ("Three things move together and the order does not matter, because none of them is read by the others. The thing being read from becomes the given name, the first of the two names asked for goes, and the verb becomes the one that takes a single name.");
  let args = js_call_arguments_get(call);
  let target = list_first(args);
  js_node_identifier_replace(target, name);
  list_remove_at(args, 1);
  let callee = property_get(call, "callee");
  let f_name = fn_name("property_get");
  js_node_identifier_replace(callee, f_name);
}
