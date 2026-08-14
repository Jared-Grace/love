import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_skip_1 } from "./list_skip_1.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
export function list_subsets_size(list, size) {
  "Every way of choosing that many items out of a list, each choice keeping the order the items were already in.";
  "Choosing is not ordering: the two ways of naming the same pair are one answer here, not two. That is what makes this the right thing to ask when a question is about a group rather than about a sequence - which languages someone reads together, say, where reading them in a different order is not a different reader.";
  "It works by asking about the first item once and then never again. Either a choice takes it, and the rest of that choice is a smaller choice from what follows; or it does not, and the whole choice comes from what follows. Nothing else is possible, so the two answers together are all of them, and neither can contain anything the other does.";
  "How many there are grows fast and then faster - out of forty things there are 780 pairs, 9880 triples and 91390 quadruples - so a caller asking for a size should know that it is asking for all of them and mean it.";
  "Asking for more than there are answers nothing at once, and that line is doing real work rather than tidying up an edge. Without it a choice that can never be completed is still walked all the way to the end of the list before it gives up, and the walking is every take-or-leave in turn: asking for all thirty-eight out of thirty-eight explored two hundred and seventy billion of them to find the one. It looked like nothing was wrong, because a counting that has not come back yet looks exactly like a slow one.";
  arguments_assert(arguments, 2);
  let none = equal(size, 0);
  if (none) {
    let empty = [[]];
    return empty;
  }
  let b = list_size(list);
  let short = greater_than(size, b);
  if (short) {
    let nothing = [];
    return nothing;
  }
  let first = list_first(list);
  let rest = list_skip_1(list);
  let without_first = list_subsets_size(rest, size);
  let size2 = subtract_1(size);
  let smaller = list_subsets_size(rest, size2);
  function lambda(subset) {
    let grown = lists_combine([[first], subset]);
    return grown;
  }
  let with_first = list_map(smaller, lambda);
  let subsets = lists_combine([with_first, without_first]);
  return subsets;
}
