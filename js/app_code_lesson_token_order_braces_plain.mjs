import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_two_batch } from "./app_code_braces_two_batch.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { app_code_lesson_braces_among_plain_generic } from "./app_code_lesson_braces_among_plain_generic.mjs";
import { app_code_lesson_token_order_braces } from "./app_code_lesson_token_order_braces.mjs";
export function app_code_lesson_token_order_braces_plain() {
  arguments_assert(arguments, 0);
  ("the braces among the tokens, with no colours: the braces of a program are written down in the order they are read, as in the lesson before, but now no pair wears a colour, so the learner finds every brace by reading alone");
  ("Asked for by the human 2026-10-11, straight after The braces among the tokens, as the same lesson with its colours taken away.");
  ("Rejected 2026-10-11: a lesson between the two with the code coloured and the braces written plain. The order of the braces comes from reading alone, and which brace pairs with which does not change it, so colours on the code could only have shown where the braces stand, which in a program with two pairs is the end of a line.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let batch = app_code_batch_question_answer_fns(
    app_code_braces_two_batch,
    app_code_braces_sequence,
  );
  let name_id = app_code_lesson_statement_title_name_id(
    "The braces among the tokens, with no colors",
    "{ { } }",
  );
  let nested = app_code_braces_two_nested();
  let lesson = app_code_lesson_braces_among_plain_generic(
    name_id,
    app_code_lesson_token_order_braces,
    nested,
    batch,
  );
  return lesson;
}
