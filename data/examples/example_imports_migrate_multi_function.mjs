import { file_imports_repair } from "../../js/file_imports_repair.mjs";
import { js_flo } from "../../js/js_flo.mjs";
export const example = {
  fn: file_imports_repair.name,
  args: ["js/two_sizes.mjs"],
  kind: "transform",
  title: "Repair imports across a whole multi-function file",
  note: [
    "A migration file can hold many declarations; program-wide repair adds every missing repo import — single-export ",
    { code: js_flo.name },
    " would fail here. Locally-declared names (",
    { code: "alpha" },
    ", ",
    { code: "beta" },
    ") are never self-imported.",
  ],
  before: `export function alpha(x) {
  return list_size(x);
}
export function beta(y) {
  return list_size(y);
}`,
  after: `import { list_size } from "./list_size.mjs";
export function alpha(x) {
  return list_size(x);
}
export function beta(y) {
  return list_size(y);
}`,
};
