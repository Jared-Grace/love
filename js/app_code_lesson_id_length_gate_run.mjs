import { list_size } from "./list_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { app_code_lesson_id_length_ceiling } from "./app_code_lesson_id_length_ceiling.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_size } from "./text_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export function app_code_lesson_id_length_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no code lesson is stored and linked under an id longer than the ceiling. Read-only.");
  ("The longest rather than the average, because the question is whether any single id is too large and an average cannot answer it. One id of fifty characters is felt in full by the person holding that one, however short the other hundred and thirty two are, and it would move the average by a third of a character.");
  ("★ THE REMEDY IS FREE BEFORE THE ID SHIPS AND EXPENSIVE AFTER. While a lesson is still behind the release cut, shortening its id costs nothing at all - nobody has one written down. Once learners have met it, the id is a key on their devices, and changing it is the breaking change described where the ids are recorded. So the moment to be strict is now, which is what this gate is for.");
  ("It reads the table rather than the lessons the app hands out, so a lesson that is written and not yet released is checked too. That is the whole point: the cheap moment to shorten an id is before anybody is holding it.");
  ("HOW MANY IDS WERE WALKED TRAVELS OUT BESIDE THE VERDICT - an empty list of offenders is what this gate says on a good day and it is also what it would say if the table it reads had been renamed or rebuilt a new way, and the two are the same word with nothing to tell them apart. The count is of the ids the sweep actually reached rather than of the ones found wanting, because the second of those is nothing on every run that passes and so can never fall");
  let short = app_code_lesson_ids_short();
  let ceiling = app_code_lesson_id_length_ceiling();
  let names = object_property_names(short);
  let over = [];
  for (let lesson of names) {
    let id = property_get(short, lesson);
    let size = text_size(id);
    let too_long_is = greater_than(size, ceiling);
    if (too_long_is) {
      list_add(over, {
        lesson,
        id,
        size,
      });
    }
  }
  list_empty_is_assert_json(over, {
    ceiling,
    hint: "a lesson id is longer than any id that existed when the ceiling was measured - shorten the id in the table rather than raising the ceiling, because an id only has to be unique and recognisable and there is always a shorter spelling",
  });
  let lessons = list_size(names);
  let r = {
    lessons,
    over,
  };
  return r;
}
