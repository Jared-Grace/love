import { tautology } from "../../../love/public/src/tautology.mjs";
import { visit_filter } from "../../../love/public/src/visit_filter.mjs";
export function visit(node, children_get, on_each) {
  visit_filter(node, children_get, tautology, on_each, []);
}
