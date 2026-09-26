import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_decoy_lines_each_everywhere } from "./app_code_lesson_decoy_lines_each_everywhere.mjs";
import { app_code_lesson_decoy_lines_reversed } from "./app_code_lesson_decoy_lines_reversed.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_lesson_statement_name_watch_decoys(question, answer) {
  arguments_assert(arguments, 2);
  ("the tempting wrong answers for a screen that writes out one name before and after it changes: the name read as holding its first number both times, as holding its last number both times, and the two answers the other way round");
  ("The two where the name holds one thing throughout come first, because they are the mistake this screen is about: a name holds what it was last given at the moment it is read, not one thing for the whole program. The reversed one comes last; it is the mistake of the lesson on writing out twice, met again.");
  let everywhere = app_code_lesson_decoy_lines_each_everywhere(
    question,
    answer,
  );
  let reversed = app_code_lesson_decoy_lines_reversed(question, answer);
  let decoys = list_concat(everywhere, reversed);
  return decoys;
}
