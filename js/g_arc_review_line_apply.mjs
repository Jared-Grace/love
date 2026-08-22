import { g_arc_review_line_apply_opened } from "./g_arc_review_line_apply_opened.mjs";
import { g_arc_review_line_apply_caught_up } from "./g_arc_review_line_apply_caught_up.mjs";
import { g_arc_review_line_apply_started } from "./g_arc_review_line_apply_started.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { g_arc_review_marks } from "./g_arc_review_marks.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_starts_with_digit } from "./text_starts_with_digit.mjs";
import { text_index_of_skip } from "./text_index_of_skip.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_arc_review_line_apply(arc, state, line) {
  "One line of a review page put where it belongs - into the person, into the conversation being read, or into the turn being read.";
  "RECOGNISED BY ITS MARK, never by its position. Every line of the page begins with the mark of what it is, so a page can be edited freely - a turn moved, a conversation split - and still read back as the arc it now says it is.";
  "A TALLY LINE IS DROPPED for the same reason a Scripture line is: it is counted from the arc when the page is laid out, so taking one back in would let a hand-corrected count become the arc's own idea of what it used.";
  "A SCRIPTURE LINE IS DROPPED. The arc stores the reference and the Scripture is fetched from it when the page is laid out, so those words are a rendering and never a source; taken back in, an edited verse would become an arc that quotes the Bible wrongly.";
  "THE TURN'S OWN NUMBER IS KEPT even though the arc has no use for it, because a reviewer's note is about a turn and a note handed back without one is a remark about a page rather than about a line.";
  "A LINE MATCHING NOTHING THROWS. Every mark is a prefix, and an edited page is exactly where a line loses one - a sentence reflowed onto a second line, a note written in the margin. Skipped quietly, that line would disappear out of the middle of a turn and the arc would still parse, which is the one failure a reviewer could not see.";
  let marks = g_arc_review_marks();
  let names = g_arc_answer_field_names("person");
  for (let name of names) {
    let prefix = text_combine_multiple([name, ": "]);
    let starts = text_starts_with(line, prefix);
    if (starts) {
      let value = text_prefix_without(line, prefix);
      property_set(arc, name, value);
      return;
    }
  }
  let started = g_arc_review_line_apply_started(marks, line);
  if (started) {
    let conversation = {
      catch_up: "",
      turns: [],
    };
    let conversations = property_get(arc, "conversations");
    list_add(conversations, conversation);
    property_set(state, "conversation", conversation);
    property_set(state, "opener", "");
    return;
  }
  let caught_up = g_arc_review_line_apply_caught_up(marks, line);
  if (caught_up) {
    let prefix4 = property_get(marks, "catch_up");
    let catch_up = text_prefix_without(line, prefix4);
    let object = property_get(state, "conversation");
    property_set(object, "catch_up", catch_up);
    return;
  }
  let opened = g_arc_review_line_apply_opened(marks, line);
  if (opened) {
    let prefix6 = property_get(marks, "opener");
    let opener = text_prefix_without(line, prefix6);
    property_set(state, "opener", opener);
    return;
  }
  let prefix7 = property_get(marks, "reference");
  let referenced = text_starts_with(line, prefix7);
  if (referenced) {
    let prefix8 = property_get(marks, "reference");
    let reference = text_prefix_without(line, prefix8);
    let object2 = property_get(state, "turn");
    property_set(object2, "reference", reference);
    return;
  }
  let prefix9 = property_get(marks, "after");
  let afterward = text_starts_with(line, prefix9);
  if (afterward) {
    let prefix10 = property_get(marks, "after");
    let after = text_prefix_without(line, prefix10);
    let object3 = property_get(state, "turn");
    property_set(object3, "after", after);
    return;
  }
  let prefix13 = property_get(marks, "believes");
  let believed = text_starts_with(line, prefix13);
  if (believed) {
    let believes = text_prefix_without(line, prefix13);
    let object4 = property_get(state, "turn");
    property_set(object4, "believes", believes);
    return;
  }
  let prefix11 = property_get(marks, "scripture");
  let quoted = text_starts_with(line, prefix11);
  if (quoted) {
    return;
  }
  let prefix12 = property_get(marks, "tally");
  let counted = text_starts_with(line, prefix12);
  if (counted) {
    return;
  }
  let numbered = text_starts_with_digit(line);
  if (numbered) {
    let item = property_get(marks, "number");
    let before = text_index_of_skip(line, item);
    let number = text_split_first(line, item);
    property_set(state, "number", number);
    let opener = property_get(state, "opener");
    let turn = {
      opener,
      before,
      reference: "",
      after: "",
      believes: "",
    };
    let turns = property_path_get_2(state, "conversation", "turns");
    list_add(turns, turn);
    property_set(state, "turn", turn);
    return;
  }
  assert_json(false, {
    line,
    hint: "every line of a review page begins with the mark of what it is, so this one is either a sentence that has been reflowed onto a second line or a note written into the page, and either way it would be lost silently",
  });
}
