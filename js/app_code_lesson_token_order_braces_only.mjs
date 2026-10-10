import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_token_order_braces_colored } from "./app_code_lesson_token_order_braces_colored.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_token_order_generic } from "./app_code_lesson_token_order_generic.mjs";
import { app_code_lesson_token_order_example_choose_braces_only } from "./app_code_lesson_token_order_example_choose_braces_only.mjs";
import { app_code_lesson_quiz_tokens_tap_braces_only } from "./app_code_lesson_quiz_tokens_tap_braces_only.mjs";
export function app_code_lesson_token_order_braces_only() {
  arguments_assert(arguments, 0);
  ("the order of the tokens with only the braces written out: the same choosing as The order of the tokens, braces colored, except under the code only the braces chosen are shown, in their colours, and not every token chosen");
  ("Asked for by the human 2026-10-10: another lesson that shows only the braces below and not all the tokens. Put straight after The order of the tokens, braces colored, so the learner has first seen the braces line beside the line of every token, and is then left with the braces line alone.");
  ("It is close to The braces among the tokens, which also shows only the braces, but there the braces are not coloured and the programs hold an if inside an if; here the programs are the one-if ones the lessons before use.");
  ("The writing is a first draft by Claude 2026-10-10.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let braces = list_join_space([left, right]);
  function above(root, context) {
    "the one thing this lesson changes from the lesson before, with a link to it";
    let box = app_code_container_light_blue(root);
    let line = html_div(box);
    html_span_text_content(line, "This is the same as ");
    app_code_lesson_reference_draw(
      line,
      context,
      app_code_lesson_token_order_braces_colored,
    );
    html_div_cycle_code(box, [
      "Except only the ",
      left,
      " ",
      right,
      " chosen are shown below",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The order of the tokens, braces only",
    braces,
  );
  let lesson = app_code_lesson_token_order_generic(
    name_id,
    above,
    app_code_lesson_token_order_example_choose_braces_only,
    app_code_lesson_quiz_tokens_tap_braces_only,
  );
  return lesson;
}
