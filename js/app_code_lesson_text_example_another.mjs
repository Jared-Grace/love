import { greater_than_equal } from "./greater_than_equal.mjs";
import { word_plural } from "./word_plural.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_text_example_another(lesson) {
  let example_count = property_get(lesson, "example_count");
  let plural = greater_than_equal(example_count, 2);
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
