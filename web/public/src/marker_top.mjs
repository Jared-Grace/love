import {function_imports_add} from './function_imports_add.mjs';
import {js_imports_missing} from './js_imports_missing.mjs';
import {data_function_current_get} from './data_function_current_get.mjs';
import {object_property_get} from './object_property_get.mjs';
import {data_get} from './data_get.mjs';
import {function_transform} from "./function_transform.mjs";
import {list_add_first} from "./list_add_first.mjs";
import {js_parse_statement} from "./js_parse_statement.mjs";
import {js_code_call_statement} from "./js_code_call_statement.mjs";
import {marker} from "./marker.mjs";
import {js_code_call} from "./js_code_call.mjs";
import {log} from "./log.mjs";
import {js_declaration_single} from "./js_declaration_single.mjs";
import {function_parse} from "./function_parse.mjs";
import {list_add} from "./list_add.mjs";
export async function marker_top() {
  let f_name = await data_function_current_get();
  await function_transform(f_name, lambda);
  function lambda(ast) {
    let declaration = js_declaration_single(ast);
    let {body} = declaration;
    let {body: body2} = body;
    let code = js_code_call_statement(marker.name);
    let parsed = js_parse_statement(code);
    list_add_first(body2, parsed);
    let imports_missing = js_imports_missing(ast, declaration);
    function_imports_add(ast, imports_missing);
  }
}
