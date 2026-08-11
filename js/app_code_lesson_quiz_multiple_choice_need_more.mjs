import { arguments_assert } from "./arguments_assert.mjs";
import { list_size_less_than_value } from "./list_size_less_than_value.mjs";
import { less_than } from "./less_than.mjs";
import { and } from "./and.mjs";
export function app_code_lesson_quiz_multiple_choice_need_more(
  distractors,
  distractor_count,
  attempts,
  attempts_max,
) {
  arguments_assert(arguments, 4);
  let more = list_size_less_than_value(distractors, distractor_count);
  let room = less_than(attempts, attempts_max);
  let r = and(more, room);
  return r;
}
