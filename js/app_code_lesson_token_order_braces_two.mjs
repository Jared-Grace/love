import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_token_order_braces_only } from "./app_code_lesson_token_order_braces_only.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_token_order_codes_generic } from "./app_code_lesson_token_order_codes_generic.mjs";
import { app_code_lesson_token_order_example_choose_braces_only } from "./app_code_lesson_token_order_example_choose_braces_only.mjs";
import { app_code_lesson_quiz_tokens_tap_braces_only } from "./app_code_lesson_quiz_tokens_tap_braces_only.mjs";
import { app_code_braces_two_batch } from "./app_code_braces_two_batch.mjs";
export function app_code_lesson_token_order_braces_two() {
  arguments_assert(arguments, 0);
  ("the order of the tokens with two pairs of braces: the same choosing as The order of the tokens, braces only, except every program has two pairs of braces, each pair in a colour of its own: two ifs one after the other, an if inside an if, and an if and its else");
  ("Asked for by the human 2026-10-10: a lesson like The order of the tokens, braces only, right before the first lesson that teaches two pairs of braces in the code, looking ahead to the kinds of two pairs of braces at once. Put straight after The order of the tokens, braces only, and straight before The same if twice, the first lesson whose programs hold two pairs.");
  ("Its programs are the three of The braces among the tokens, so the if inside an if and the else are seen here before the lessons that teach them; the opening says so, since only the order of the tokens is asked.");
  ("Rejected: also a while among the programs. It is taught much later, and the three kinds here are the ones the next lessons teach.");
  ("The writing is a first draft by Claude 2026-10-10.");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  function above(root, context) {
    "how this lesson differs from the lesson before, with a link to it, and that some of its code is taught later";
    let box = app_code_container_light_blue(root);
    let line = html_div(box);
    html_span_text_content(line, "This is the same as ");
    app_code_lesson_reference_draw(
      line,
      context,
      app_code_lesson_token_order_braces_only,
    );
    html_div_cycle_code(box, [
      "Except each program has two pairs of braces ",
      left,
      " ",
      right,
    ]);
    html_div_cycle_code(box, [
      "Some of this code is taught in later lessons. For now, only choose each token in order",
    ]);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The order of the tokens, two pairs of braces",
    "{ } { }",
  );
  let lesson = app_code_lesson_token_order_codes_generic(
    name_id,
    above,
    app_code_lesson_token_order_example_choose_braces_only,
    app_code_lesson_quiz_tokens_tap_braces_only,
    app_code_braces_two_batch,
  );
  return lesson;
}
