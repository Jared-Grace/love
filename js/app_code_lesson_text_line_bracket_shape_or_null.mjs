import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_text_operators_written } from "./app_code_lesson_text_operators_written.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_text_line_code_is } from "./app_code_lesson_text_line_code_is.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { text_includes } from "./text_includes.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_text_line_bracket_shape_or_null(text) {
  arguments_assert(arguments, 1);
  ("whether a line of code with more than one operator in it is written BRACKETED or FLAT. Nothing comes back for a piece that is not such a line.");
  ("Bracketed and flat are two different things to be taught, not two ways of writing one thing. false !== (3 === 3) says which comparison is solved first; 2 !== 2 === false leaves that to the rule about working left to right, which is a rule the learner has to have been given. A lesson that only ever shows the first and then asks about the second has told nobody the thing it is asking about - the fault a person reading lesson eighty-nine reported, in those words.");
  ("Two operators is what makes the question exist at all. One operator has nothing to be solved before anything else, so a bracket around it changes no answer and its presence or absence teaches nothing here.");
  ("Whether the piece is a line of code at all is asked in one place shared with every other mark read off a line, so that all of them are reading the same set of lines.");
  let written = app_code_lesson_text_operators_written(text);
  let several = list_size_greater_than(written, 1);
  let one_only = not(several);
  if (one_only) {
    return null;
  }
  let code_is = app_code_lesson_text_line_code_is(text);
  let sentence = not(code_is);
  if (sentence) {
    return null;
  }
  let open = js_code_parenthesis_left();
  let bracketed = text_includes(text, open);
  let shape = ternary(bracketed, "bracketed", "flat");
  return shape;
}
