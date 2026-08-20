import { js_imports_unused_remove } from "../../js/js_imports_unused_remove.mjs";
import { list_first } from "../../js/list_first.mjs";
import { list_size } from "../../js/list_size.mjs";
import { js_imports_auto_relative } from "../../js/js_imports_auto_relative.mjs";
export const example = {
  fn: js_imports_unused_remove.name,
  args: [],
  kind: "transform",
  title: "Remove an unused import",
  note: [
    { fn: js_imports_unused_remove.name },
    " drops only imports no code references — ",
    { fn: list_first.name },
    " is imported but never called, so its line goes; ",
    { fn: list_size.name },
    " stays because ",
    { code: "alpha" },
    " uses it. This is the remove-only third of what ",
    { fn: js_imports_auto_relative.name },
    " does.",
  ],
  before: `import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
export function alpha(x) {
  return list_size(x);
}`,
  after: `import { list_size } from "./list_size.mjs";
export function alpha(x) {
  return list_size(x);
}`,
};
