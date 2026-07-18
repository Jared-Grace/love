import { js_imports_unused_remove } from "../../js/js_imports_unused_remove.mjs";
export const example = {
  tool: "prune",
  fn: js_imports_unused_remove.name,
  args: [],
  kind: "transform",
  title: "Remove an unused import",
  note: "prune drops only imports no code references — list_first is imported but never called, so its line goes; list_size stays because alpha uses it. This is the remove-only third of what auto does.",
  before: `import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
export function alpha(x) {
  return list_size(x);
}`,
  command: `prune`,
  after: `import { list_size } from "./list_size.mjs";
export function alpha(x) {
  return list_size(x);
}`,
};
