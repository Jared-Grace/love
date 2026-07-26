import { list_size_1_assert_message } from "./list_size_1_assert_message.mjs";
import { list_first } from "./list_first.mjs";
export function list_single_message(list, message) {
  "The one thing in a list, complaining in the caller's own words when there is not exactly one";
  "Only the caller knows what the one thing was supposed to be, so only the caller can say what went wrong - a complaint that says a list was the wrong length names neither what was being looked for nor what to do about it";
  list_size_1_assert_message(list, message);
  let only = list_first(list);
  return only;
}
