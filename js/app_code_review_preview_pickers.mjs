import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_code_review_items_by_id } from "./app_code_review_items_by_id.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { property_get } from "./property_get.mjs";
import { each_index } from "./each_index.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_review_preview_lessons_under_test } from "./app_code_review_preview_lessons_under_test.mjs";
export function app_code_review_preview_pickers(picker, stage, question_show) {
  arguments_assert(arguments, 3);
  function kinds_show(lesson_id) {
    "the question kinds this lesson holds, one button each, named by the very words the question is asked over";
    each([picker, stage], html_clear);
    app_shared_button(picker, "← back", shortlist_show);
    html_p_text(picker, lesson_id);
    let items = app_code_review_items_by_id(lesson_id);
    let kinds = list_first_property(items, "exercises");
    function each_kind(kind, kind_index) {
      let info = property_get(kind, "info");
      let question_label = property_get(info, "question_label");
      let answer_label = property_get(info, "answer_label");
      ("named by what it hands you and then by what it wants back, because several kinds of one lesson are asked over the very same words and part company only in what is being asked for - four buttons all reading Code: is a list nobody can pick from");
      let label = text_combine_multiple([question_label, "→ ", answer_label]);
      function kind_chosen() {
        question_show(lesson_id, kind_index);
      }
      app_shared_button(picker, label, kind_chosen);
    }
    each_index(kinds, each_kind);
  }
  function lessons_show() {
    "every lesson the page is showing, named by its id - the id and not the painted home title, because the id is a plain word that can be read down a long list and typed into a search, and a hundred painted titles is a hundred running animations";
    each([picker, stage], html_clear);
    let asked =
      "Every lesson, in the order they are learned. Pick one, then a question kind.";
    html_p_text(picker, asked);
    app_shared_button(picker, "← the ones under test", shortlist_show);
    let lessons = app_code_lessons();
    function each_lesson(lesson) {
      let lesson_id = property_get(lesson, "id");
      function lesson_chosen() {
        kinds_show(lesson_id);
      }
      app_shared_button(picker, lesson_id, lesson_chosen);
    }
    each(lessons, each_lesson);
  }
  function shortlist_show() {
    "the screen this page opens on: only the lessons named as waiting to be looked at, so what is being asked for is four buttons instead of a hundred and thirty four";
    "The whole run is still here, one button down, because a shortlist that cannot be got past is a shortlist that decides for the person reading it what they are allowed to look at.";
    each([picker, stage], html_clear);
    let asked =
      "The lessons waiting to be looked at. Pick one, then a question kind - that draws one real review question, and picking the same kind again asks it again on a fresh line.";
    html_p_text(picker, asked);
    let fns = app_code_review_preview_lessons_under_test();
    function each_fn(fn) {
      let lesson = fn();
      let lesson_id = property_get(lesson, "id");
      function fn_chosen() {
        kinds_show(lesson_id);
      }
      app_shared_button(picker, lesson_id, fn_chosen);
    }
    each(fns, each_fn);
    app_shared_button(picker, "every lesson", lessons_show);
  }
  return shortlist_show;
}
