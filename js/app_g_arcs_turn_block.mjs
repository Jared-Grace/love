import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_arcs_note_row } from "./app_g_arcs_note_row.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { each } from "./each.mjs";
export function app_g_arcs_turn_block(parent, card, nickname, bench) {
  "$plain nickname";
  "One turn of an arc drawn as a card of its own: what the person said, the passage that answered them printed underneath, the reaction, the moment they believe, every note already standing against the turn, and the row that files another.";
  "THE CARD IS THE UNIT BECAUSE THE NOTE IS FILED FROM IT. The printed page is read straight down and a turn there is three lines among hundreds; here a turn is a thing with a press on it, and everything needed to judge it has to be inside the same box as that press or the reviewer is comparing two places on a screen.";
  "THE OPENER IS SHOWN ON EVERY CARD, which is where this parts from the printed page. There it is printed only when it changes, because a reader going straight down carries the last one they saw; a card is picked up on its own and has to say what the person was answering.";
  "THE NOTES ALREADY STANDING ARE SHOWN ABOVE THE BOX, because the commonest thing a second reader does is file again what the first one already filed. They are shown with the part they were filed against, so a reader can see whether their own finding is the same one.";
  "THE MOMENT THEY BELIEVE IS SHOWN AND SHOWN LOUDLY, on the one turn that carries it. It is the only line of a turn that is nobody speaking, and it is the thing a reviewer is really reading for.";
  arguments_assert(arguments, 4);
  let number = property_get(card, "number");
  let opener = property_get(card, "opener");
  let before = property_get(card, "before");
  let reference = property_get(card, "reference");
  let scripture = property_get(card, "scripture");
  let after = property_get(card, "after");
  let believes = property_get(card, "believes");
  let notes = property_get(card, "notes");
  let block = html_div(parent);
  html_style_assign(block, {
    "margin-top": "0.8rem",
    "border-top": "1px solid rgba(0,0,0,0.15)",
    "padding-top": "0.5rem",
  });
  let opener_line = html_div_text(block, opener);
  html_style_assign(opener_line, {
    "font-size": app_shared_font_size_label(),
    opacity: "0.55",
  });
  let v = String(number);
  let said = text_combine_multiple([v, ". ", before]);
  let before_line = html_div_text(block, said);
  html_style_assign(before_line, {
    "margin-top": "0.2rem",
    "line-height": "1.4",
  });
  let reference_line = html_div_text(block, reference);
  html_style_assign(reference_line, {
    "margin-top": "0.4rem",
    "font-weight": "bold",
    "font-size": app_shared_font_size_label(),
  });
  let scripture_line = html_div_text(block, scripture);
  html_style_assign(scripture_line, {
    "line-height": "1.4",
    "padding-left": "0.8rem",
    "border-left": "2px solid rgba(0,0,0,0.2)",
  });
  let reacted = text_empty_not_is(after);
  if (reacted) {
    let after_line = html_div_text(block, after);
    html_style_assign(after_line, {
      "margin-top": "0.4rem",
      "line-height": "1.4",
    });
  }
  let turned = text_empty_not_is(believes);
  if (turned) {
    let believes_said = text_combine_multiple(["BELIEVES: ", believes]);
    let believes_line = html_div_text(block, believes_said);
    html_style_assign(believes_line, {
      "margin-top": "0.4rem",
      "font-weight": "bold",
    });
  }
  app_g_arcs_note_pills(block, notes);
  let names = g_arc_answer_field_names("turn");
  app_g_arcs_note_row(block, bench, nickname, number, names);
}
