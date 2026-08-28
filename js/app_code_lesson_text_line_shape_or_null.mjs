import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_text_operators_written } from "./app_code_lesson_text_operators_written.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { digits } from "./digits.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { text_includes } from "./text_includes.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_text_line_shape_or_null(text) {
  arguments_assert(arguments, 1);
  ("whether a piece of text is a line of code with more than one operator in it and, when it is, whether that line is written BRACKETED or FLAT. Nothing comes back for a piece that is not such a line.");
  ("Bracketed and flat are two different things to be taught, not two ways of writing one thing. false !== (3 === 3) says which comparison is solved first; 2 !== 2 === false leaves that to the rule about working left to right, which is a rule the learner has to have been given. A lesson that only ever shows the first and then asks about the second has told nobody the thing it is asking about - the fault a person reading lesson eighty-nine reported, in those words.");
  ("Two operators is what makes the question exist at all. One operator has nothing to be solved before anything else, so a bracket around it changes no answer and its presence or absence teaches nothing here.");
  ("A digit or a true or a false is what tells a line of code from a sentence about code. The pieces reaching this have already been cut to card length, so what is left to reject is the short sentence that spells an operator while saying something about it rather than showing it.");
  let written = app_code_lesson_text_operators_written(text);
  let count = list_size(written);
  let several = greater_than(count, 1);
  let one_only = not(several);
  if (one_only) {
    return null;
  }
  let t = js_keyword_true();
  let f = js_keyword_false();
  let words = [];
  let items = digits();
  list_add_multiple(words, items);
  list_add_multiple(words, [t, f]);
  let operand = text_includes_any(text, words);
  let sentence = not(operand);
  if (sentence) {
    return null;
  }
  let open = js_code_parenthesis_left();
  let bracketed = text_includes(text, open);
  let shape = ternary(bracketed, "bracketed", "flat");
  return shape;
}
