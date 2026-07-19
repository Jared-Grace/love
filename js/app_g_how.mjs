import { app_g_turn_quiz } from "./app_g_turn_quiz.mjs";
import { app_g_bible_passage_button_direct } from "./app_g_bible_passage_button_direct.mjs";
import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_button_wrong } from "./app_g_button_wrong.mjs";
import { app_g_discern_prevent } from "./app_g_discern_prevent.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { g_struggles } from "./g_struggles.mjs";
import { g_verses_off_topic } from "./g_verses_off_topic.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { invoke_once } from "./invoke_once.mjs";
import { html_clear } from "./html_clear.mjs";
export function app_g_how(overlay, npc, overlay_close) {
  "the 'how are you?' interaction as 2 quiz turns (unifies hru with the gospel-share passage quiz): each turn the NPC voices a STRUGGLE and the player chooses the on-topic COMFORT verse over an off-topic one — pray-for-discernment reveals the right one. after both turns the NPC is comforted and the conversation can end";
  let all = g_struggles();
  list_shuffle(all);
  let off = g_verses_off_topic();
  list_shuffle(off);
  function turn_spec(index) {
    let c = list_get(all, index);
    let spec = {
      struggle: property_get(c, "struggle"),
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
      app_g_npc_says(
        npc,
        overlay,
        "Thank you — those words are a real comfort. I won't forget them.",
      );
      app_g_button_conversation_end(overlay, overlay_close);
      return;
    }
    let spec = list_get(specs, index);
    let struggle = property_get(spec, "struggle");
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
      struggle,
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
