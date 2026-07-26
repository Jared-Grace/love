import { text_replace } from "./text_replace.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_string_statement(text) {
  "Some words as a statement holding nothing but those words - the shape this codebase writes its comments in. The backslash is escaped before the quote, because escaping the quote introduces backslashes of its own and doing it the other way round would escape those a second time.";
  let backslashed = text_replace(text, "\\", "\\\\");
  let quoted = text_replace(backslashed, '"', '\\"');
  let statement = text_combine_multiple(['"', quoted, '";']);
  return statement;
}
