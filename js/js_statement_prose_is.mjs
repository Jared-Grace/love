import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_string_is } from "./js_statement_string_is.mjs";
import { js_statement_prose_sequence_is } from "./js_statement_prose_sequence_is.mjs";
import { js_statement_prose_template_is } from "./js_statement_prose_template_is.mjs";
export function js_statement_prose_is(node) {
  "Whether a line is a paragraph written for a reader rather than work the machine does, in any of the three shapes this repo writes one in.";
  "THREE SHAPES SAY THE SAME THING. A string standing on its own is how a comment is written here, because the normalize pass deletes the real kind. A bracket and commas turn a paragraph into a pair so a function name can be written as a name rather than as letters. Backticks do the same with gaps in a sentence. Which of the three a paragraph is written in is a fact about the writer's day, not about the line.";
  "ASKING IT IN ONE PLACE IS THE POINT. The three were spelled out one after another wherever anybody needed the question, so a fourth shape - or a correction to one of the three - would have had to be remembered in every one of those places.";
  arguments_assert(arguments, 1);
  let alone_is = js_statement_string_is(node);
  if (alone_is) {
    return true;
  }
  let pair_is = js_statement_prose_sequence_is(node);
  if (pair_is) {
    return true;
  }
  let gap_is = js_statement_prose_template_is(node);
  return gap_is;
}
