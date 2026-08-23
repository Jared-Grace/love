import { arguments_assert } from "./arguments_assert.mjs";
import { function_reachable_names_stopping } from "./function_reachable_names_stopping.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function function_reachable_calls_named_stopping(
  f_name_root,
  f_names_stop,
) {
  "$plain f_name_root";
  "Every call that says out loud what it is calling, in every function this one can reach without opening any of the given names, each one carrying the function it stands in and the name it calls - and alongside them how many functions had to be read to find them.";
  "A call whose callee has no name is left out. Something called out of a list, or off a thing worked out a moment earlier, is a call the code as written cannot identify, so a reader walking names has nothing to match it against and would only have to drop it again itself.";
  "The number of functions read comes back with the calls because it is the only thing that tells an empty answer apart from a walk that never started. Nothing found reads exactly the same either way, and a reader handed only the calls has no way to ask which one it is looking at. It counts what was actually read, so handing in something to stop at makes it smaller - which is what makes a stop set visible in the answer instead of silently shrinking it.";
  arguments_assert(arguments, 2);
  let f_names = await function_reachable_names_stopping(
    f_name_root,
    f_names_stop,
  );
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
