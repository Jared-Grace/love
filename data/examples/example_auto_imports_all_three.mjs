import { js_imports_auto_relative } from "../../js/js_imports_auto_relative.mjs";
export const example = {
  tool: "auto",
  fn: js_imports_auto_relative.name,
  args: ["js/mixed_imports.mjs"],
  kind: "transform",
  title: "Auto-imports: add missing, remove unused, canonicalize paths",
  note: "auto composes all three import verbs — list_last (used, unimported) is added, list_first (imported, unused) is removed, list_size (wrong ../../js/ path) is canonicalized to ./. Provably auto-safe: idempotent, total, state-independent.",
  before: `import { list_first } from "./list_first.mjs";
import { list_size } from "../../js/list_size.mjs";
export function alpha(x) {
  return list_size(x);
}
export function beta(y) {
  return list_last(y);
}`,
  command: `auto js/mixed_imports.mjs`,
  after: `import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
export function alpha(x) {
  return list_size(x);
}
export function beta(y) {
  return list_last(y);
}`,
};
