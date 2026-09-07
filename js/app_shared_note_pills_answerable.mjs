import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter_property_exclude_if_exists } from "./list_filter_property_exclude_if_exists.mjs";
import { app_shared_note_pill } from "./app_shared_note_pill.mjs";
import { property_get } from "./property_get.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { each } from "./each.mjs";
export function app_shared_note_pills_answerable(parent, notes, answer) {
  "$plain parent";
  "$plain notes";
  "$plain answer";
  "The notes still standing against one thing, each drawn as a band with one press at the end of it to say it has been answered.";
  "IT IS THE PLAIN LIST OF BANDS WITH A PRESS ADDED, and it is a second function rather than a wider one because a bench that has no idea of answering a note has nothing to hand in. The arcs blocks draw every note and offer no press; asked for one they would have to invent an answer that did nothing.";
  "IT SHOULD ABSORB THE HYMN'S OWN COPY, which is this with one store written into it instead of handed in. That is not done here only because the hymn's files are being worked on; whoever finds them cold should point them at this and delete theirs.";
  "THE ANSWERED ONES ARE NOT DRAWN AT ALL. A note whose fault has been taken out asks a reader for a judgment they have already made, and a round's worth of them stacked over the box buries the one or two that are still true. These are read on a phone, where the notes and whatever they are about compete for the same screen.";
  "WHAT ANSWERING MEANS IS HANDED IN AND IS NOT DECIDED HERE. A drawing, a person's arc and a lyric video's background picture each keep their notes in their own store, and a band that knew which store it belonged to could only be drawn on one bench. What is handed in takes the note's own words, so it is also what decides that a note is addressed by its words and never by its place in the list.";
  "IT DOES NOT TAKE ITS OWN BAND DOWN, and the thing handed in is expected to ask the store again instead. Taking the band down would show what the browser hoped had happened; asking again shows what was actually written, so a press that failed leaves its note standing where it can be pressed a second time rather than vanishing and staying filed.";
  "THE STORES KEEP AN ANSWERED NOTE AND ONLY THIS LIST STOPS SHOWING IT, so nothing anybody said is lost by pressing - which is what makes the press safe to give a reader who cannot undo it.";
  arguments_assert(arguments, 3);
  let open = list_filter_property_exclude_if_exists(notes, "done", true);
  function note_line(one) {
    let line = app_shared_note_pill(parent, one);
    async function answered() {
      let words = property_get(one, "note");
      await answer(words);
    }
    let press = html_button(line, "answered", answered);
    html_style_assign(press, {
      "margin-left": "0.5rem",
      "font-size": app_shared_font_size_label(),
      padding: "0.35rem 0.8rem",
      "border-radius": "0.25rem",
      "white-space": "nowrap",
    });
  }
  each(open, note_line);
}
