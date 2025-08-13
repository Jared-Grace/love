import { js_visit } from "./js_visit.mjs";
export function js_call_fill(ast) {
  js_visit(ast, (v) => {});
}
