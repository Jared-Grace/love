import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
export function app_code_lessons_review_since_helpers_had(
  helpers_shared_edited,
  names_before,
) {
  "Each group of shared helpers answered again with the lessons in it the learner already had.";
  "A GROUP OF SHARED HELPERS IS WORTH A PERSON'S TIME ONLY WHERE A LESSON THEY HAVE ALREADY READ STANDS ON IT. Where every lesson in the group is one of the new ones, the helper is part of the new writing and will be read with it - reported as a change it is the same work counted twice, and it is most of the list: the new lessons brought most of their own machinery with them.";
  "WHICH LESSONS IN THE GROUP THE LEARNER ALREADY HAD IS ANSWERED RATHER THAN THE YES OR NO, because the two are wanted in different places. The count orders the reading; the names say which screens to go and look at.";
  arguments_assert(arguments, 2);
  let helpers_annotated = [];
  for (let group of helpers_shared_edited) {
    let lessons_had = [];
    for (let lesson_name of property_get(group, "lessons")) {
      if (list_includes(names_before, lesson_name)) {
        lessons_had.push(lesson_name);
      }
    }
    helpers_annotated.push({
      count: property_get(group, "count"),
      lessons: property_get(group, "lessons"),
      helpers: property_get(group, "helpers"),
      had: list_size(lessons_had),
      lessons_had,
    });
  }
  return helpers_annotated;
}
