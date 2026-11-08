import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_learn_js_complete_messages } from "./app_learn_js_complete_messages.mjs";
import { app_learn_js_celebration } from "./app_learn_js_celebration.mjs";
export function app_learn_js_milestone_celebration(parent) {
  arguments_assert(arguments, 1);
  ("the large end-of-milestone celebration, carrying a random loving line about the milestone");
  let list = app_learn_js_complete_messages("milestone");
  let message = list_random_item(list);
  app_learn_js_celebration(parent, message);
}
