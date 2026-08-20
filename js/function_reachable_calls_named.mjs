import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast } from "./function_ast.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
export async function function_reachable_calls_named(f_name_root) {
  "$plain f_name_root";
  "Every call that says out loud what it is calling, in every function this one can reach, each one carrying the function it stands in and the name it calls - and alongside them how many functions had to be read to find them.";
  "A call whose callee has no name is left out. Something called out of a list, or off a thing worked out a moment earlier, is a call the code as written cannot identify, so a reader walking names has nothing to match it against and would only have to drop it again itself.";
  "The number of functions read comes back with the calls because it is the only thing that tells an empty answer apart from a walk that never started. Nothing found reads exactly the same either way, and a reader handed only the calls has no way to ask which one it is looking at.";
  "It is one name rather than a loop written out twice because both readers of the doors words leave by need exactly this walk, and needed it identically. Two copies of a walk do not break when one of them is improved - they simply stop agreeing, and the two readings are then of two different pieces of the app while both still claim to be of one.";
  arguments_assert(arguments, 1);
  let f_names = await function_reachable_names(f_name_root);
  let calls = [];
  for (let f_name of f_names) {
    let ast = await function_ast(f_name);
    let nodes = js_list_type_nodes(ast, "CallExpression");
    for (let call of nodes) {
      let callee_name = js_call_callee_name_try(call);
      let unnamed = null_is(callee_name);
      if (unnamed) {
        continue;
      }
      list_add(calls, {
        f_name,
        callee_name,
        call,
      });
    }
  }
  let reachable = list_size(f_names);
  let r = {
    calls,
    reachable,
  };
  return r;
}
