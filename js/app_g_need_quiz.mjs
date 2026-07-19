import { app_g_turn_quiz } from "./app_g_turn_quiz.mjs";
import { app_g_bible_passage_button_direct } from "./app_g_bible_passage_button_direct.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_button_wrong } from "./app_g_button_wrong.mjs";
import { app_g_discern_prevent } from "./app_g_discern_prevent.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { range_map } from "./range_map.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { invoke_once } from "./invoke_once.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_g_need_quiz(overlay, npc, overlay_close, needs, off, closing) {
  "the shared 2-turn need→Scripture quiz: each turn the NPC voices a CONCERN (a struggle for app_g_how, a doubt for app_g_believe) and the player picks the on-topic verse over an OFF-topic one — pray-for-discernment reveals the right one. after both turns the NPC responds with `closing` and can end. needs=[{concern, correct:{reference,text}}], off=[{reference,text}]";
  list_shuffle(needs);
  list_shuffle(off);
  function turn_spec(index) {
    let c = list_get(needs, index);
    let spec = {
      concern: property_get(c, "concern"),
      correct: property_get(c, "correct"),
      wrong: list_get(off, index),
    };
    return spec;
  }
  let specs = [turn_spec(0), turn_spec(1)];
  function turn(index) {
    html_clear(overlay);
    let done = index >= list_size(specs);
    if (done) {
      app_g_npc_says(npc, overlay, closing);
      app_g_button_conversation_end(overlay, overlay_close);
      return;
    }
    let spec = list_get(specs, index);
    let concern = property_get(spec, "concern");
    let correct = property_get(spec, "correct");
    let wrong = property_get(spec, "wrong");
    let discern = { prayed: false };
    function build_correct(container) {
      function on_correct() {
        turn(index + 1);
      }
      let b = app_g_bible_passage_button_direct(
        property_get(correct, "reference"),
        property_get(correct, "text"),
        container,
        on_correct,
      );
      return b;
    }
    function build_wrong(container) {
      let mark = invoke_once(mark_wrong);
      function on_wrong() {
        if (app_g_discern_prevent(discern)) {
          return;
        }
        mark();
      }
      let b = app_g_bible_passage_button_direct(
        property_get(wrong, "reference"),
        property_get(wrong, "text"),
        container,
        on_wrong,
      );
      function mark_wrong() {
        app_g_button_wrong(b);
      }
      return b;
    }
    app_g_turn_quiz(
      overlay,
      npc,
      concern,
      "What would you like to say?",
      build_correct,
      build_wrong,
      discern,
    );
    function on_end() {
      if (app_g_discern_prevent(discern)) {
        return;
      }
      overlay_close();
    }
    app_g_button_conversation_end(overlay, on_end);
  }
  turn(0);
}
