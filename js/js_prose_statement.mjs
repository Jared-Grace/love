import { text_combine } from "./text_combine.mjs";
import { js_code_string } from "./js_code_string.mjs";
export function js_prose_statement(sentence) {
  let code_string = js_code_string(sentence);
  let combined = text_combine(code_string, ";");
}
