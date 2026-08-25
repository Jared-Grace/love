import { app_g_arcs_depth_block } from "./app_g_arcs_depth_block.mjs";
import { app_g_arcs_field_shaped } from "./app_g_arcs_field_shaped.mjs";
import { app_g_arcs_note_pills } from "./app_g_arcs_note_pills.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_arcs_note_row } from "./app_g_arcs_note_row.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { g_arc_answer_field_shape } from "./g_arc_answer_field_shape.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function app_g_arcs_turn_block(parent, card, nickname, bench, voice_color) {
  "$plain nickname";
  "$plain voice_color";
  "One turn of an arc drawn as a box of its own inside the conversation that holds it: what the person said, the passage that answered them printed underneath, the reaction, the moment they believe, every note already standing against the turn, and the row that files another.";
  "THE BOX IS THE UNIT BECAUSE THE NOTE IS FILED FROM IT. The printed page is read straight down and a turn there is three lines among hundreds; here a turn is a thing with a press on it, and everything needed to judge it has to be inside the same box as that press or the reviewer is comparing two places on a screen.";
  "THE OPENER IS SHOWN ON EVERY TURN, which is where this parts from the printed page. There it is printed only when it changes, because a reader going straight down carries the last one they saw; a box is picked up on its own and has to say what the person was answering.";
  "THE MOMENT THEY BELIEVE IS SHOWN AND SHOWN LOUDLY, on the one turn that carries it. It is the only line of a turn that is nobody speaking, and it is the thing a reviewer is really reading for.";
  "THE NUMBER MOVED OUT OF THE LINE AND INTO A HEADING OF ITS OWN. It used to sit in front of what the person said, so the one string on the page held two unrelated facts - which turn this is, and what was spoken in it - and the words the reviewer came to read started a little further right on every card. Standing over the box it labels the whole turn, which is what it was always naming.";
  "EVERY FIELD IS DRAWN THROUGH ONE ROW-MAKER, so a turn and a person read in the same visual language. The kinds differ - what the player opened with recedes, what the person said is voiced, the citation is a fact and the believing is a verdict - and each kind is asked for by name from the one place the fields are described, never spelled here.";
  "THE SCRIPTURE IS DRAWN LIKE A FIELD AND IS NOT ONE. Nobody writing an arc chooses it: it is fetched from the passage the reference names. It is given the same row so that it lines up under the citation it belongs to, and its own kind so that quoted Scripture is never mistaken for something the person said.";
  "THE PERSON'S COLOUR IS CARRIED THROUGH RATHER THAN LOOKED UP. A turn belongs to whoever the conversation belongs to, so asking whose words these are would mean asking the same question once per turn for an answer that was already settled at the top of the arc.";
  arguments_assert(arguments, 5);
  let number = property_get(card, "number");
  let opener = property_get(card, "opener");
  let before = property_get(card, "before");
  let reference = property_get(card, "reference");
  let scripture = property_get(card, "scripture");
  let after = property_get(card, "after");
  let believes = property_get(card, "believes");
  let notes = property_get(card, "notes");
  let block = app_g_arcs_depth_block(parent, 2);
  let v = String(number);
  let said = text_combine_multiple(["turn ", v]);
  let heading = html_div_text(block, said);
  html_style_assign(heading, {
    "font-size": app_shared_font_size_label(),
    "font-weight": "bold",
    opacity: "0.6",
  });
  function turn_field(name, value) {
    let shape = g_arc_answer_field_shape("turn", name);
    app_g_arcs_field_shaped(block, name, value, shape, voice_color);
  }
  turn_field("opener", opener);
  turn_field("before", before);
  turn_field("reference", reference);
  app_g_arcs_field_shaped(block, "scripture", scripture, "scripture");
  let reacted = text_empty_not_is(after);
  if (reacted) {
    turn_field("after", after);
  }
  let turned = text_empty_not_is(believes);
  if (turned) {
    turn_field("believes", believes);
  }
  app_g_arcs_note_pills(block, notes);
  let names = g_arc_answer_field_names("turn");
  app_g_arcs_note_row(block, bench, nickname, number, names);
}
