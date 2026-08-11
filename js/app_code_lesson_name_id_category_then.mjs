import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_name_id_category_then(rights, left, paint) {
  arguments_assert(arguments, 3);
  ("A lesson name and id whose home title opens with the category word and then whatever else is handed in.");
  ("Fifty lessons were each writing the same three-deep nest to say that: a title maker returning a painter, whose first line writes the category. Only the lines after that first one ever differed, so only those are asked for here, as paint.");
  ("The title maker is handed the lesson name and the capitalised category word, in that order, and it is the second of those the category line wants. So the name has to be received to reach the word standing behind it, and it goes unread. Written here once, that is one unread name in the repo rather than fifty.");
  function title_get(lesson_name, left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      paint(parent);
    }
    return render;
  }
  let name_id = app_code_lesson_name_id_generic(rights, left, title_get);
  return name_id;
}
