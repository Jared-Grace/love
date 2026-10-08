import { arguments_assert } from "./arguments_assert.mjs";
import { html_document_fake_lambda } from "./html_document_fake_lambda.mjs";
import { storage_session_fake_lambda } from "./storage_session_fake_lambda.mjs";
export function app_code_lessons_fake_page_lambda(lambda) {
  arguments_assert(arguments, 1);
  ("Runs a program that draws lessons with a stand-in page and a stand-in for one tab's memory in place, which is all a lesson's telling reaches for outside the element it is drawn into.");
  ("Shared by every check that draws the tellings, so the checks cannot come to disagree about what a drawing is allowed to reach.");
  function on_page() {
    html_document_fake_lambda(lambda);
  }
  storage_session_fake_lambda(on_page);
}
