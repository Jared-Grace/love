import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_fn_id_set } from "./app_code_lesson_fn_id_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_index_by_id } from "./app_code_lesson_index_by_id.mjs";
import { app_code_lesson_go } from "./app_code_lesson_go.mjs";
import { app_shared_button_numbered } from "./app_shared_button_numbered.mjs";
import { app_code_lesson_title_render } from "./app_code_lesson_title_render.mjs";
export function app_code_lesson_link(parent, context, fn) {
  arguments_assert(arguments, 3);
  ("a button that opens an earlier lesson, drawn the way that lesson's row on the home list is drawn - its number, its category and its title - for a box that refers back to what that lesson taught");
  ("★ THE LESSON IS NAMED BY ITS FUNCTION, NEVER BY ITS NUMBER OR ITS TITLE. Lessons move - an easy one is placed as early as it can go - and a box that said the last lesson, or lesson 148, would go on saying it after the move and be wrong without anything failing. The number here is read from where the lesson stands in the list today, so it moves with it.");
  ("The row is the home list's own numbered button rather than a new shape, so a learner meets the same row they tap to open that lesson from home and knows it for a way to the lesson. It carries no progress colour or marker: that answers where to go next, and this row answers where something was taught.");
  let lesson = app_code_lesson_fn_id_set(fn);
  let id = property_get(lesson, "id");
  let index = app_code_lesson_index_by_id(id);
  async function go() {
    await app_code_lesson_go(lesson, context);
  }
  let r = app_shared_button_numbered(parent, index, go, false);
  let title = property_get(r, "title");
  app_code_lesson_title_render(title, lesson);
  let button = property_get(r, "button");
  return button;
}
