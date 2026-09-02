import { arguments_assert } from "./arguments_assert.mjs";
import { qa_attribute_test_quiz_correct } from "./qa_attribute_test_quiz_correct.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_attribute_get } from "./html_attribute_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { add } from "./add.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_data_test_quiz_correct_bump() {
  "say that one more quiz question has just been answered right, by adding one to the count the page carries";
  "It is called where the answer is WRITTEN DOWN and not where it is drawn green, so what a walk waits on is the record being made rather than the celebration being shown - the two are half a second apart and only the first of them is what finishing a question means.";
  arguments_assert(arguments, 0);
  let key = qa_attribute_test_quiz_correct();
  let body = html_document_body();
  let had = html_attribute_get(body, key);
  let opened = null_is(had);
  let before = 0;
  let counted = not(opened);
  if (counted) {
    before = number_from_text(had);
  }
  let after = add(before, 1);
  let written = text_from_number(after);
  html_attribute_set(body, key, written);
}
