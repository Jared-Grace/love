import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
export function js_names_chosen_indices(names, chosen) {
  arguments_assert(arguments, 2);
  ("The places in this row of names held by the ones that were chosen, in the order the row has them rather than the order they were asked for.");
  ("THE ROW DECIDES THE ORDER AND NOT THE ASKING, so that a person naming three parameters in whatever order they came to mind gets the same result as a person naming them in the order the function takes them. Two ways of asking for one thing that came out differently would be a difference nobody could see in what they typed.");
  ("A chosen name the row does not hold is simply not here. Whoever calls this asks separately whether every chosen name was found, because the answer to that is a refusal and this is a reading.");
  let found = [];
  let index = 0;
  for (let name of names) {
    let taken = list_includes(chosen, name);
    if (taken) {
      list_add(found, index);
    }
    index = add(index, 1);
  }
  return found;
}
