import { visit_filter_async } from "../../../love/public/src/visit_filter_async.mjs";
import { tautology } from "../../../love/public/src/tautology.mjs";
export async function visit_async(node, children_get, on_each) {
  await visit_filter_async(node, children_get, tautology, on_each, []);
}
