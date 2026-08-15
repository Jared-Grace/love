import { arguments_assert } from "./arguments_assert.mjs";
import { function_work_chain } from "./function_work_chain.mjs";
import { functions_work_chain_excuse } from "./functions_work_chain_excuse.mjs";
export async function function_work_size_excuse(f_name) {
  arguments_assert(arguments, 1);
  ("Why the named function is allowed to be over the size ceiling, or nothing when it is not allowed to be.");
  ("There is one excuse so far and it is measured rather than granted: a body whose lines barely lean on one another is flat, and a flat body costs a reader its widest line rather than its whole length. That is the thing somebody means by a function that just returns a list being fine.");
  ("An excuse is a word rather than a yes, so that a name let through says what let it through. A list of forgiven names says only that somebody once decided, and cannot tell a reader whether the next function like it is forgiven too.");
  let chain = await function_work_chain(f_name);
  let excuse = functions_work_chain_excuse(chain);
  return excuse;
}
