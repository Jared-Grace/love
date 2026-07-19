import { js_imports_paths_fix } from "../../js/js_imports_paths_fix.mjs";
import { js_imports_auto_relative } from "../../js/js_imports_auto_relative.mjs";
export const example = {
  fn: js_imports_paths_fix.name,
  args: [],
  kind: "transform",
  title: "Canonicalize import paths",
  note: [
    { fn: js_imports_paths_fix.name },
    " rewrites every import to its canonical repo path — here ",
    { code: "../../js/" },
    " becomes ",
    { code: "./" },
    " — adding and removing nothing. It is the canonicalize third of ",
    { fn: js_imports_auto_relative.name },
    ", shown alone.",
  ],
  before: `import { list_size } from "../../js/list_size.mjs";
export function f(x) {
  return list_size(x);
}`,
  after: `import { list_size } from "./list_size.mjs";
export function f(x) {
  return list_size(x);
}`,
};
