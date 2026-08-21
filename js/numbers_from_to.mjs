import { fn_name } from "./fn_name.mjs";
import { numbers_up_to } from "./numbers_up_to.mjs";
import { list_map } from "./list_map.mjs";
import { subtract } from "./subtract.mjs";
export function numbers_from_to(first, last) {
  ("The whole numbers running from one up to another, with both ends kept - ",
    fn_name("numbers_from_to"),
    "(3, 6) is [3, 4, 5, 6].");
  ("The one next door starts at nothing and stops short of its argument, which is what a count of things wants. This one is for a stretch that is named by its two ends rather than by how long it is - a chapter's verses, a span of years - where starting at nothing means subtracting at every use and stopping short means the last one is quietly not there.");
  let count = subtract(last, first) + 1;
  let indices = numbers_up_to(count);
  function lambda(index) {
    let number = index + first;
    return number;
  }
  let numbers = list_map(indices, lambda);
  return numbers;
}
