import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_code_review_exercise_excuse(parent, added_count) {
  arguments_assert(arguments, 2);
  ("the place under a review quiz where a learner who missed may say it was a slip, and keep the added_count extra quizzes a miss brings out of the review. offer is called on each miss; excused_is answers whether the misses so far were let off");
  ("2026-10-21, at the human's asking: the app already lets them skip any quiz or review, so this is the same choice made precisely: the learner knows whether their finger or their understanding missed, and is asked only right after the miss, while they still know. Not picked: an undo, which would take the red back after it had shown which answer was wrong; and counting the quiz as answered right, which nothing here reads - the added quizzes are all a miss leads to");
  let aside = html_div(parent);
  let excused = false;
  let offered = false;
  function offer() {
    if (offered) {
      return;
    }
    ("2026-10-21, at the human's asking: a cancel covers the misses made before it, not after it. A wrong press after a cancel counts again, and the button is offered again, so each slip is answered for on its own. Not picked: one cancel excusing the whole quiz, which would let a learner who slipped once miss every choice after it for free");
    excused = false;
    offered = true;
    html_clear(aside);
    let text = text_combine_multiple([
      "Wrong by accident? Don't add the ",
      added_count,
      " extra quizzes",
    ]);
    function excuse() {
      excused = true;
      offered = false;
      html_clear(aside);
      let said = html_div(aside);
      html_text_set(said, "Okay. That miss won't add extra quizzes.");
    }
    app_shared_button_wide(aside, text, excuse);
  }
  function excused_is() {
    return excused;
  }
  let r = {
    offer,
    excused_is,
  };
  return r;
}
