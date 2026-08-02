import { js_parse_statement } from "./js_parse_statement.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_string } from "./js_code_string.mjs";
export function js_prose_statement(sentence) {
  "One sentence of a function own account of itself built as the real statement this repo writes an explanation as";
  let code_string = js_code_string(sentence);
  let combined = text_combine(code_string, ";");
  let statement = js_parse_statement(combined);
  return statement;
}
