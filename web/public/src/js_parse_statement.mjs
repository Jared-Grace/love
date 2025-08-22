import { js_code_declaration } from "./js_code_declaration.mjs";
import { js_parse } from "./js_parse.mjs";
import { list_first } from "./list_first.mjs";
export function js_parse_statement(code) {
  let code2 = js_code_declaration("a", code, true);
  let ast = js_parse(code2);
  let { body } = ast;
  let declaration = list_first(body);
  let { body: block } = declaration;
  let { body: statements } = block;
  const statement = list_first(statements);
  return statement;
}
