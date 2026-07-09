import { word_plural } from "../../../love/public/src/word_plural.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_code_lesson_text_example_another(lesson) {
  let example_count = property_get(lesson, "example_count");
  const plural = example_count >= 2;
  const root_word = "example";
  let another = null;
  if (plural) {
    another = text_combine("some more ", word_plural(root_word));
  } else {
    another = text_combine("another ", root_word);
  }
  return another;
}
