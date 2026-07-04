import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_text_example_another(lesson) {
  let example_count = property_get(lesson, "example_count");
  const plural = example_count >= 2;
  const root_word = "example";
  let another = null;
  if (plural) {
    another = "some more " + root_word + "s:";
  } else {
    another = "another " + root_word + ":";
  }
}
