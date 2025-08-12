import { js_visit } from "./js_visit.mjs";
export function js_dollar(ast) {
  js_visit(ast, (v) => {});
}
