import { function_transform_marker_arg } from "./function_transform_marker_arg.mjs";
import { js_marker_named_ast } from "./js_marker_named_ast.mjs";
export function js_marker_named_ast_arg(ast, m_name_to) {
  let marker_v_to = js_marker_named_ast(ast, m_name_to);
  let a_to = function_transform_marker_arg(marker_v_to, ast);
  return a_to;
}
