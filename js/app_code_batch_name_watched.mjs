import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_code_name_watched } from "./app_code_code_name_watched.mjs";
import { app_code_batch_question_answer_fns } from "./app_code_batch_question_answer_fns.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
export function app_code_batch_name_watched(batch_original) {
  arguments_assert(arguments, 1);
  ("the questions and answers of a lesson whose programs end by writing out one name, asked instead with that name written out after every change");
  ("Every answer is several lines, one for each value the name took, so the answers are read as lines and not as one value.");
  function batch_watched() {
    "the programs, each writing out the name after every change";
    let codes = batch_original();
    let watched = list_map(codes, app_code_code_name_watched);
    return watched;
  }
  let batch = app_code_batch_question_answer_fns(
    batch_watched,
    eval_console_log_lines,
  );
  return batch;
}
