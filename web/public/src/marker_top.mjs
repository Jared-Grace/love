import {function_unparse} from './function_unparse.mjs';
import {list_add_first} from './list_add_first.mjs';
import {js_parse_statement} from './js_parse_statement.mjs';
import {js_code_call_statement} from './js_code_call_statement.mjs';
import {marker} from './marker.mjs';
import {js_code_call} from './js_code_call.mjs';
import {log} from './log.mjs';
import {js_declaration_single} from './js_declaration_single.mjs';
import {function_parse} from './function_parse.mjs';
import {list_add} from './list_add.mjs';
export async function marker_top(f_name) {
  marker();
  await function_transform(f_name, lambda);
function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let { body } = declaration;
    let { body: body2 } = body;
    let code = js_code_call_statement(marker.name);
    let parsed = js_parse_statement(code);
    list_add_first(body2, parsed);
}
}

async function function_transform(f_name, lambda) {
    let ast = await function_parse(f_name);
    lambda(ast);
    await function_unparse(f_name, ast);
}

