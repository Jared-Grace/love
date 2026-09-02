import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { each } from "./each.mjs";
export function app_shared_note_box(parent, bench, subject, names, filed) {
  "$plain subject";
  "A box to write one note in and a press for each part of the thing above it, so that filing a note is one press on the part it is about.";
  "THE PART IS THE BUTTON AND IS NEVER TYPED. A note is addressed by what it is against and by which part of that thing is wrong, and the first of those is already known by the place this box was drawn - so the only thing left for a hand to get wrong is the part, and a row of presses named after the parts removes that too. Typed into a terminal, a misspelt part files a note nothing later looks for and nothing goes red.";
  "AN EMPTY BOX IS ANSWERED AND NOT FILED. A note with no words in it is addressed correctly and says nothing, so it survives every reader as a fault that was found and cannot be acted on - which costs a reviser a reading to discover.";
  "THE PARTS ARE HANDED IN rather than named here, because the same box is drawn under things with different parts - a turn of a person's arc has different parts wrong with it than a drawing does. Named here it would offer a reviewer a part the thing above it does not have.";
  "WHERE THE NOTE GOES IS HANDED IN TOO, and that is what lets one box serve two stores. Filing is one call taking the part and the words, and everything else the store wants - which chapter, which couplet, which person - is already held by whoever drew the box and is closed over rather than passed through here. A box that knew the store would be a second box the next time a different thing wanted reviewing.";
  "WHAT THE NOTE IS AGAINST IS SAID IN WORDS rather than worked out, because it is only ever read by a person watching the status line. Filing a note against field of turn 12 and filing a note against colour of couplet 26 are the same sentence with one phrase swapped, so the phrase is the argument.";
  arguments_assert(arguments, 5);
  let status_set = property_get(bench, "status_set");
  let status_working = property_get(bench, "status_working");
  let render = property_get(bench, "render");
  ("THE BOX SAYS WHAT IT WILL FAULT WHILE THE NOTE IS BEING TYPED, and until it did the address was said only afterwards. The subject was already known here and was spent entirely on the line reporting what had happened, which arrives one press too late to stop anything. A note box sits below everything it is about, so by the time a hand reaches it the words being faulted have scrolled off the top - and a reviewer then types from memory against an address nothing in front of them names. That is not a rare slip: it cost a note filed one turn late, answered as a fault, and a line rewritten that had never been wrong. The turn is now in the empty box, where it is read before anything is typed rather than after everything is.");
  let box = html_textarea(parent);
  let asked = text_combine_multiple(["a note against ", subject]);
  html_placeholder(box, asked);
  html_style_assign(box, {
    width: "100%",
    "min-height": "3rem",
    "margin-top": "0.4rem",
    "font-size": app_shared_font_size_label(),
    "line-height": "1.4",
    "box-sizing": "border-box",
  });
  let controls = html_div(parent);
  html_style_assign(controls, {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "0.4rem",
    "margin-top": "0.3rem",
  });
  function field_button(field) {
    async function on_note() {
      let typed = html_value_get(box);
      let empty = text_empty_is(typed);
      if (empty) {
        status_set("write the note first, then press the part it is about");
        return;
      }
      let said = text_combine_multiple([
        "filing a note against ",
        field,
        " of ",
        subject,
      ]);
      status_working(said);
      try {
        await filed(field, typed);
        let done = text_combine_multiple([
          "filed a note against ",
          field,
          " of ",
          subject,
        ]);
        status_set(done);
        await render();
      } catch (failed) {
        let missed = text_combine_multiple([
          "could not file the note against ",
          field,
          " of ",
          subject,
        ]);
        status_set(missed);
      }
    }
    app_shared_button(controls, field, on_note);
  }
  each(names, field_button);
}
