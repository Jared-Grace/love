import { list_adder_unique_sets } from "./list_adder_unique_sets.mjs";
import { function_facts_merge_with } from "./function_facts_merge_with.mjs";
import { each } from "./each.mjs";
export function functions_facts_merge_all(facts_all, data) {
  "Fold what every file says about itself into one index.";
  "It is its own name because two callers want exactly this and nothing else around it - the one that always builds a fresh index, and the one that keeps an index between questions and folds again only when a file has changed.";
  "One adder remembers what each list holds across every file, which answers the same as scanning but does not look through a list of thousands again for each file using that name. Nothing else can change a list while this runs, since the fold never waits on anything.";
  let adder = list_adder_unique_sets();
  function merge(facts) {
    function_facts_merge_with(facts, data, adder);
  }
  each(facts_all, merge);
}
