import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_expression_try } from "./js_parse_expression_try.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_expression_parsed_meaning } from "./app_code_expression_parsed_meaning.mjs";
export function app_code_expression_code_meaning(code) {
  arguments_assert(arguments, 1);
  ("what a line of code as a learner reads it MEANS, got by handing the line to javascript and writing out what came back: 14 / 4 * 4 comes out ((14/4)*4)");
  ("A line javascript cannot read at all is the loudest fault there is, and it is one that has shipped: Math.floor3.8 * 5 stood on a lesson screen, and it is not a line of javascript. So a line that will not read is answered with a sentence saying so and quoting the line, rather than with nothing - a nothing would have to be tested for by whoever asked, and a test nobody remembers to make is a fault nobody hears about.");
  ("The sentence holds spaces, and no shape's meaning ever holds a space, so it can never be equal to one. That is what makes the unreadable line fail the comparison by construction instead of by a rule somebody has to write.");
  let node = js_parse_expression_try(code);
  let missing = null_is(node);
  if (missing) {
    let unreadable = text_combine_multiple([
      "not a line of javascript at all: ",
      code,
    ]);
    return unreadable;
  }
  let meaning = app_code_expression_parsed_meaning(node);
  return meaning;
}
