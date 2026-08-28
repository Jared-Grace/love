import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_code_review_items_by_id } from "./app_code_review_items_by_id.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_review_preview_pickers_kinds_show(
  lesson_id,
  picker,
  stage,
  shortlist_show,
  question_show,
) {
  arguments_assert(arguments, 5);
  ("the question kinds this lesson holds, one button each, named by the very words the question is asked over");
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
