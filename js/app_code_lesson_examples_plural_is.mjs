export function app_code_lesson_examples_plural_is(lesson) {
  "whether a lesson shows more than one example, so the words written about them are written in the plural";
  "Asked in one place because two separate sentences are written from the same answer - the name of the next one to come, and the line introducing the ones already there - and a lesson that changed its mind between the two would say both at once";
  let example_count = property_get(lesson, "example_count");
  let plural = greater_than_equal(example_count, 2);
  return plural;
}
