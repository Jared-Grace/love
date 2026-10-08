import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_code_block_dots } from "./js_code_block_dots.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_if_dots(condition) {
  arguments_assert(arguments, 1);
  ("an if with its lines left out as three dots, written on one line, for a sentence to name the whole if: if (condition) { ... }");
  ("Asked for by the human 2026-10-08: a sentence about code names the code it means, never the first part or the outer part, since a pronoun is a step the reader has to work out. The dots stand for the lines inside, so the if is named without being written out again.");
  let keyword = js_keyword_if();
  let wrapped = js_code_wrap_parenthesis(condition);
  let block = js_code_block_dots();
  let code = text_combine_multiple([keyword, " ", wrapped, " ", block]);
  return code;
}
