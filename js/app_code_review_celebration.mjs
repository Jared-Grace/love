import { app_code_review_complete_message } from "./app_code_review_complete_message.mjs";
import { app_code_celebration } from "./app_code_celebration.mjs";
export function app_code_review_celebration(parent) {
  "the large end-of-review celebration, carrying a random loving line about the review";
  let message = app_code_review_complete_message();
  app_code_celebration(parent, message);
}
