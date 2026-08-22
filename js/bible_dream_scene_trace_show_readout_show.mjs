import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_scene_words_show } from "./bible_dream_scene_words_show.mjs";
import { bible_dream_scene_drawing_add } from "./bible_dream_scene_drawing_add.mjs";
import { bible_dream_stroke_place } from "./bible_dream_stroke_place.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { bible_dream_scene_trace_show_on_leave } from "./bible_dream_scene_trace_show_on_leave.mjs";
import { property_get } from "./property_get.mjs";
export function bible_dream_scene_trace_show_readout_show(root, scene) {
  arguments_assert(arguments, 2);
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
  let r2 = {
    drawing,
    on_leave,
    on_release,
    on_drag,
    on_press,
    readout_show,
  };
  return r2;
}
