import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_arcs_depth_block } from "./app_g_arcs_depth_block.mjs";
import { properties_size } from "./properties_size.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
import { g_arc_answer_field_shape } from "./g_arc_answer_field_shape.mjs";
import { app_g_arcs_field_pair } from "./app_g_arcs_field_pair.mjs";
import { app_g_arcs_field_shaped } from "./app_g_arcs_field_shaped.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_shared_note_pills } from "./app_shared_note_pills.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { app_g_arcs_note_row } from "./app_g_arcs_note_row.mjs";
export function app_g_arcs_turn_block(
  parent,
  card,
  nickname,
  bench,
  voice_color,
) {
  "$plain nickname";
  "$plain voice_color";
  "One turn of an arc drawn as a box of its own inside the conversation that holds it: what the person said, the passage that answered them printed underneath, the reaction, the moment they believe, whatever has moved in the turn since it was read, every note already standing against it, and the row that files another.";
  "THE BOX IS THE UNIT BECAUSE THE NOTE IS FILED FROM IT. The printed page is read straight down and a turn there is three lines among hundreds; here a turn is a thing with a press on it, and everything needed to judge it has to be inside the same box as that press or the reviewer is comparing two places on a screen.";
  "THE HEADING COUNTS WHAT MOVED IN THE TURN, and that is what makes a long arc skimmable at all. The marks on the lines themselves are found only by whoever is looking at those lines; a reviewer scrolling past a turn at speed reads the heading and nothing else, so a turn that has been rewritten has to say so in the one thing that is always read.";
  "THE HEADING CHANGES COLOUR AS WELL AS WORDS, because a count is a small thing at the size a heading is drawn. The colour is caught by an eye that is moving; the count is read once the eye has stopped.";
  "THE HEADING ALSO COUNTS WHAT WAS ASKED ABOUT AND KEPT, for the reason it counts what moved: a reviewer going past at speed reads this line and nothing else, and a turn where their note was answered by leaving the wording alone is otherwise indistinguishable at heading height from a turn nobody has ever written about.";
  "THE KEPT COUNT DOES NOT COLOUR THE HEADING, and that is not an oversight. The colour means this turn is not as you last read it, which is exactly what a kept turn is not; wearing it, a turn whose whole news is that nothing moved would be shouting the one thing that did not happen.";
  "THE TWO COUNTS ARE APPENDED TO WHATEVER THE HEADING ALREADY SAYS rather than each spelling the whole line out. Spelled out, a turn with one of each could only be drawn by writing a third whole line for the pair, and the number of lines to write doubles with every count added.";
  "THE TWO NUMBERS IN THE HEADING ARE HELD APART BY A MARK AND NOT BY SPACE. Which turn this is and how many of its lines moved are both numbers, and a page collapses a run of spaces to one - so turn four with one line moved was drawn as turn 4 1 moved, which reads as turn forty-one.";
  "THE OPENER IS SHOWN ON EVERY TURN, which is where this parts from the printed page. There it is printed only when it changes, because a reader going straight down carries the last one they saw; a box is picked up on its own and has to say what the person was answering.";
  "THE MOMENT THEY BELIEVE IS SHOWN AND SHOWN LOUDLY, on the one turn that carries it. It is the only line of a turn that is nobody speaking, and it is the thing a reviewer is really reading for.";
  "THE NUMBER MOVED OUT OF THE LINE AND INTO A HEADING OF ITS OWN. It used to sit in front of what the person said, so the one string on the page held two unrelated facts - which turn this is, and what was spoken in it - and the words the reviewer came to read started a little further right on every card. Standing over the box it labels the whole turn, which is what it was always naming.";
  "EVERY FIELD IS DRAWN THROUGH ONE ROW-MAKER, so a turn and a person read in the same visual language. The kinds differ - what the player opened with recedes, what the person said is voiced, the citation is a fact and the believing is a verdict - and each kind is asked for by name from the one place the fields are described, never spelled here.";
  "A FIELD IS ASKED FOR ONCE AND COMES BACK AS ONE LINE OR AS TWO, so this place never learns that a previous wording exists or where one goes. It used to draw the line itself and then ask for it to be marked, which meant the older wording could only ever arrive after the newer one - the wrong way round for reading, and the wrong place to be deciding it.";
  "WHAT MOVED IS DRAWN UNDER THE FIELD THAT MOVED AND NOT COLLECTED AT THE FOOT OF THE TURN. A reviewer holding a rewritten line against the one it replaced needs the two of them touching; gathered into a list at the bottom, the previous wording of the third field sits four lines away from the third field, and matching them up is work the page can do instead.";
  "THE SCRIPTURE IS DRAWN LIKE A FIELD AND IS NOT ONE. Nobody writing an arc chooses it: it is fetched from the passage the reference names. It is given the same row so that it lines up under the citation it belongs to, and its own kind so that quoted Scripture is never mistaken for something the person said. It is the one row with no previous wording underneath it, because nothing anybody wrote can move it.";
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
  let moved = property_get(card, "moved");
  let held = property_get(card, "held");
  let unechoed = property_get(card, "passage_unechoed");
  let block = app_g_arcs_depth_block(parent, 2);
  let v = String(number);
  let moved_count = properties_size(moved);
  let held_count = properties_size(held);
  let changed = not_equal(moved_count, 0);
  let kept = not_equal(held_count, 0);
  let said = text_combine_multiple(["turn ", v]);
  if (changed) {
    let counted = String(moved_count);
    said = text_combine_multiple([said, "  ·  ", counted, " moved"]);
  }
  if (kept) {
    let counted_kept = String(held_count);
    said = text_combine_multiple([said, "  ·  ", counted_kept, " kept"]);
  }
  ("THE PASSAGE MARK IS SAID IN THE HEADING BESIDE THE OTHER TWO, because all three answer the one question a reviewer is asking of a turn before they read it - is there a reason to stop here. A mark of its own further down would be read after the line rather than before it, which is the wrong way round for something whose whole purpose is to save the reading.");
  if (unechoed) {
    said = text_combine_multiple([said, "  ·  nothing from the passage"]);
  }
  let heading = html_div_text(block, said);
  html_style_assign(heading, {
    "font-size": app_shared_font_size_label(),
    "font-weight": "bold",
    opacity: "0.6",
  });
  if (changed) {
    html_style_assign(heading, {
      color: app_g_arcs_moved_color(),
      opacity: "1",
    });
  }
  ("IT IS BROUGHT FORWARD BUT NOT COLOURED, because the colour on this heading already means one thing - that the line has moved since the reader last saw it - and a second meaning on the same colour would leave a reviewer unable to tell which of the two a heading is telling them. Full strength on a grey heading is enough to catch an eye running down a column of faded ones.");
  if (unechoed) {
    html_style_assign(heading, {
      opacity: "1",
    });
  }
  let marks = property_get(bench, "marks");
  function turn_field(name, value) {
    let shape = g_arc_answer_field_shape("turn", name);
    app_g_arcs_field_pair({
      parent: block,
      moved_fields: moved,
      held_fields: held,
      name,
      value,
      shape,
      voice_color,
      marks,
    });
  }
  turn_field("opener", opener);
  turn_field("before", before);
  turn_field("reference", reference);
  app_g_arcs_field_shaped(
    block,
    "scripture",
    scripture,
    "scripture",
    voice_color,
  );
  let reacted = text_empty_not_is(after);
  if (reacted) {
    turn_field("after", after);
  }
  let turned = text_empty_not_is(believes);
  if (turned) {
    turn_field("believes", believes);
  }
  app_shared_note_pills(block, notes);
  let names = g_arc_answer_field_names("turn");
  app_g_arcs_note_row(block, bench, nickname, number, names);
}
