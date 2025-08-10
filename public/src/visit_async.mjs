import { tautology } from "./tautology.mjs";
import { visit_filter } from "./visit_filter.mjs";
export function visit_async(node, children_get, on_each) {
  visit_filter(node, children_get, tautology, on_each, []);
}
