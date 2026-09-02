import { property_get } from "./property_get.mjs";
import { app_g_arcs_read_row_on_read } from "./app_g_arcs_read_row_on_read.mjs";
import { app_g_arc_approve_worded } from "./app_g_arc_approve_worded.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  "THE COUNTS AGREE WITH THEIR OWN VERBS, and that is not a nicety here. A single moved line is the commonest state this bench will ever be in, because a wave of notes answered one at a time moves one line - so one lines have moved would be the sentence a reviewer read most often, and a page that cannot count to one is not trusted about what it says has changed.";
  arguments_assert(arguments, 4);
  let r = app_g_arcs_read_row_on_read(person, bench, parent, nickname);
  let on_read = property_get(r, "on_read");
  let chapter_code = property_get(r, "chapter_code");
  let status_set = property_get(r, "status_set");
  let status_working = property_get(r, "status_working");
  let render = property_get(r, "render");
  let row = property_get(r, "row");
  app_shared_button_inline(row, "mark read", on_read);
  async function on_approve() {
    let r2 = await app_g_arc_approve_worded(
      nickname,
      status_working,
      chapter_code,
      status_set,
      render,
    );
    return r2;
  }
  app_shared_button_inline(row, "approve as worded", on_approve);
}
