import { property_get } from "./property_get.mjs";
import { bible_dream_stroke_place_marks } from "./bible_dream_stroke_place_marks.mjs";
import { bible_dream_stroke_place_state } from "./bible_dream_stroke_place_state.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function bible_dream_stroke_place(drawing, stroke) {
  "Draw one stroke of a dream twice over - a wide faint one showing where it goes, and a bright thin one hidden until it is traced - and hand back everything a trace of it will need.";
  "The faint one IS the corridor. It is drawn wide rather than described in words because a player has to be able to see how much room they have before they start moving, and a rule that only announces itself by being broken is not a rule anybody can play against.";
  "The bright one is drawn whole and then hidden entirely by a dash as long as itself, so that revealing it is a matter of saying which parts to show rather than of building a new path out of what has been traced so far. What a player sees appear is exactly the shape that was always there, which is the point of the whole palette: no move adds a line the passage did not give.";
  "The marks start out all false and there is one for every sample, because a stroke may be begun anywhere along itself and drawn either way, so what has been covered can be several pieces at once and only a mark per sample can say that.";
  "Whether the stroke closes is asked once here rather than at every report of the pointer, because it is a fact about the drawing and cannot change while the drawing is being traced. It is asked of the samples and not of the path text, so it can never disagree with the thing actually being compared against.";
  "Two empty layers are made at the same time and the order they sit in is the argument the picture makes. The corridor is underneath everything because it is only a direction. The hand's own wandering line goes over it, because what the player did is more than a direction. Scripture's ink goes over that, because what arrived outranks what was attempted. The ornament goes over all of it, because it is the answer made to a finished thing.";
  "It is placed by moving the whole pair rather than by redrawing the shape at its position, so the pointer only ever has to be shifted by the offset to be compared against the samples.";
  "★ THE STROKE IS ASKED HOW MANY WERE LAID BEFORE IT, AND THAT NUMBER IS THE ONLY NAME IT WILL EVER HAVE. The hand's line is painted with a fading of its own for every piece, and a fading in a drawing has to be referred to by a written name, so every piece of every stroke needs a name no other piece shares. Counting what is already on the surface gives one without anything having to remember a running total between calls: nobody else is laying strokes into this drawing, so the count at the moment of laying is this stroke's place in the order and cannot be anyone else's.";
  "The faint one is kept as well as the bright one, which it was not before. It is a fixed drawing in the sense that its shape never changes, but how strongly it shows does: the strokes far from the hand step back so that the one being worked on stands out, and something has to hold the thing whose showing is being changed.";
  let laid = html_component_element_get(drawing);
  let rank = laid.children.length;
  let group = html_element_svg(drawing, "g");
  let moved = "translate(" + stroke.x + "," + stroke.y + ")";
  let r = bible_dream_stroke_place_marks(group, moved, stroke);
  let marks = property_get(r, "marks");
  let guide = property_get(r, "guide");
  let ink = html_element_svg(group, "path");
  html_attribute_set(ink, "d", stroke.d);
  html_attribute_set(ink, "fill", "none");
  let state = bible_dream_stroke_place_state(
    ink,
    group,
    stroke,
    rank,
    guide,
    marks,
  );
  return state;
}
