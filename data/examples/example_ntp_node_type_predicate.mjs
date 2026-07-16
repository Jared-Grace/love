export const example = {
  tool: "ntp",
  kind: "transform",
  title: "Generate a node-type predicate from scratch",
  note: "ntp creates a new js_<X>_is predicate; 'before' is empty because nothing existed. Runs file-side (sandboxed) — see the app or the temp-file runner.",
  before: ``,
  command: `ntp js_return_is ReturnStatement`,
  after: `import { js_node_type_is } from "./js_node_type_is.mjs";
export function js_return_is(node) {
  let is = js_node_type_is(node, "ReturnStatement");
  return is;
}`,
};
