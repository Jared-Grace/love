import { js_imports_auto_relative } from "../../js/js_imports_auto_relative.mjs";
import { list_last } from "../../js/list_last.mjs";
import { list_first } from "../../js/list_first.mjs";
import { list_size } from "../../js/list_size.mjs";
export const example = {
  fn: js_imports_auto_relative.name,
  args: ["js/mixed_imports.mjs"],
  kind: "transform",
  title: "Auto-imports: add missing, remove unused, canonicalize paths",
  note: [
    { code: js_imports_auto_relative.name },
    " composes all three import verbs — ",
    { code: list_last.name },
    " (used, unimported) is added, ",
    { code: list_first.name },
    " (imported, unused) is removed, ",
    { code: list_size.name },
    " (wrong ",
    { code: "../../js/" },
    " path) is canonicalized to ",
    { code: "./" },
    ". Provably auto-safe: idempotent, total, state-independent.",
  ],
  before: `import { list_first } from "./list_first.mjs";
import { list_size } from "../../js/list_size.mjs";
export function alpha(x) {
  return list_size(x);
}
export function beta(y) {
  return list_last(y);
}`,
  after: `import { list_last } from "./list_last.mjs";
import { list_size } from "./list_size.mjs";
export function alpha(x) {
  return list_size(x);
}
export function beta(y) {
  return list_last(y);
}`,
};
