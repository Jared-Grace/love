import {js_type} from './js_type.mjs';
export function js_imports_all(ast) {
  return js_type(ast, "ImportDeclaration");
}
