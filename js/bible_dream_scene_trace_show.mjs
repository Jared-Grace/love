import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { bible_dream_click_still_far } from "./bible_dream_click_still_far.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
import { bible_dream_scene_guides_dim } from "./bible_dream_scene_guides_dim.mjs";
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
  "★ THE HAND LEAVING THE PICTURE BREAKS THE LINE, AND THE STROKE STAYS THE ONE BEING TRACED. Off the edge nothing is reported at all, so a hand that goes out and comes back in somewhere else is heard from twice with no word about the journey, and the two places would be joined. Breaking the line on the way out says the truth: what happened outside is not part of the drawing. The stroke is deliberately not let go of at the same time, because a button held down is a hand still on that stroke, and returning to it should carry on and not have to be begun again.";
  "★ THE MOVEMENT OF THE POINTER IS ANSWERED EVEN WHEN NOTHING IS BEING TRACED, AND IT USED TO BE THROWN AWAY. A press had to happen before any movement meant anything, which was true of the drawing and false of the picture: the strokes brighten as the pointer nears them, and that is guidance for choosing which one to take, so it has to be working while the choosing is going on. Nothing is drawn by it and no trace is moved by it - it only says where the hand is.";
  "★ A BUTTON DOES NOT HAVE TO BE HELD DOWN FOR A STROKE TO GO ON BEING DRAWN, AND THAT IS A CLICK AWAY. Tracing a long shape means holding a button through the whole of it, and a hand that is holding something is a hand that is worse at going where it is aimed - it drifts on the press, it drifts again on the release, and on a trackpad it can barely turn a corner without letting go by accident. So a press and a release with no journey between them is read as a request to carry on without being held: from then on bare movement draws, and the next press ends it. Nothing is taken away by this - a press, a drag and a release still behave exactly as they always did, because that release DID have a journey between its ends.";
  "The two gestures are told apart by distance and not by time, and time was the obvious thing to reach for. A slow careful click is still a click and a fast flick is still a drag, so what separates them is whether the hand went anywhere, which is the thing the player actually did.";
  "Letting go of a latched stroke lifts the hand as any release would, so the line breaks where the player stopped rather than joining that place to wherever they press next.";
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
  let latched = false;
  let pressed_at = null;
  function readout_show() {
    let text = bible_dream_trace_status_text(states, told);
    html_text_set(readout, text);
  }
  function on_press(event) {
    let at = bible_dream_drawing_point(drawing, event);
    if (latched) {
      bible_dream_stroke_hand_lift(active);
      active = null;
      latched = false;
      return;
    }
    pressed_at = at;
    active = bible_dream_stroke_begin_near(states, at, 169);
    if (active) {
      bible_dream_stroke_hand_lift(active);
    }
  }
  function on_drag(event) {
    let at = bible_dream_drawing_point(drawing, event);
    bible_dream_scene_guides_dim(states, at);
    if (not(active)) {
      return;
    }
    bible_dream_stroke_hand_step(active, at);
    if (active.done) {
      bible_dream_stroke_finish_told(active, told);
      bible_dream_stroke_hand_lift(active);
      active = null;
      latched = false;
    }
    readout_show();
  }
  function on_release(event) {
    if (not(active)) {
      return;
    }
    let at = bible_dream_drawing_point(drawing, event);
    let gap_squared = bible_dream_point_gap_squared(at, pressed_at);
    let still = bible_dream_click_still_far();
    let still_squared = multiply(still, still);
    if (less_than(gap_squared, still_squared)) {
      latched = true;
      return;
    }
    bible_dream_stroke_hand_lift(active);
    active = null;
  }
  function on_leave(event) {
    if (active) {
      bible_dream_stroke_hand_lift(active);
    }
  }
  html_on(drawing, "pointerdown", on_press);
  html_on(drawing, "pointermove", on_drag);
  html_on(drawing, "pointerup", on_release);
  html_on(drawing, "pointerleave", on_leave);
  readout_show();
  return root;
}
