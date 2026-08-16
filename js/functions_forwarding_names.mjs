import { functions_names } from "./functions_names.mjs";
import { function_read } from "./function_read.mjs";
import { js_code_forwarding_droppable_is } from "./js_code_forwarding_droppable_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { not } from "./not.mjs";
export async function functions_forwarding_names() {
  "The name of every repo function holding a function that is only a second name for another one, which is to say every function the dropping would change.";
  "Answers rather than changes anything. The set is found by doing the dropping on a tree and throwing the tree away, so the answer is what the dropping would really do rather than a guess at it, and a sweep can be looked at before it is run.";
  "A name whose source cannot be read or parsed is left out rather than thrown on, because one unreadable file among ten thousand would otherwise cost the whole answer.";
  let names = await functions_names();
  async function droppable(f_name) {
    async function lambda() {
      let code = await function_read(f_name);
      let droppable_is = await js_code_forwarding_droppable_is(code);
      if (not(droppable_is)) {
        return null;
      }
      return f_name;
    }
    let r = await catch_null_async(lambda);
    return r;
  }
  let answers = await list_map_limited_async(names, droppable, 20);
  let found = list_filter_null_not_is(answers);
  return found;
}
