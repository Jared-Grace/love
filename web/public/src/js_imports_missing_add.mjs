import {function_imports_add} from './function_imports_add.mjs';
import {js_imports_missing} from './js_imports_missing.mjs';
import {js_declaration_single} from './js_declaration_single.mjs';
export function js_imports_missing_add(ast) {
  let imports_missing = js_imports_missing(ast);
  function_imports_add(ast, imports_missing);
}
