import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_stroke_hand_lift } from "./bible_dream_stroke_hand_lift.mjs";
import { bible_dream_trace_status_text } from "./bible_dream_trace_status_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { bible_dream_drawing_point } from "./bible_dream_drawing_point.mjs";
import { bible_dream_stroke_begin_near } from "./bible_dream_stroke_begin_near.mjs";
import { bible_dream_scene_guides_dim } from "./bible_dream_scene_guides_dim.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { bible_dream_point_gap_squared } from "./bible_dream_point_gap_squared.mjs";
import { greater_than } from "./greater_than.mjs";
import { bible_dream_stroke_hand_step } from "./bible_dream_stroke_hand_step.mjs";
import { bible_dream_stroke_finish_told } from "./bible_dream_stroke_finish_told.mjs";
import { bible_dream_click_still_far } from "./bible_dream_click_still_far.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
export function bible_dream_scene_trace_show_on_leave(
  states,
  told,
  readout,
  drawing,
) {
  arguments_assert(arguments, 4);
  let active = null;
  let latched = false;
  let pressed_at = null;
  let travelled = 0;
  function let_go() {
    bible_dream_stroke_hand_lift(active);
    active = null;
    latched = false;
  }
  function readout_show() {
    let text = bible_dream_trace_status_text(states, told);
    html_text_set(readout, text);
  }
  function on_press(event) {
    let at = bible_dream_drawing_point(drawing, event);
    if (latched) {
      let_go();
      return;
    }
    pressed_at = at;
    travelled = 0;
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
    if (not(latched)) {
      if (equal(event.buttons, 0)) {
        let_go();
        return;
      }
      let gone = bible_dream_point_gap_squared(at, pressed_at);
      if (greater_than(gone, travelled)) {
        travelled = gone;
      }
    }
    bible_dream_stroke_hand_step(active, at);
    if (active.done) {
      bible_dream_stroke_finish_told(active, told);
      let_go();
    }
    readout_show();
  }
  function on_release(event) {
    if (not(active)) {
      return;
    }
    let still = bible_dream_click_still_far();
    let still_squared = multiply(still, still);
    if (less_than(travelled, still_squared)) {
      latched = true;
      return;
    }
    let_go();
  }
  function on_leave(event) {
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
