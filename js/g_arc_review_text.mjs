import { g_arc_review_marks } from "./g_arc_review_marks.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { g_arc_review_turn_lines } from "./g_arc_review_turn_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function g_arc_review_text(arc, passages) {
  "A whole written arc laid out to be read by a person, with the Scripture of each answer printed under the line it answers.";
  "WHAT IS STORED AND WHAT IS READ ARE NOT THE SAME SHAPE, and this is the difference between them. A turn stores a reference, which is the smallest thing that cannot disagree with Scripture; a reviewer needs the passage's own words in front of them to see whether it answers what the person said. So the words are added on the way out and never on the way in.";
  "The turns are numbered STRAIGHT THROUGH the whole arc rather than restarting each conversation, because a reviewer says which turn is wrong and one number says it without also naming a conversation.";
  "An opener is printed when it CHANGES. The turns under one opener are back-to-back by the rules the arc was written under, so a heading each time it changes shows the grouping the writer chose, and repeating it every turn would bury the turns in it.";
  "The passages are handed in rather than read here, because a leader arc stands on several chapters at once and only the caller knows which ones were offered to it.";
  let marks = g_arc_review_marks();
  let lines = [];
  let names = g_arc_answer_field_names("person");
  for (let name of names) {
    let value = property_get(arc, name);
    let item = text_combine_multiple([name, ": ", value]);
    list_add(lines, item);
  }
  list_add(lines, "");
  let conversations = property_get(arc, "conversations");
  let number = 0;
  let conversation_number = 0;
  for (let conversation of conversations) {
    conversation_number = add(conversation_number, 1);
    let value2 = property_get(marks, "conversation");
    let item2 = text_combine_multiple([value2, conversation_number]);
    list_add(lines, item2);
    let catch_up = property_get(conversation, "catch_up");
    let b = text_empty_is(catch_up);
    let caught_up = not(b);
    if (caught_up) {
      let value3 = property_get(marks, "catch_up");
      let item3 = text_combine_multiple([value3, catch_up]);
      list_add(lines, item3);
    }
    list_add(lines, "");
    let opener_shown = "";
    let turns = property_get(conversation, "turns");
    for (let turn of turns) {
      let opener = property_get(turn, "opener");
      let b2 = equal(opener, opener_shown);
      let changed = not(b2);
      if (changed) {
        let value4 = property_get(marks, "opener");
        let item4 = text_combine_multiple([value4, opener]);
        list_add_multiple(lines, [item4, ""]);
        opener_shown = opener;
      }
      number = add(number, 1);
      let turn_lines = g_arc_review_turn_lines(turn, passages, number);
      list_add_multiple(lines, turn_lines);
    }
    list_add(lines, "");
  }
  let r = list_join_newline(lines);
  return r;
}
