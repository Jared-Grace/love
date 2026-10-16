import { set_includes_not } from "./set_includes_not.mjs";
export function set_add_try(set, item) {
  "puts an item in a set unless it is there already, and answers whether it was new";
  "The answer is the point, not a convenience. Asking first and adding second is the one way to tell the first sighting of something from a later one, and a caller that keeps only the first of each - the walk that finds a node once even where an import holds it twice - has nothing else to ask. That answer was dropped on 2026-10-06 and every cut and address that walks through an import line refused from then on, so nothing reading this should take a caller ignoring the answer as a sign nobody needs it.";
  let n = set_includes_not(set, item);
  if (n) {
    set.add(item);
  }
  return n;
}
