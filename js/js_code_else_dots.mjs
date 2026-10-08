import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_else } from "./js_keyword_else.mjs";
import { js_code_block_dots } from "./js_code_block_dots.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_else_dots() {
  arguments_assert(arguments, 0);
  ("an else with its lines left out as three dots, for a sentence to name it: else { ... }");
  let keyword = js_keyword_else();
  let block = js_code_block_dots();
  let code = text_combine_multiple([keyword, " ", block]);
  return code;
}
