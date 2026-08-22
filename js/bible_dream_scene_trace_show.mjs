import { property_get } from "./property_get.mjs";
import { bible_dream_scene_trace_show_on_leave } from "./bible_dream_scene_trace_show_on_leave.mjs";
import { bible_dream_scene_words_show } from "./bible_dream_scene_words_show.mjs";
import { bible_dream_scene_drawing_add } from "./bible_dream_scene_drawing_add.mjs";
import { html_body_div_page_dark } from "./html_body_div_page_dark.mjs";
import { html_on } from "./html_on.mjs";
import { bible_dream_stroke_place } from "./bible_dream_stroke_place.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
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
  "★ THE DISTANCE IS THE FURTHEST THE HAND EVER GOT FROM THE PRESS, NOT WHERE IT HAPPENED TO BE WHEN THE BUTTON CAME UP. Those two are the same for a straight drag and completely different for a round one, and the shapes here are mostly round: a player who presses on a cow's back, traces the whole animal and lets go where they began has moved a great deal and finished a foot from where they started. Read at the release alone that is a click, and the drawing carries on following an unpressed mouse - which is exactly what was reported. Keeping the furthest cannot be fooled that way, because a hand that went anywhere has to have BEEN somewhere far, whatever it did afterwards.";
  "★ A REPORT WITH NO BUTTON HELD ENDS THE PRESS, WHICHEVER WAY THE RELEASE WENT MISSING. A press is supposed to end with a release, and several ordinary things stop that release from arriving: the button comes up outside the picture, or the browser cancels the gesture in favour of one of its own, or the window loses the mouse altogether. Every one of them leaves a stroke being drawn by a hand that is no longer pressing anything, and no amount of care in the release can fix a release that never happens. Every movement says whether a button is down, so the truth is available on every report and does not have to be remembered - and while the hand is latched this is ignored on purpose, because there the whole point is that nothing is being held.";
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
  let r = bible_dream_scene_trace_show_on_leave(states, told, readout, drawing);
  let on_leave = property_get(r, "on_leave");
  let on_release = property_get(r, "on_release");
  let on_drag = property_get(r, "on_drag");
  let on_press = property_get(r, "on_press");
  let readout_show = property_get(r, "readout_show");
  html_on(drawing, "pointerdown", on_press);
  html_on(drawing, "pointermove", on_drag);
  html_on(drawing, "pointerup", on_release);
  html_on(drawing, "pointerleave", on_leave);
  readout_show();
  return root;
}
