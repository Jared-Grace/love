import {list_add_first} from './list_add_first.mjs';
import {js_parse_statement} from './js_parse_statement.mjs';
import {function_name_to_base} from './function_name_to_base.mjs';
import {each} from './each.mjs';
export function function_imports_add(ast, imports) {
  let {body} = ast;
  each(imports, import_ => {
    let code = "import { " + import_ + " } from './" + function_name_to_base(import_) + "'";
    let statement = js_parse_statement(code);
    list_add_first(body, statement);
  });
}
