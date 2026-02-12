import { js_code_declaration } from "../../../love/public/src/js_code_declaration.mjs";
import { js_parse } from "../../../love/public/src/js_parse.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function js_parse_statement(code) {
  let code_d = js_code_declaration("a", code, true);
  let { body } = js_parse(code_d);
  let { body: block } = list_first(body);
  let { body: statements } = block;
  const statement = list_first(statements);
  return statement;
}
