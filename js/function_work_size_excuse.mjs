import { function_work_walk } from "./function_work_walk.mjs";
import { functions_work_walk_excuse } from "./functions_work_walk_excuse.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { function_work_table } from "./function_work_table.mjs";
import { functions_work_table_excuse } from "./functions_work_table_excuse.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_work_chain } from "./function_work_chain.mjs";
import { functions_work_chain_excuse } from "./functions_work_chain_excuse.mjs";
export async function function_work_size_excuse(f_name) {
  arguments_assert(arguments, 1);
  ("Why the named function is allowed to be over the size ceiling, or nothing when it is not allowed to be.");
  ("There are three excuses so far and all three are measured rather than granted. A body whose lines barely lean on one another is flat, and a flat body costs a reader its widest line rather than its whole length - that is the thing somebody means by a function that just returns a list being fine. A body that is nearly all one written-out table of small cases is a table, which is the same kindness widened: the entries lean on nothing, so a reader holds one case and the little that is left over. A body that is nearly all one loop pointing a name outside itself somewhere else is a walk, and that one is a different kindness altogether - not that the length is cheap to read, but that no cut can remove it, because carrying any piece of the walk away hands each side its own copy of the name.");
  ("They are asked in that order because flat is the cheapest question and the commonest answer, table costs one more reading, and walk costs the most; a body that is flat is excused whichever else it also is.");
  ("An excuse is a word rather than a yes, so that a name let through says what let it through. A list of forgiven names says only that somebody once decided, and cannot tell a reader whether the next function like it is forgiven too.");
  ("A third candidate was weighed and refused, and it is the one most people ask for by name: the screen. A body that paints a page is long the way a page is long, and it looks like it ought to be forgiven for that. It is the same refusal as the one below and worth writing out because the shape hides it. Painting is a straight run of calls that each hang one more thing on a place made earlier, which is precisely what the span cut takes apart most easily, and the pieces come out already named - the boxes the reader is looking at. Measured on 2026-08-16 on the string lesson: fifty-one lines went to eleven, six, eighteen and twenty-three, and the parent now says in two lines that the screen has an opening box and a defining box, which nothing said before. So a painted screen is not an exception to the ceiling; it is the cheapest kind of body to bring under it.");
  ("Two further candidates were weighed and both refused, and the reason is worth keeping so that nobody measures them again. Counting the decisions a body makes was measured across the whole record and no boundary appeared - the excused and the unexcused sit on top of one another, so any line drawn there would be a number somebody picked. Counting none of them at all is worse rather than better: a long body that makes no decision is a straight run of work, which is exactly the shape the span cut takes apart most easily. That would be a mark of being cheap to cut rather than of being fine as it stands, and an excuse has to name a shape that would not be improved by cutting it.");
  let chain = await function_work_chain(f_name);
  let flat = functions_work_chain_excuse(chain);
  let flat_is = null_not_is(flat);
  if (flat_is) {
    return flat;
  }
  let reading = await function_work_table(f_name);
  let table = functions_work_table_excuse(reading);
  let table_is = null_not_is(table);
  if (table_is) {
    return table;
  }
  let walk_reading = await function_work_walk(f_name);
  let walk = functions_work_walk_excuse(walk_reading);
  return walk;
}
