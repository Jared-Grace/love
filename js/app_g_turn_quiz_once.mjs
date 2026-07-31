import { fn_name } from "./fn_name.mjs";
import { app_g_turn_quiz } from "./app_g_turn_quiz.mjs";
import { app_g_bible_passage_button_direct } from "./app_g_bible_passage_button_direct.mjs";
import { app_g_button_wrong } from "./app_g_button_wrong.mjs";
import { app_g_discern_prevent } from "./app_g_discern_prevent.mjs";
import { invoke_once } from "./invoke_once.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_turn_quiz_once(
  overlay,
  npc,
  concern,
  correct,
  wrong,
  on_correct,
  discern,
  leave,
) {
  ("one need→Scripture quiz turn: the NPC voices `concern`, the player picks the on-topic `correct` {reference,text} over the off-topic `wrong`; correct → on_correct(); a wrong pick is blocked once the player prayed for discernment (",
    fn_name("app_g_discern_prevent"),
    " on the shared `discern`). answering is not the only way out — `leave` is offered as a third choice in the same box (the parting line), so ending the conversation is something you SAY here rather than a control below the box. shared by ",
    fn_name("app_g_need_quiz"),
    " (multi-turn) and the data-driven conversation (one turn per opener)");
  function build_correct(container) {
    let reference = property_get(correct, "reference");
    let verse_text = property_get(correct, "text");
    let b = app_g_bible_passage_button_direct(
      reference,
      verse_text,
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
    let reference2 = property_get(wrong, "reference");
    let verse_text2 = property_get(wrong, "text");
    let b = app_g_bible_passage_button_direct(
      reference2,
      verse_text2,
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
    leave,
  );
}
