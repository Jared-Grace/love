export const example = {
  tool: "atomize",
  kind: "transform",
  title: "Flatten a nested call into a named local",
  note: "atomize lifts each inner call out of its argument slot into a let, so every call reads on its own line. Simplicity is AST depth — one nested expression becomes two shallow statements.",
  before: `export function f(a) {
  return g(h(a));
}`,
  command: `atomize`,
  after: `export function f(a) {
  let v = h(a);
  return g(v);
}`,
};
