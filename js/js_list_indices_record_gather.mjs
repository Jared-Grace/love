import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
export function js_list_indices_record_gather(items, indices, record) {
  arguments_assert(arguments, 3);
  ("This row rebuilt with the things standing at these places taken out of it and one given thing put where the first of them stood.");
  ("THE GIVEN THING GOES WHERE THE FIRST OF THEM STOOD RATHER THAN AT THE END, because everything not being gathered keeps the place it had, and a caller reading the line sees the gathered ones where it always saw them. Putting it last would move every remaining thing left by some number nobody can see from the line.");
  ("The same rebuilding serves a function's parameters and a call's arguments, which is the point of it standing apart from either: the two rows have to come out matching each other place for place, and one piece of reasoning done once is what makes them.");
  let first = list_first(indices);
  let kept = [];
  let index = 0;
  for (let item of items) {
    let leading = equal(index, first);
    if (leading) {
      list_add(kept, record);
    }
    let gathered = list_includes(indices, index);
    if (not(gathered)) {
      list_add(kept, item);
    }
    index = add(index, 1);
  }
  return kept;
}
