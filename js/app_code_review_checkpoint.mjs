import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_milestone_left_is } from "./app_code_milestone_left_is.mjs";
import { app_code_milestone_key } from "./app_code_milestone_key.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { app_code_milestone_get_or_null } from "./app_code_milestone_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_milestone_explain } from "./app_code_milestone_explain.mjs";
import { app_shared_button_restart_text } from "./app_shared_button_restart_text.mjs";
import { app_code_review_number_get } from "./app_code_review_number_get.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_slice } from "./list_slice.mjs";
import { app_code_review_range_label } from "./app_code_review_range_label.mjs";
export function app_code_review_checkpoint(context) {
  "What the review screen is asking about in this tab: a review, or a milestone - both drawn by the one screen.";
  "key is what it is filed under, both its half-answered questions and the list of finished checkpoints: a review's number, or a milestone's id. A review's number is a count and a milestone's id is a word, so the two can never be mistaken for each other in that one list.";
  "number is where it stands in the run of lessons, which is all the arrows and the way on read: the lesson it stands after. lessons is what its questions are drawn from, and title the words at the top of the screen.";
  "explain is the lines it says about itself under the title and again once finished - none for a review; again is the restart button's words once it is finished, and restart its words before.";
  "A milestone is asked for only when one was the last thing this tab picked, and only when its id still names one - otherwise the review this tab holds is what is shown, as it always was.";
  arguments_assert(arguments, 1);
  let milestone_left = app_code_milestone_left_is(context);
  if (milestone_left) {
    let key_milestone = app_code_milestone_key();
    let id = storage_session_get_context(context, key_milestone);
    let milestone = app_code_milestone_get_or_null(id);
    if (null_not_is(milestone)) {
      let label_inner = property_get(milestone, "label");
      let title_inner = text_combine("Milestone: ", label_inner);
      let explain = app_code_milestone_explain();
      let again_inner = app_shared_button_restart_text(
        "Do this milestone again",
      );
      let restart_inner = app_shared_button_restart_text("Restart milestone");
      let r_inner = {
        key: id,
        number: property_get(milestone, "number"),
        lessons: property_get(milestone, "lessons"),
        title: title_inner,
        explain,
        again: again_inner,
        restart: restart_inner,
      };
      return r_inner;
    }
  }
  let number = app_code_review_number_get(context);
  let scope = app_code_review_scope(number);
  let start = subtract(number, scope);
  let all = app_code_lessons();
  let lessons = list_slice(all, start, number);
  let label = app_code_review_range_label(number, scope);
  let title = text_combine("Review: ", label);
  let again = app_shared_button_restart_text("Do another review");
  let restart = app_shared_button_restart_text("Restart review");
  let r = {
    key: number,
    number,
    lessons,
    title,
    explain: [],
    again,
    restart,
  };
  return r;
}
