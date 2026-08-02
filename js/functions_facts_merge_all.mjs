import { function_facts_merge } from "./function_facts_merge.mjs";
import { each } from "./each.mjs";
export function functions_facts_merge_all(facts_all, data) {
  "Fold what every file says about itself into one index.";
  "It is its own name because two callers want exactly this and nothing else around it - the one that always builds a fresh index, and the one that keeps an index between questions and folds again only when a file has changed.";
  function merge(facts) {
    function_facts_merge(facts, data);
  }
  each(facts_all, merge);
}
