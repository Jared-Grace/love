import { arguments_assert } from "./arguments_assert.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
import { app_g_arcs_field_shaped } from "./app_g_arcs_field_shaped.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_g_arcs_kept_text } from "./app_g_arcs_kept_text.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_runs_changed } from "./text_runs_changed.mjs";
import { app_g_arcs_field_runs } from "./app_g_arcs_field_runs.mjs";
import { list_add } from "./list_add.mjs";
export function app_g_arcs_field_pair({
  parent,
  moved_fields,
  held_fields,
  name,
  value,
  shape,
  voice_color,
  marks,
}) {
  "$plain name";
  "$plain value";
  "$plain shape";
  "$plain voice_color";
  "One field of a written arc drawn as whatever it is: a single plain line where nothing has moved in it, and where something has, the wording it used to carry set above the wording it carries now, both in the same shape, with only the characters that differ marked.";
  "THE OLDER WORDING IS SET FIRST BECAUSE THAT IS THE ORDER THE CHANGE HAPPENED IN. It used to be set underneath, which asked a reader to take in the new line, then drop to the old one, then climb back to see what the difference had been - a comparison run backwards and then forwards again on every changed line of a long page.";
  "DRAWING BOTH LINES IS ONE STEP HERE RATHER THAN TWO AT THE CALLER. It was two, and it had to be while the previous wording was set underneath, because the current line was drawn before anybody knew there was a previous one. Putting the older one first means the two are decided together, and every place that draws a field is now one call instead of a pair that could be got the wrong way round.";
  "WHICH CHARACTERS DIFFER IS WORKED OUT HERE AND NOT WHERE THE MOVE WAS FOUND, because the store answers what a line used to say and the page already holds what it says now. Nothing has to be sent for it, and the same two pieces of text can be compared a second way later without anything upstream being asked to agree.";
  "A LINE WITH NO PREVIOUS WORDING AT ALL SAYS SO IN WORDS rather than being compared with nothing. Compared with an empty line every character of it comes back marked, which is true and useless: a reader would see a wholly marked line and go looking for what it used to say, and it never said anything.";
  "THE WORDS THAT WENT OUT AND CAME IN ARE NO LONGER LISTED UNDERNEATH. They were there because the page could not point at a difference and could only name one, and a list of words is what naming a difference looks like when the marks are missing. With the characters themselves marked in place the list says the same thing later, less exactly, in a fainter type.";
  "BOTH HALVES GO ONTO THE LIST THE TOURING PRESS READS, held together as one change rather than added as two rows. A change is a comparison and the tour selects a comparison, so anything downstream that has one half and wants the other would otherwise be guessing that the row after it is the row it wants.";
  "THIS IS THE ONLY PLACE THAT CAN PUT A CHANGE ON THAT LIST. Whether a field moved is answered here and nowhere above; the page as drawn says the same thing only in colour, so anything asking later would be reading marks back off a drawing instead of being told.";
  "A LINE THAT NEVER MOVED IS ON NO LIST AT ALL, which is what keeps the tour the length of the changes rather than the length of the arc.";
  "A LINE THAT WAS ASKED ABOUT AND KEPT SAYS SO UNDERNEATH, and that is the whole of what a reviewer filing notes in waves could not otherwise find out. Their note is cleared away by the answering whether the wording moved or not, so the next drawing of a kept line is character for character the drawing of a line nobody has ever written about - the same page, saying two opposite things with the same picture.";
  "IT IS SAID ONLY WHERE NOTHING MOVED, because a line that moved has already answered the note by moving. Both said at once would be one sentence claiming the wording was kept sitting directly under two wordings that differ.";
  "IT IS NOT ON THE TOURING PRESS'S LIST. The tour steps through comparisons, and this is not one: there is nothing to hold against anything, only a fact about a line that stands. Put on the list it would be a stop with both halves the same, which reads as a fault in the tour.";
  arguments_assert(arguments, 1);
  let moved = property_or_null(moved_fields, name);
  let still = equal(moved, null);
  if (still) {
    app_g_arcs_field_shaped(parent, name, value, shape, voice_color);
    let held = property_or_null(held_fields, name);
    let kept = not_equal(held, null);
    if (kept) {
      let said = app_g_arcs_kept_text();
      app_g_arcs_field_shaped(parent, "kept", said, "aside", voice_color);
    }
    return;
  }
  let before = property_get(moved, "before");
  let unwritten = equal(before, null);
  let older = "";
  if (not(unwritten)) {
    older = before;
  }
  let text_runs_changed_answer = text_runs_changed(older, value);
  let before_runs = property_get(text_runs_changed_answer, "before_runs");
  let after_runs = property_get(text_runs_changed_answer, "after_runs");
  let was_runs = before_runs;
  let was_shape = shape;
  if (unwritten) {
    was_runs = [
      {
        text: "not written",
        changed: false,
      },
    ];
    was_shape = "aside";
  }
  let was = app_g_arcs_field_runs(
    parent,
    "was",
    was_runs,
    was_shape,
    voice_color,
    true,
  );
  let now = app_g_arcs_field_runs(
    parent,
    name,
    after_runs,
    shape,
    voice_color,
    false,
  );
  let mark = {
    was,
    now,
  };
  list_add(marks, mark);
}
