import { list_random_item } from "./list_random_item.mjs";
export function app_code_review_complete_message() {
  "a random loving line shown when a review is fully completed; the celebration emoji either side of it is added by the celebration that draws it";
  let messages = [
    "You passed every quiz in this review — beautiful work",
    "You finished the whole review — wonderful job",
    "You reviewed it all — well done",
    "Every question complete — you did it",
    "All the way through — you should be proud",
    "You made it through the whole review — amazing",
  ];
  let message = list_random_item(messages);
  return message;
}
