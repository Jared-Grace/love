import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_source_code_pieces } from "./app_code_lesson_source_code_pieces.mjs";
import { app_code_lesson_text_operator_symbols } from "./app_code_lesson_text_operator_symbols.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_lesson_source_literal_symbols(source) {
  arguments_assert(arguments, 1);
  ("the operator symbols a function's source SPELLS - the code it puts on a card, not the sentences it says about itself.");
  ("Which quoted pieces count as a card rather than a sentence is decided in one place and asked for here, so the reading that asks whether a card's line is bracketed is looking at exactly the same pieces this one reads operators off.");
  let pieces = app_code_lesson_source_code_pieces(source);
  let found = [];
  for (let piece of pieces) {
    let symbols = app_code_lesson_text_operator_symbols(piece);
    list_add_multiple(found, symbols);
  }
  let unique = list_unique(found);
  return unique;
}
