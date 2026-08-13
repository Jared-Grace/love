import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_operator_part_around(code, symbol) {
  arguments_assert(arguments, 2);
  ("the two-sided part of a line built around one operator, asked for by that operator's symbol: given 1 + 2 * 4 and *, the part 2 * 4");
  ("the tokenizer rather than a search through the characters, so a digit is one token and each side of the symbol is a whole number rather than whatever character happens to sit next to it");
  ("the first place the symbol occurs. A line holding the same operator twice has two such parts and this would quietly name only the earlier - callers that can generate one need to say which they mean rather than lean on the order here");
  let tokens = app_code_quiz_tokens(code);
  let index = list_index_of(tokens, symbol);
  let index2 = subtract(index, 1);
  let left = list_get(tokens, index2);
  let index3 = add(index, 1);
  let right = list_get(tokens, index3);
  let part = app_code_operator_code(left, symbol, right);
  return part;
}
