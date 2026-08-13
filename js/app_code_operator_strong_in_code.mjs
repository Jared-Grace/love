import { text_combine } from "./text_combine.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_single_message } from "./list_single_message.mjs";
export function app_code_operator_strong_in_code(code) {
  "$plain code";
  "The operator in one line that is solved before the other: for 1 + 2 * 4 the *, and for 6 - 8 / 2 the /.";
  "Read back off the line rather than handed over by whatever built it, the same way the answer to the lesson is. The generator arranges a line and this reads the arrangement, so the two agree because they are about the same text - handed over instead they would be two records of one fact, and either could drift.";
  "The tokenizer rather than a search through the characters, so a symbol is found only where it stands as an operator.";
  "Exactly one, and it complains rather than guessing when there is not. A line mixing two of the tighter operators has no single answer here, and a line holding none was never the shape this reads - either way, quietly naming the first one found would hand a lesson a right button that is wrong.";
  arguments_assert(arguments, 1);
  let tokens = app_code_quiz_tokens(code);
  let symbols = app_code_operators_strong();
  function present(symbol) {
    "whether this line uses that operator";
    let used = list_includes(tokens, symbol);
    return used;
  }
  let found = list_filter(symbols, present);
  let message = text_combine(
    "this line was expected to hold exactly one of the operators that are solved first, so that one part of it clearly goes before the other - would you like to check the line, which is: ",
    code,
  );
  let only = list_single_message(found, message);
  return only;
}
