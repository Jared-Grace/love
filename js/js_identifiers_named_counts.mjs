import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_identifiers_nodes } from "./js_visit_identifiers_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
export function js_identifiers_named_counts(ast) {
  arguments_assert(arguments, 1);
  ("How many times each name is written down under this tree, kept as a map from the name to the count.");
  ("The plural sibling of counting one name. That one walks the whole tree for the single name it was asked about, so a caller holding a list of names walks the tree once for each of them - and the caller with the longest list is the sweep for names bound and never read, which asks about every name a function declares. One walk counts them all, because the walk is already looking at every name and only the tallying differs.");
  ("A map rather than a plain object, because the keys here are whatever somebody named a thing. An object already answers to `constructor` and `__proto__` without anyone putting them there, so a name that happens to be one of those would read as already counted, and a map has no words of its own.");
  ("A caller asking about one name still wants the sibling: building the whole map to read one entry is more work, not less.");
  let counts = new Map();
  function tally(node) {
    let name = property_get(node, "name");
    let known = counts.get(name);
    let first = equal(known, undefined);
    let count = first ? 1 : add_1(known);
    counts.set(name, count);
  }
  js_visit_identifiers_nodes(ast, tally);
  return counts;
}
