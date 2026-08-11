import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_name_id_category_then(rights, left, paint) {
  arguments_assert(arguments, 3);
  ("A lesson name and id whose home title opens with the category word and then whatever else is handed in.");
  ("Fifty lessons were each writing the same three-deep nest to say that: a title maker returning a painter, whose first line writes the category. Only the lines after that first one ever differed, so only those are asked for here, as paint.");
  ("The title maker is handed the capitalised category word, which is what the category line wants. It used to be handed a written-out lesson name ahead of that word, which fifty makers each had to receive and none ever read; collapsing them here left one place still receiving it, so the word it stood in front of could be handed over on its own and the name stopped being made at all.");
  function title_get(left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      paint(parent);
    }
    return render;
  }
  let name_id = app_code_lesson_name_id_generic(rights, left, title_get);
  return name_id;
}
