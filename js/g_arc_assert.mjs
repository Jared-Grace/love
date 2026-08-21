import { g_openers_arc } from "./g_openers_arc.mjs";
import { property_get } from "./property_get.mjs";
import { add_1 } from "./add_1.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { assert_json } from "./assert_json.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
import { g_arc_answer_passage } from "./g_arc_answer_passage.mjs";
export function g_arc_assert(arc, passages) {
  "Prove that a written arc obeys the rules it was written under - every opener one that was offered, used once and carried straight through, every reference naming a passage that was offered, and a catch_up on every conversation but the first.";
  "THE PROMPT'S RULES ARE ONLY REQUESTS UNTIL SOMETHING CHECKS THEM. An arc is written by a model out of a prompt, and a prompt cannot fail - a rule it states and the answer breaks arrives looking exactly like a rule that was kept. So each rule the prompt states about the SHAPE of an arc is asked again here, where breaking it stops the arc rather than reaching a player.";
  "A CATCH_UP IS CHECKED BOTH WAYS. Missing on a later conversation, the player meets somebody carrying on a conversation they were never told happened; written on the first, the person refers back to a day that never came before it. Neither is visible in a reading of one conversation.";
  "AN OPENER IS CHECKED FOR BEING BACK-TO-BACK, not merely for being used once. The rule is that the player opens a topic and the person carries it until it is done, so an opener that comes back later is a conversation that wandered off it and returned - which reads as forgetting rather than as a topic.";
  "THE REFERENCE IS CHECKED BY FETCHING THE PASSAGE, so this asks the same question in the same words as laying the arc out to be read does. A reference that names nothing offered fails here whether or not anybody ever renders the page.";
  let openers = g_openers_arc();
  let conversations = property_get(arc, "conversations");
  let conversation_number = 0;
  let turns_total = 0;
  for (let conversation of conversations) {
    conversation_number = add_1(conversation_number);
    let catch_up = property_get(conversation, "catch_up");
    let empty = text_empty_is(catch_up);
    let written = not(empty);
    let first = equal(conversation_number, 1);
    let expected = not(first);
    json_equal_assert_json(written, expected, {
      conversation_number,
      catch_up,
      hint: "every conversation after the first opens with a catch_up saying what happened since the last one, and the first has none because nothing came before it",
    });
    let turns = property_get(conversation, "turns");
    let opened = [];
    let opener_last = "";
    for (let turn of turns) {
      turns_total = add_1(turns_total);
      let opener = property_get(turn, "opener");
      list_includes_assert_json(openers, opener, {
        conversation_number,
        turns_total,
        hint: "a turn is marked with one of the openers the writer was offered, copied word for word, and one spelled any other way is a door the player is never given",
      });
      let same = equal(opener, opener_last);
      let changed = not(same);
      if (changed) {
        let repeated = list_includes(opened, opener);
        let b = not(repeated);
        assert_json(b, {
          opener,
          conversation_number,
          turns_total,
          hint: "the turns under one opener are back-to-back, so an opener returning after another one has been through means the conversation left the topic and came back to it",
        });
        list_add(opened, opener);
        opener_last = opener;
      }
      let before = property_get(turn, "before");
      let silent = text_empty_is(before);
      let b2 = not(silent);
      assert_json(b2, {
        conversation_number,
        turns_total,
        opener,
        hint: "a turn is the person saying something and the player answering it with a passage, so a turn where the person says nothing is a passage answering nobody",
      });
      let reference_written = property_get(turn, "reference");
      g_arc_answer_passage(passages, reference_written);
    }
  }
  let r = {
    conversations: conversation_number,
    turns: turns_total,
  };
  return r;
}
