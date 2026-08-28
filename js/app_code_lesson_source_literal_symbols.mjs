import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { text_size } from "./text_size.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_text_operator_symbols } from "./app_code_lesson_text_operator_symbols.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { add } from "./add.mjs";
import { list_unique } from "./list_unique.mjs";
export function app_code_lesson_source_literal_symbols(source) {
  arguments_assert(arguments, 1);
  ("the operator symbols a function's source SPELLS - the code it puts on a card, not the sentences it says about itself. Splitting the source at every quote mark leaves the quoted pieces at the odd places, which is the whole of the parsing this needs.");
  ("A quoted piece longer than a line of code is one of this repo's prose paragraphs rather than a card, and prose is full of code written as an example of what the card must NOT be. Length is what tells the two apart without parsing anything, and twenty-eight characters is longer than every code line these lessons show.");
  ("A piece naming a module is dropped by name: an import line spells a path with a slash in it, and a slash read off an import would hand every file in the repo a divide it never shows.");
  let pieces = text_split(source, '"');
  let found = [];
  let index = 0;
  for (let piece of pieces) {
    let left = remainder(index, 2);
    let quoted = equal(left, 1);
    let a = text_size(piece);
    let short = less_than(a, 29);
    let module_named = text_ends_with(piece, ".mjs");
    let right = not(module_named);
    let right2 = and(short, right);
    let take = and(quoted, right2);
    if (take) {
      let symbols = app_code_lesson_text_operator_symbols(piece);
      list_add_multiple(found, symbols);
    }
    index = add(index, 1);
  }
  let unique = list_unique(found);
  return unique;
}
