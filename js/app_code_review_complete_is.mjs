import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_review_complete_is(reviews_complete, number) {
  "$plain number";
  "Whether this learner has finished the review standing under one lesson.";
  "The finished ones are handed in rather than read off the device here. The lesson list asks this once for every review it draws, and reading the device again for each of them would be one answer fetched twenty times over - the same shape the finished lessons are already passed down in, so the two rows of that list are built the same way.";
  arguments_assert(arguments, 2);
  let complete = list_includes(reviews_complete, number);
  return complete;
}
