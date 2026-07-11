import { js_list_declarations_visitors } from "../../../love/public/src/js_list_declarations_visitors.mjs";
export function js_list_declarations_nodes(ast, lambda$v) {
  let list = js_list_declarations_visitors(ast, lambda$v);
  return list;
}
