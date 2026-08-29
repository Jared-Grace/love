import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_study_lambda_property } from "./app_g_study_lambda_property.mjs";
import { app_g_study_lambda_sermon_correct_list } from "./app_g_study_lambda_sermon_correct_list.mjs";
import { app_g_study_lambda_sermon_index } from "./app_g_study_lambda_sermon_index.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_study_lambda_mistakes } from "./app_g_study_lambda_mistakes.mjs";
import { app_g_study_lambda_refresh } from "./app_g_study_lambda_refresh.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_g_wrong } from "./app_g_wrong.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { g_openai_split } from "./g_openai_split.mjs";
import { list_get } from "./list_get.mjs";
import { app_g_study_lambda_advanced } from "./app_g_study_lambda_advanced.mjs";
import { app_g_study_lambda_finished } from "./app_g_study_lambda_finished.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_g_button_wrong } from "./app_g_button_wrong.mjs";
import { invoke_multiple_shuffle_2 } from "./invoke_multiple_shuffle_2.mjs";
export async function app_g_study_lambda(overlay, player, review, close) {
  "The study quiz for one thing the player has been given to learn: its parts come one at a time as two buttons, the part that really comes next and one that does not, and the player taps the one that belongs.";
  "The wrong button is drawn from the same passage written wrongly, so the two choices are always a real one and a plausible one. Which side each lands on is decided fresh every time, because a player who learns that the answer is on the left has learned nothing about the passage.";
  "A wrong tap costs nothing at the time - the button says so and the question stays - but it is remembered, and having got to the end with any wrong tap sends the player back to the beginning of the same passage. That is the whole of the marking: the passage is finished when it has been gone through once with nothing wrong in it, which is what knowing it means.";
  "Finishing takes it out of the list still to review, marks the player as having studied, saves that, and closes the screen. Saving before closing rather than after is what makes it safe to close the app at that moment.";
  "WHERE A RIGHT TAP LEAVES THE STUDY IS WORKED OUT NEXT DOOR AND HANDED BACK, and what it says is put back into the two things kept here before anything is drawn again - because the drawing reads them, so drawing from inside the working out would draw the place the study has just left.";
  arguments_assert(arguments, 4);
  let r3 = await app_g_study_lambda_property(overlay, player, review);
  let r4 = app_g_study_lambda_sermon_correct_list(r3);
  let r5 = app_g_study_lambda_sermon_index(r4);
  let sermon_index = property_get(r5, "sermon_index");
  let r6 = app_g_study_lambda_mistakes(r5);
  let r7 = app_g_study_lambda_refresh(r6, refresh);
  let property = property_get(r7, "property");
  let passage = property_get(r7, "passage");
  let passages = property_get(r7, "passages");
  let r = property_get(r7, "r");
  let div = property_get(r7, "div");
  let sermon_correct_list = property_get(r7, "sermon_correct_list");
  let mistakes = property_get(r7, "mistakes");
  function refresh() {
    html_clear(div);
    let v = app_g_wrong(passage, passages, property);
    let sermon_wrong = property_path_get_2(v, "passage_wrong", property);
    let sermon_wrong_list = g_openai_split(sermon_wrong);
    function correct() {
      let item = list_get(sermon_correct_list, sermon_index);
      async function lambda3() {
        let moved = app_g_study_lambda_advanced(
          sermon_index,
          mistakes,
          sermon_correct_list,
        );
        sermon_index = property_get(moved, "sermon_index");
        mistakes = property_get(moved, "mistakes");
        let done = property_get(moved, "done");
        if (done) {
          await app_g_study_lambda_finished(review, r, player, close);
          return;
        }
        refresh();
      }
      let b = app_shared_game_button_green(div, item, lambda3);
    }
    function wrong() {
      let r2 = list_random_item(sermon_wrong_list);
      let b = app_shared_game_button_green(div, r2, lambda3);
      function lambda3() {
        mistakes = true;
        app_g_button_wrong(b);
      }
    }
    invoke_multiple_shuffle_2(correct, wrong);
  }
}
