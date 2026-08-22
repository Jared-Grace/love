import { bible_dream_trace_hand } from "./bible_dream_trace_hand.mjs";
import { bible_dream_trace_readout_write } from "./bible_dream_trace_readout_write.mjs";
import { bible_dream_trace_hand_press } from "./bible_dream_trace_hand_press.mjs";
import { bible_dream_trace_hand_drag } from "./bible_dream_trace_hand_drag.mjs";
import { bible_dream_trace_hand_release } from "./bible_dream_trace_hand_release.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_stroke_hand_lift } from "./bible_dream_stroke_hand_lift.mjs";
export function bible_dream_scene_trace_hand_watch(
  states,
  told,
  readout,
  drawing,
) {
  "Everything that watches the hand over a dream being traced - what a press, a movement, a release and a leaving each do - handed back together with the writing of the line that says how far along the drawing is.";
  "WHAT THE FIVE SHARE IS ONE RECORD, made here and handed to each of them. What is being traced, whether the hand has been let off the button, where it was pressed and how far it has been since are only ever true together, and a watcher handed a copy of them would answer about a drawing nobody is doing.";
  "SO EACH OF THEM HAS A NAME AND A FILE OF ITS OWN, and what is left here is the joining: which movement of a pointer means which of them, in five lines a reader can see at once.";
  "IT IS HANDED THE PAGE RATHER THAN MAKING IT, so that the page can be laid out once and watched by this, and so that a reader looking for what a drag does does not walk past the laying out of a page to reach it.";
  "THE HAND LEAVING THE PICTURE IS THE ONE THING STILL WRITTEN OUT HERE, because it is the one thing that is not a step of the drawing: it breaks the line and deliberately does not let the stroke go, since a button held down is a hand still on that stroke and returning to it should carry on rather than begin again.";
  arguments_assert(arguments, 4);
  let hand = bible_dream_trace_hand();
  function readout_show() {
    bible_dream_trace_readout_write(readout, states, told);
  }
  function on_press(event) {
    bible_dream_trace_hand_press(hand, states, drawing, event);
  }
  function on_drag(event) {
    bible_dream_trace_hand_drag(hand, states, told, readout, drawing, event);
  }
  function on_release(event) {
    bible_dream_trace_hand_release(hand);
  }
  function on_leave(event) {
    let active = property_get(hand, "active");
    if (active) {
      bible_dream_stroke_hand_lift(active);
    }
  }
  let r = {
    readout_show,
    on_press,
    on_drag,
    on_release,
    on_leave,
  };
  return r;
}
