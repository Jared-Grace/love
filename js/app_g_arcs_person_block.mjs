import { app_g_arcs_note_pills } from "./app_g_arcs_note_pills.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_arcs_note_row } from "./app_g_arcs_note_row.mjs";
import { app_g_arcs_turn_block } from "./app_g_arcs_turn_block.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { each } from "./each.mjs";
export function app_g_arcs_person_block(parent, person, bench) {
  "One written arc drawn for review: who the person is, a row for filing a note against the person themselves, and every turn of theirs as a card, with each conversation's heading and catch-up standing over the turns it holds.";
  "THE COUNT IN THE HEADING IS OF EVERY NOTE AGAINST THEM, and it is there for the reviewer who is coming back rather than starting. Reviewing a chapter takes more than one sitting, and without it the only way to find out where they stopped is to scroll the whole page looking for bands.";
  "A NOTE AGAINST THE PERSON IS FILED AT TURN NOUGHT, which is the store's own answer to a fault that is nobody's turn. Their occupation or their summary can be wrong without any line being wrong, and a reviewer with only turn-shaped presses would have to file that against whichever line was nearest.";
  "THE CONVERSATION HEADING IS DRAWN HERE AND NOT INSIDE THE CARD, because it stands over several cards and a card drawing its own would repeat it down the page. It carries the catch-up, which is what happened to the person between conversations and is the only thing on the page that is not somebody speaking to them.";
  arguments_assert(arguments, 3);
  let index = property_get(person, "index");
  let nickname = property_get(person, "nickname");
  let fields = property_get(person, "fields");
  let notes_count = property_get(person, "notes_count");
  let person_notes = property_get(person, "person_notes");
  let turns = property_get(person, "turns");
  let block = html_div(parent);
  html_style_assign(block, {
    "margin-top": "1.2rem",
    "border-top": "2px solid rgba(0,0,0,0.35)",
    "padding-top": "0.6rem",
  });
  let v = String(index);
  let counted = String(notes_count);
  let named = text_combine_multiple([
    nickname,
    "  (",
    v,
    ")  ·  ",
    counted,
    " notes",
  ]);
  let heading = html_div_text(block, named);
  html_style_assign(heading, {
    "font-weight": "bold",
    "font-size": "1.25rem",
  });
  function field_line(one) {
    let name = property_get(one, "name");
    let value = property_get(one, "value");
    let joined = text_combine_multiple([name, ": ", value]);
    let line = html_div_text(block, joined);
    html_style_assign(line, {
      "margin-top": "0.2rem",
      "line-height": "1.4",
      opacity: "0.8",
    });
  }
  each(fields, field_line);
  app_g_arcs_note_pills(block, person_notes);
  let names = g_arc_answer_field_names("person");
  app_g_arcs_note_row(block, bench, nickname, 0, names);
  function turn_block(card) {
    let starting = property_get(card, "conversation_first");
    if (starting) {
      let conversation_number = property_get(card, "conversation_number");
      let v2 = String(conversation_number);
      let said = text_combine_multiple(["conversation ", v2]);
      let line = html_div_text(block, said);
      html_style_assign(line, {
        "margin-top": "1rem",
        "font-weight": "bold",
      });
      let catch_up = property_get(card, "catch_up");
      let caught_up = text_empty_not_is(catch_up);
      if (caught_up) {
        let catch_up_line = html_div_text(block, catch_up);
        html_style_assign(catch_up_line, {
          "font-size": app_shared_font_size_label(),
          "line-height": "1.4",
          opacity: "0.7",
        });
      }
    }
    app_g_arcs_turn_block(block, card, nickname, bench);
  }
  each(turns, turn_block);
}
