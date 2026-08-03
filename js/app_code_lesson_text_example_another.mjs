import { app_code_lesson_examples_plural_is } from "./app_code_lesson_examples_plural_is.mjs";
import { word_plural } from "./word_plural.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_text_example_another(lesson) {
  let plural = app_code_lesson_examples_plural_is(lesson);
  let root_word = "example";
  let another = null;
  if (plural) {
    let right = word_plural(root_word);
    another = text_combine("some more ", right);
  } else {
    another = text_combine("another ", root_word);
  }
  return another;
}
