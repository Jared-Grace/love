import {log} from './log.mjs';
import {list_get_end} from './list_get_end.mjs';
import {js_visit_type} from './js_visit_type.mjs';
import {list_add_first} from './list_add_first.mjs';
import {js_parse_statement} from './js_parse_statement.mjs';
import {js_code_call_statement} from './js_code_call_statement.mjs';
import {js_declaration_single} from './js_declaration_single.mjs';
import {function_transform} from './function_transform.mjs';
import {marker} from './marker.mjs';
export async function marker_remove(f_name) {
  marker();
  await function_transform(f_name, lambda);
  function lambda(ast) {
    js_visit_type(ast, 'CallExpression', v => {
      let {stack} = v;
      let s2 = list_get_end(stack, 2);
      log(s2);
    });
  }
}
