import { arguments_assert } from "./arguments_assert.mjs";
import { function_work_chain } from "./function_work_chain.mjs";
import { functions_work_chain_excuse } from "./functions_work_chain_excuse.mjs";
import { functions_work_size_ceiling } from "./functions_work_size_ceiling.mjs";
import { functions_work_sizes } from "./functions_work_sizes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_greater_than } from "./property_greater_than.mjs";
export async function functions_work_oversize_measured() {
  arguments_assert(arguments, 0);
  ("Every function over the size ceiling, beside how many lines it holds, how deep its longest chain of them runs, and the word that excuses it if one does.");
  ("Both numbers are here rather than in two answers because neither one decides anything alone. Size says a function is over; depth says whether that is a problem; and reading them apart is how a table of a thousand entries and a hundred lines of tangle end up on the same list.");
  ("Depth is asked only of the ones already over, which is a hundred or so rather than every function in the repo. The ceiling is what makes the question worth asking, so there is nothing to learn from measuring underneath it.");
  let ranked = await functions_work_sizes();
  let ceiling = functions_work_size_ceiling();
  let measured = [];
  for (let entry of ranked) {
    let too_big = property_greater_than(entry, "size", ceiling);
    let small_is = not(too_big);
    if (small_is) {
      continue;
    }
    let name = property_get(entry, "name");
    let size = property_get(entry, "size");
    let chain = await function_work_chain(name);
    let excuse = functions_work_chain_excuse(chain);
    let item = {
      name,
      size,
      chain,
      excuse,
    };
    list_add(measured, item);
  }
  return measured;
}
