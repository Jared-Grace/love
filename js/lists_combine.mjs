import { each } from "./each.mjs";
import { list_adder_multiple } from "./list_adder_multiple.mjs";
export function lists_combine(lists) {
  "Several lists read end to end as one, keeping every item where it stood.";
  "The sibling of joining pieces of text into one text, and named after it for that reason: the same idea a level up, where the pieces are lists rather than words.";
  function lambda(la) {
    each(lists, la);
  }
  let combined = list_adder_multiple(lambda);
  return combined;
}
