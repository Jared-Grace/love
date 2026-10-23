import { list_concat } from "./list_concat.mjs";
import { app_code_complete_messages } from "./app_code_complete_messages.mjs";
import { list_random_item } from "./list_random_item.mjs";
export function app_code_review_complete_message() {
  "a random loving line shown when a review is fully completed; the celebration emoji either side of it is added by the celebration that draws it";
  let a = app_code_complete_messages("review");
  let messages = list_concat(a, ["You reviewed it all — well done"]);
  let message = list_random_item(messages);
  return message;
}
