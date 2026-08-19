import { list_size_equal } from "./list_size_equal.mjs";
import { property_get } from "./property_get.mjs";
import { js_visit_returns } from "./js_visit_returns.mjs";
import { list_adder } from "./list_adder.mjs";
import { not } from "./not.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
export function js_find_return_try(ast) {
  "The one place a tree hands a value back, and nothing at all when it hands one back in more than one place or in none. Read-only, pure.";
  "Its neighbour insists on exactly one and throws otherwise, which is right for a transform: a transform is told which function to work on, so a second return there is the author's mistake and stopping is the kindest thing to do about it. A reading is in the opposite position. It arrives at a name it did not choose and has no opinion about, and most of what it arrives at is an ordinary function that happens to hold a lambda - so a second return is the ordinary case rather than a fault, and throwing turns a question into a stopped gate.";
  "A tree holding a lambda holds that lambda's return too, and nothing here tells the two apart. That is deliberate: the callers ask this about small functions written to hand one written thing back, and a tree with a lambda in it is not one of those, so answering nothing about it is right rather than merely safe.";
  function lambda(la) {
    js_visit_returns(ast, la);
  }
  let nodes = list_adder(lambda);
  let one = list_size_equal(nodes, 1);
  if (not(one)) {
    return null;
  }
  let only = list_get_or_null(nodes, 0);
  let node = property_get(only, "node");
  return node;
}
