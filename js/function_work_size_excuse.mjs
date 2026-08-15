import { null_not_is } from "./null_not_is.mjs";
import { function_work_table } from "./function_work_table.mjs";
import { functions_work_table_excuse } from "./functions_work_table_excuse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_work_chain } from "./function_work_chain.mjs";
import { functions_work_chain_excuse } from "./functions_work_chain_excuse.mjs";
export async function function_work_size_excuse(f_name) {
  arguments_assert(arguments, 1);
  ("Why the named function is allowed to be over the size ceiling, or nothing when it is not allowed to be.");
  ("There are two excuses so far and both are measured rather than granted. A body whose lines barely lean on one another is flat, and a flat body costs a reader its widest line rather than its whole length - that is the thing somebody means by a function that just returns a list being fine. A body that is nearly all one written-out table of small cases is a table, which is the same kindness widened: the entries lean on nothing, so a reader holds one case and the little that is left over.");
  ("The two are asked in that order because flat is the cheaper question and the commoner answer, and a body that is flat is excused whichever else it also is.");
  ("An excuse is a word rather than a yes, so that a name let through says what let it through. A list of forgiven names says only that somebody once decided, and cannot tell a reader whether the next function like it is forgiven too.");
  let chain = await function_work_chain(f_name);
  let flat = functions_work_chain_excuse(chain);
  let flat_is = null_not_is(flat);
  if (flat_is) {
    return flat;
  }
  let reading = await function_work_table(f_name);
  let table = functions_work_table_excuse(reading);
  return table;
}
