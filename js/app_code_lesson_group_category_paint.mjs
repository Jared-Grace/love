import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_group_parts_at } from "./app_code_lesson_group_parts_at.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_lesson_group_words } from "./app_code_lesson_group_words.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
export function app_code_lesson_group_category_paint(parent, lesson_index) {
  arguments_assert(arguments, 2);
  ("the name of the group the lesson at lesson_index sits under on the home list, in words alone with a colon, styled the way a lesson's category word always was, into parent - the lesson heading's Branching: where every if lesson used to say Statements");
  ("Asked for by the human 2026-10-18: the group is named instead of the category, and the home list, which already shows the group as the card a row sits in, shows neither.");
  let parts = app_code_lesson_group_parts_at(lesson_index);
  if (null_is(parts)) {
    return;
  }
  ("2026-10-18, asked for by the human: words only, Operators: rather than Operators (+ - * ...):, so it is painted exactly as the category word was");
  let words = app_code_lesson_group_words(parts);
  app_code_lesson_name_id_category(parent, words);
}
