import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_complete_messages } from "./app_code_complete_messages.mjs";
import { app_code_celebration } from "./app_code_celebration.mjs";
export function app_code_milestone_celebration(parent) {
  arguments_assert(arguments, 1);
  ("the large end-of-milestone celebration, carrying a random loving line about the milestone");
  let list = app_code_complete_messages("milestone");
  let message = list_random_item(list);
  app_code_celebration(parent, message);
}
