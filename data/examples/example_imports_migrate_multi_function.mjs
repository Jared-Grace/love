export const example = {
  tool: "imports",
  kind: "transform",
  title: "Repair imports across a whole multi-function file",
  note: "A migration file can hold many declarations; program-wide repair adds every missing repo import — single-export js_flo would fail here. Locally-declared names (alpha, beta) are never self-imported.",
  before: `export function alpha(x) {
  return list_size(x);
}
export function beta(y) {
  return list_size(y);
}`,
  command: `imports js/two_sizes.mjs`,
  after: `import { list_size } from "./list_size.mjs";
export function alpha(x) {
  return list_size(x);
}
export function beta(y) {
  return list_size(y);
}`,
};
