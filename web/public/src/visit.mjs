import { tautology } from "./tautology.mjs";
export function visit(node, children_get, on_each) {
visit_filter(node, children_get, tautology, on_each)
}
