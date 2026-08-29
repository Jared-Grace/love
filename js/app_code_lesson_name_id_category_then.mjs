import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
export function app_code_lesson_name_id_category_then(left, paint) {
  arguments_assert(arguments, 2);
  ("A lesson name whose home title opens with the category word and then whatever else is handed in.");
  ("Fifty lessons were each writing the same three-deep nest to say that: a title maker returning a painter, whose first line writes the category. Only the lines after that first one ever differed, so only those are asked for here, as paint.");
  ("The title maker is handed the capitalised category word, which is what the category line wants. It used to be handed a list of the lesson's own words ahead of that word as well, and that list was what the lesson's id was built out of. Ids are written down under each lesson's function name now, so the list was read by nobody and came off here and off every caller in one move.");
  ("A wrapper that paints its words into the title still receives them - that is a title, not an id. What went is the second, silent use the same list was being put to.");
  function title_get(left_upper) {
    function render(parent) {
      app_code_lesson_name_id_category(parent, left_upper);
      paint(parent);
    }
    return render;
  }
  let name_id = app_code_lesson_name_id_generic(left, title_get);
  return name_id;
}
