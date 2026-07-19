import { js_atomize } from "../../js/js_atomize.mjs";
export const example = {
  fn: js_atomize.name,
  args: [],
  kind: "transform",
  title: "Flatten a nested call into a named local",
  note: [
    { fn: js_atomize.name },
    " lifts each inner call out of its argument slot into a ",
    { code: "let" },
    ", so every call reads on its own line. Simplicity is AST depth — one nested expression becomes two shallow statements.",
  ],
  before: `export function f(a) {
  return g(h(a));
}`,
  after: `export function f(a) {
  let v = h(a);
  return g(v);
}`,
};
