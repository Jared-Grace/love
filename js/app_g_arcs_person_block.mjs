import { app_g_arcs_depth_block } from "./app_g_arcs_depth_block.mjs";
import { app_g_arcs_field_shaped } from "./app_g_arcs_field_shaped.mjs";
import { app_g_arcs_note_pills } from "./app_g_arcs_note_pills.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_arcs_note_row } from "./app_g_arcs_note_row.mjs";
import { app_g_arcs_turn_block } from "./app_g_arcs_turn_block.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { g_arc_answer_field_shape } from "./g_arc_answer_field_shape.mjs";
import { g_arc_catch_up_name } from "./g_arc_catch_up_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { each } from "./each.mjs";
export function app_g_arcs_person_block(parent, person, bench) {
  "One written arc drawn for review: who the person is, a row for filing a note against the person themselves, and every conversation of theirs as a box holding its own turns.";
  "THE COUNT IN THE HEADING IS OF EVERY NOTE AGAINST THEM, and it is there for the reviewer who is coming back rather than starting. Reviewing a chapter takes more than one sitting, and without it the only way to find out where they stopped is to scroll the whole page looking for bands.";
  "A NOTE AGAINST THE PERSON IS FILED AT TURN NOUGHT, which is the store's own answer to a fault that is nobody's turn. Their occupation or their summary can be wrong without any line being wrong, and a reviewer with only turn-shaped presses would have to file that against whichever line was nearest.";
  "THE CONVERSATION HEADING IS DRAWN HERE AND NOT INSIDE THE CARD, because it stands over several cards and a card drawing its own would repeat it down the page. It carries the catch-up, which is what happened to the person between conversations and is the only thing on the page that is not somebody speaking to them.";
  "A CONVERSATION NOW HOLDS ITS TURNS RATHER THAN STANDING IN FRONT OF THEM. The heading and the cards under it used to be laid side by side in one long run, so where a conversation ended was said by nothing at all - the next heading simply arrived. Held inside a box of its own, it ends where its box ends, and the tree the arc was written as is the tree the page is drawn as.";
  "THE THREE THINGS CHOSEN ABOUT THE PERSON ARE DRAWN IN THE SHAPE OF WHAT EACH ONE IS, and the shape travels with the field rather than being decided here. Their work is a settled fact, their trouble is the person's own voice, and their summary is somebody's description of them - three different kinds of thing, which read as three lines of one paragraph while they were all drawn alike.";
  "THE PERSON IS DRAWN IN THE GAME'S OWN COLOUR FOR THEIR GENDER, in both the shades the game keeps: the wash goes behind their name, the ink goes on their name and on every word they speak anywhere down the arc. So who is a man and who is a woman is answered by the page rather than by remembering which of these names belongs to whom, and a reviewer who has just come from the game is not asked to learn a second set of colours for the same people.";
  "THE RAIL OF THEIR OWN LEVEL IS COLOURED TOO, which is what makes the answer survive scrolling. An arc is many screens long and the heading is on the first of them; the rail is beside every line of it, so the gender is still being stated at the bottom of a long conversation where the name has been off-screen for a minute.";
  "A TURN ARRIVING BEFORE ANY CONVERSATION HAS OPENED IS DRAWN AT THE PERSON'S OWN LEVEL rather than thrown away or thrown for. Every arc read so far opens its first conversation on its first turn, so this is the case that should not happen; a reviewer meeting it sees the turn sitting one rail out from where turns belong, which is both readable and plainly wrong, where a throw would have blanked the whole chapter over one arc.";
  arguments_assert(arguments, 3);
  let index = property_get(person, "index");
  let nickname = property_get(person, "nickname");
  let fields = property_get(person, "fields");
  let notes_count = property_get(person, "notes_count");
  let person_notes = property_get(person, "person_notes");
  let turns = property_get(person, "turns");
  let block = app_g_arcs_depth_block(parent, 0);
  let voice_color = app_g_npc_name_color(person);
  let wash_color = app_g_npc_color(person);
  html_style_set(block, "border-left-color", voice_color);
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
    color: voice_color,
    "background-color": wash_color,
    padding: "0.2rem 0.5rem",
    "border-radius": "0.3rem",
  });
  function field_line(one) {
    let name = property_get(one, "name");
    let value = property_get(one, "value");
    let shape = property_get(one, "shape");
    app_g_arcs_field_shaped(block, name, value, shape, voice_color);
  }
  each(fields, field_line);
  app_g_arcs_note_pills(block, person_notes);
  let names = g_arc_answer_field_names("person");
  app_g_arcs_note_row(block, bench, nickname, 0, names);
  let catch_up_name = g_arc_catch_up_name();
  let catch_up_shape = g_arc_answer_field_shape("conversation", catch_up_name);
  let conversation_block = block;
  function turn_block(card) {
    let starting = property_get(card, "conversation_first");
    if (starting) {
      conversation_block = app_g_arcs_depth_block(block, 1);
      let conversation_number = property_get(card, "conversation_number");
      let v2 = String(conversation_number);
      let said = text_combine_multiple(["conversation ", v2]);
      let line = html_div_text(conversation_block, said);
      html_style_assign(line, {
        "font-weight": "bold",
      });
      let catch_up = property_get(card, "catch_up");
      let caught_up = text_empty_not_is(catch_up);
      if (caught_up) {
        app_g_arcs_field_shaped(
          conversation_block,
          catch_up_name,
          catch_up,
          catch_up_shape,
          voice_color,
        );
      }
    }
    app_g_arcs_turn_block(
      conversation_block,
      card,
      nickname,
      bench,
      voice_color,
    );
  }
  each(turns, turn_block);
}
