import { bible_dream_stroke_hand_lift } from "./bible_dream_stroke_hand_lift.mjs";
import { bible_dream_stroke_hand_step } from "./bible_dream_stroke_hand_step.mjs";
import { bible_dream_stroke_finish_told } from "./bible_dream_stroke_finish_told.mjs";
import { bible_dream_scene_words_show } from "./bible_dream_scene_words_show.mjs";
import { bible_dream_scene_drawing_add } from "./bible_dream_scene_drawing_add.mjs";
import { html_body_div_page_dark } from "./html_body_div_page_dark.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_on } from "./html_on.mjs";
import { bible_dream_stroke_place } from "./bible_dream_stroke_place.mjs";
import { bible_dream_drawing_point } from "./bible_dream_drawing_point.mjs";
import { bible_dream_stroke_begin_near } from "./bible_dream_stroke_begin_near.mjs";
import { bible_dream_trace_status_text } from "./bible_dream_trace_status_text.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export function bible_dream_scene_trace_show(scene) {
  "Put one dream on a screen and let it be drawn: every stroke the passage gave, laid out faint and all at once, each waiting to be traced by dragging along it, in whatever order the player picks.";
  "★ IT KNOWS NOTHING ABOUT WHICH DREAM IT IS SHOWING, AND THAT IS THE CLAIM THE SECOND PASSAGE WAS BUILT TO TEST. Pharaoh's dream is a row of repeated shapes standing apart; the prison dreams are things stacked on and hanging off one another, with open strokes and closed ones mixed. If a scene needed its own code to be drawable then there is no mechanic here, only one passage with a picture painted for it. Everything that varies between the two lives in the scene, and everything here is the same for both.";
  "The order is the freedom here and it is a real one. Nothing enforces the Nile before the reeds, or the fat cows before the gaunt ones, and drawing the gaunt ones first tells Pharaoh a different dream out of the same strokes. Within a stroke there is no order at all: put your hand down anywhere on it and go either way.";
  "Two things answer the wandering rather than only punishing it. The hand's own line stays on the page, thinning and fading the further it went from what it was given, so an imprecise trace leaves a real drawing behind it and not a blank. And a finished shape is answered by ornament read out of its own bumps, written in a moment later at about the speed of a hand, so that something else is plainly at work beside the player. Neither adds a line the passage did not give: the first is the player's own line and the second is a reply to the shape, and only the ink between them is Scripture's.";
  "The slips are the second half of the answer. A stroke can be finished having left its corridor a dozen times, and the count says so, because NUM12:8 puts a plain word above a riddle and a shape drawn badly is what a riddle is made of. Nothing yet DOES anything with that number - what it costs is a design decision and this is not the file to make it in.";
  "What is left here is the watching of the hand and nothing else. Making the words and making the surface both went to their own names, because neither of them has anything to do with a pointer, and a reader looking for what a drag does should not have to walk past twenty lines of laying out a page to reach it.";
  let root = html_body_div_page_dark();
  let readout = bible_dream_scene_words_show(root, scene);
  let drawing = bible_dream_scene_drawing_add(root, scene);
  let states = [];
  function each_stroke(stroke) {
    let state = bible_dream_stroke_place(drawing, stroke);
    list_add(states, state);
  }
  each(scene.strokes, each_stroke);
  let told = [];
  let active = null;
  function readout_show() {
    let text = bible_dream_trace_status_text(states, told);
    html_text_set(readout, text);
  }
  function on_press(event) {
    let at = bible_dream_drawing_point(drawing, event);
    active = bible_dream_stroke_begin_near(states, at, 169);
    if (active) {
      bible_dream_stroke_hand_lift(active);
    }
  }
  function on_drag(event) {
    if (not(active)) {
      return;
    }
    let at = bible_dream_drawing_point(drawing, event);
    bible_dream_stroke_hand_step(active, at);
    if (active.done) {
      bible_dream_stroke_finish_told(active, told);
      bible_dream_stroke_hand_lift(active);
      active = null;
    }
    readout_show();
  }
  function on_release(event) {
    if (active) {
      bible_dream_stroke_hand_lift(active);
    }
    active = null;
  }
  html_on(drawing, "pointerdown", on_press);
  html_on(drawing, "pointermove", on_drag);
  html_on(drawing, "pointerup", on_release);
  readout_show();
  return root;
}
