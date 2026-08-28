import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_text_split_at_operators } from "./app_code_lesson_text_split_at_operators.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_text_operators_written(text) {
  arguments_assert(arguments, 1);
  ("every operator written in a piece of text, in the order they stand there, a repeat counted each time it is written.");
  ("One half of the walk that reads a line apart into its operators and the runs of text between them. Only the operators are wanted here, so the other half is dropped; the walking itself lives in one place, because the longest-first rule that keeps the == inside every === from being counted has to be got right once rather than wherever a caller happens to need it.");
  ("The reading that names each operator once is this one with the repeats dropped, and it is the older of the two. They were separated because a repeat is the whole of what one caller is asking about: 3 === 5 === false writes two operators and names one, and a reader who only ever hears the name cannot tell that line from 3 === 5, which is a different line teaching a different thing.");
  let split = app_code_lesson_text_split_at_operators(text);
  let operators = property_get(split, "operators");
  return operators;
}
