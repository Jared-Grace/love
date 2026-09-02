import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { not_equal } from "./not_equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
export function app_g_arcs_read_row(parent, bench, nickname, person) {
  "$plain nickname";
  "A line saying what the moved marks below are measured against and how much has moved, and the press that records this arc as read now.";
  "SAYING IT HAS BEEN READ IS A PRESS ON THE PAGE AND NOT A COMMAND IN A TERMINAL, because the reading happens on a phone. A reviewer who has just finished an arc and has to walk to a keyboard to record it will not record it, and an unrecorded reading is a whole second reading later - which is the one cost this bench was built to remove.";
  "THE PRESS SITS AT THE TOP WITH THE STATE IT CHANGES, not at the foot of the arc where the reading ends. An arc is many screens long, so a press at the bottom is found only by whoever scrolled the whole way; the state and the press being one thing means a reviewer who wants to know where they are and a reviewer who wants to record where they are look in the same place.";
  "THE LINE NAMES WHAT THE MARKS ARE MEASURED FROM AND NEVER ONLY THAT THERE ARE SOME. Moved since you read it, moved since your notes were answered, and moved since the last backup was taken are three different claims about the reader, and any of them said as another tells somebody something untrue about work they did or did not do.";
  "AN ARC WITH NOTHING BEHIND IT SAYS SO PLAINLY, because otherwise a page with no marks on it is read as an arc nothing has moved in. Those are opposite facts and they look identical, and the more dangerous of the two is the one where a reviewer trusts an unmarked page.";
  "THE LINES THAT WERE ASKED ABOUT AND KEPT ARE COUNTED HERE TOO, and that count is the answer to a reviewer who files notes in waves. Answering a note clears it away whether the wording changed or not, so between two waves the arc says nothing at all about the notes of the first one - and the reader is left to decide between having been ignored and having been agreed with. The count says which.";
  "IT IS A CLAUSE ON THE SAME SENTENCE AND NOT A LINE OF ITS OWN. What moved and what was held are two halves of one answer to the same question - what became of my notes - and set on two lines they are read as two separate facts about the arc, the second of which is easy to walk past.";
  "NOTHING MOVED IS SAID OUT LOUD RATHER THAN LEFT BLANK, which is what makes a second reading cheap. A reviewer told that nothing has moved since they read it can close the arc without reading a line of it, and that is the whole saving.";
  "THE PRESS IS OFFERED WHATEVER THE STATE IS, because the record only ever moves forward. On an arc already read it takes in what moved since; on one measured against a backup it replaces a stand-in with a real reading, and from then on the marks are about this reviewer rather than about a copy taken on some day they had no part in.";
  "THE TWO PRESSES SIT TOGETHER BECAUSE THEY ARE TWO ANSWERS TO ONE QUESTION - what is this arc's state - and the answers are not the same answer. Marking it read says a reviewer got to the end with their notes still standing; approving it says the lines they filed no note against are right as they are written. Offered on separate screens, the weaker of the two would be pressed for both, and an arc nobody had ever passed would read as finished.";
  "THE APPROVAL IS SAID EVEN WHEN THERE IS NONE, for the same reason an arc with nothing behind it says so. An unapproved arc and an approved one with nothing moved since both draw no marks, and left unsaid the two look identical - so the page would let a reviewer close an arc nobody has ever passed believing somebody had.";
  "IT SAYS WHAT HAS MOVED SINCE THE APPROVAL AND NOT ONLY THAT THERE WAS ONE, because an approval is about wording and wording is exactly what a revision changes. An arc approved and then revised is approved on every line but the revised ones, and a reviewer told only that it was approved would take the new lines as passed when nobody has read them.";
  arguments_assert(arguments, 4);
  let base_source = property_get(person, "base_source");
  let moved_count = property_get(person, "moved_count");
  let chapter_code = property_get(bench, "chapter_code");
  let status_set = property_get(bench, "status_set");
  let status_working = property_get(bench, "status_working");
  let render = property_get(bench, "render");
  let counted = String(moved_count);
  let nothing_moved = equal(moved_count, 0);
  let said =
    "not read yet, and there is no older copy of it, so nothing below is marked as moved";
  let read = equal(base_source, "read");
  if (read) {
    said = text_combine_multiple([
      "read before, and ",
      counted,
      " lines have moved since",
    ]);
  }
  let read_unmoved = read && nothing_moved;
  if (read_unmoved) {
    said = "read before, and nothing has moved since";
  }
  let revised = equal(base_source, "previous");
  if (revised) {
    said = text_combine_multiple([
      "not read yet, and ",
      counted,
      " lines have moved since the notes on it were answered",
    ]);
  }
  let revised_unmoved = revised && nothing_moved;
  if (revised_unmoved) {
    said =
      "not read yet, and nothing has moved since the notes on it were answered";
  }
  let backed_up = equal(base_source, "backup");
  if (backed_up) {
    said = text_combine_multiple([
      "not read yet, and ",
      counted,
      " lines have moved since the last content backup",
    ]);
  }
  let backup_unmoved = backed_up && nothing_moved;
  if (backup_unmoved) {
    said = "not read yet, and nothing has moved since the last content backup";
  }
  let held_count = property_get(person, "held_count");
  let some_held = not_equal(held_count, 0);
  if (some_held) {
    let counted_held = String(held_count);
    said = text_combine_multiple([
      said,
      ", and ",
      counted_held,
      " lines you left notes on were kept word for word",
    ]);
  }
  let approved = property_get(person, "approved");
  let approved_moved_count = property_get(person, "approved_moved_count");
  let approval_said = ", and it has not been approved yet";
  if (approved) {
    approval_said = ", and you approved it as it is worded now";
    let approved_moved = not_equal(approved_moved_count, 0);
    if (approved_moved) {
      let counted_approved = String(approved_moved_count);
      approval_said = text_combine_multiple([
        ", and ",
        counted_approved,
        " lines have moved since you approved it",
      ]);
    }
  }
  said = text_combine_multiple([said, approval_said]);
  let row = html_div(parent);
  html_style_assign(row, {
    display: "flex",
    "flex-wrap": "wrap",
    "align-items": "center",
    gap: "0.5rem",
    "margin-top": "0.4rem",
  });
  let line = html_div_text(row, said);
  html_style_assign(line, {
    "font-size": app_shared_font_size_label(),
    opacity: "0.55",
  });
  async function on_read() {
    let working = text_combine_multiple(["recording ", nickname, " as read"]);
    status_working(working);
    try {
      let f_name = fn_name("g_arc_reviewed_write");
      await app_shared_api_named(f_name, [chapter_code, nickname]);
      let done = text_combine_multiple([nickname, " is recorded as read"]);
      status_set(done);
      await render();
    } catch (failed) {
      let missed = text_combine_multiple([
        "could not record ",
        nickname,
        " as read",
      ]);
      status_set(missed);
    }
  }
  app_shared_button_inline(row, "mark read", on_read);
  async function on_approve() {
    let working = text_combine_multiple(["approving ", nickname, " as worded"]);
    status_working(working);
    try {
      let f_name = fn_name("g_arc_approved_write");
      await app_shared_api_named(f_name, [chapter_code, nickname]);
      let done = text_combine_multiple([
        nickname,
        " is approved as worded now",
      ]);
      status_set(done);
      await render();
    } catch (failed) {
      let missed = text_combine_multiple(["could not approve ", nickname]);
      status_set(missed);
    }
  }
  app_shared_button_inline(row, "approve as worded", on_approve);
}
