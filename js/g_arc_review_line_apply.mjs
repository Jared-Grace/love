import { g_arc_review_line_apply_person } from "./g_arc_review_line_apply_person.mjs";
import { g_arc_review_line_apply_conversation_start } from "./g_arc_review_line_apply_conversation_start.mjs";
import { g_arc_review_line_apply_turn_start } from "./g_arc_review_line_apply_turn_start.mjs";
import { g_arc_review_line_apply_caught_up } from "./g_arc_review_line_apply_caught_up.mjs";
import { g_arc_review_line_apply_mark } from "./g_arc_review_line_apply_mark.mjs";
import { g_arc_review_line_apply_counted } from "./g_arc_review_line_apply_counted.mjs";
import { g_arc_review_line_apply_quoted } from "./g_arc_review_line_apply_quoted.mjs";
import { g_arc_review_line_apply_started } from "./g_arc_review_line_apply_started.mjs";
import { g_arc_review_marks } from "./g_arc_review_marks.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with_digit } from "./text_starts_with_digit.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_arc_review_line_apply(arc, state, line) {
  "One line of a review page put where it belongs - into the person, into the conversation being read, or into the turn being read.";
  "RECOGNISED BY ITS MARK, never by its position. Every line of the page begins with the mark of what it is, so a page can be edited freely - a turn moved, a conversation split - and still read back as the arc it now says it is.";
  "A TALLY LINE IS DROPPED for the same reason a Scripture line is: it is counted from the arc when the page is laid out, so taking one back in would let a hand-corrected count become the arc's own idea of what it used.";
  "A SCRIPTURE LINE IS DROPPED. The arc stores the reference and the Scripture is fetched from it when the page is laid out, so those words are a rendering and never a source; taken back in, an edited verse would become an arc that quotes the Bible wrongly.";
  "THE TURN'S OWN NUMBER IS KEPT even though the arc has no use for it, because a reviewer's note is about a turn and a note handed back without one is a remark about a page rather than about a line.";
  "THE CONVERSATION AND THE TURN BEING READ ARE PICKED UP BEFORE IT IS KNOWN WHETHER THIS LINE BELONGS TO EITHER, which is a change of order and not of behaviour: the page's running state carries both words from the moment it is made, so asking for one costs nothing and answers nothing when no conversation has been started yet. Putting a word on a conversation that was never started still fails, in the same branch as before.";
  "A LINE MATCHING NOTHING THROWS. Every mark is a prefix, and an edited page is exactly where a line loses one - a sentence reflowed onto a second line, a note written in the margin. Skipped quietly, that line would disappear out of the middle of a turn and the arc would still parse, which is the one failure a reviewer could not see.";
  let marks = g_arc_review_marks();
  let told = g_arc_review_line_apply_person(arc, line);
  if (told) {
    return;
  }
  let started = g_arc_review_line_apply_started(marks, line);
  if (started) {
    g_arc_review_line_apply_conversation_start(arc, state);
    return;
  }
  let caught_up = g_arc_review_line_apply_caught_up(state, marks, line);
  if (caught_up) {
    return;
  }
  let opened = g_arc_review_line_apply_mark(marks, line, "opener", state);
  if (opened) {
    return;
  }
  let turn_read = property_get(state, "turn");
  let referenced = g_arc_review_line_apply_mark(
    marks,
    line,
    "reference",
    turn_read,
  );
  if (referenced) {
    return;
  }
  let afterward = g_arc_review_line_apply_mark(marks, line, "after", turn_read);
  if (afterward) {
    return;
  }
  let believed = g_arc_review_line_apply_mark(
    marks,
    line,
    "believes",
    turn_read,
  );
  if (believed) {
    return;
  }
  let quoted = g_arc_review_line_apply_quoted(marks, line);
  if (quoted) {
    return;
  }
  let counted = g_arc_review_line_apply_counted(marks, line);
  if (counted) {
    return;
  }
  let numbered = text_starts_with_digit(line);
  if (numbered) {
    g_arc_review_line_apply_turn_start(marks, state, line);
    return;
  }
  assert_json(false, {
    line,
    hint: "every line of a review page begins with the mark of what it is, so this one is either a sentence that has been reflowed onto a second line or a note written into the page, and either way it would be lost silently",
  });
}
