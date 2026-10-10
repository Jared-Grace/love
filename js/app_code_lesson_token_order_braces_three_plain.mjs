import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { app_code_braces_three_batch } from "./app_code_braces_three_batch.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_braces_three_programs } from "./app_code_braces_three_programs.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_lesson_braces_among_plain_generic } from "./app_code_lesson_braces_among_plain_generic.mjs";
import { app_code_lesson_token_order_braces_three } from "./app_code_lesson_token_order_braces_three.mjs";
export function app_code_lesson_token_order_braces_three_plain() {
  arguments_assert(arguments, 0);
  ("the braces among the tokens, three pairs, with no colours: as The braces among the tokens, three pairs, with its colours taken away, so the learner finds every brace by reading alone");
  ("Asked for by the human 2026-10-11, straight after The braces among the tokens, three pairs, as The braces among the tokens, with no colors is straight after The braces among the tokens.");
  ("The writing is a first draft by Claude 2026-10-11.");
  let batch = app_code_batch_question_answer_fns(
    app_code_braces_three_batch,
    app_code_braces_sequence,
  );
  let name_id = app_code_lesson_statement_title_name_id(
    "The braces among the tokens, three pairs, with no colors",
    "{ { } } { }",
  );
  let programs = app_code_braces_three_programs();
  let after_nested = list_get(programs, 1);
  let lesson = app_code_lesson_braces_among_plain_generic(
    name_id,
    app_code_lesson_token_order_braces_three,
    after_nested,
    batch,
  );
  return lesson;
}
