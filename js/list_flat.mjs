import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
export function list_flat(nested) {
  "One list holding everything the lists inside another list hold, met in the order they are written.";
  "It goes one level down and stops there. A list of lists is the shape that comes back from asking a question of every item and getting several answers each, and that shape has one level to lose; going all the way down instead would be a different question, and a list that happens to hold a list would silently be taken apart by it.";
  "It was named before it was written - a lesson asked for it by name and no repo held a file for it, which stopped the walk that reads what every function imports and turned a gate red for everybody. The name was the right one, so the answer is the file rather than a different call.";
  arguments_assert(arguments, 1);
  let r = [];
  for (let inner of nested) {
    for (let item of inner) {
      list_add(r, item);
    }
  }
  return r;
}
