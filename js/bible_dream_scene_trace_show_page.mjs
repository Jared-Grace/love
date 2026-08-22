import { arguments_assert } from "./arguments_assert.mjs";
import { bible_dream_scene_words_show } from "./bible_dream_scene_words_show.mjs";
import { bible_dream_scene_drawing_add } from "./bible_dream_scene_drawing_add.mjs";
import { bible_dream_stroke_place } from "./bible_dream_stroke_place.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { bible_dream_scene_trace_hand_watch } from "./bible_dream_scene_trace_hand_watch.mjs";
import { property_get } from "./property_get.mjs";
export function bible_dream_scene_trace_show_page(root, scene) {
  "The whole of a dream's page laid out - the words of it, the surface it is drawn on, and every stroke the passage gave placed faint upon that surface - handed back with the surface and the four watchers of the hand that the page still has to be told to listen with.";
  "THE PLACING OF THE STROKES IS THE REASON THIS IS A STEP OF ITS OWN. Each stroke put down answers with the thing that remembers how much of it has been traced, and the watchers of the hand cannot be made until every one of those exists - so the laying out and the watching are two steps in a fixed order rather than one long one.";
  "IT LISTENS TO NOTHING ITSELF. Handing the watchers back rather than hanging them on the surface leaves the one line that says which movement of a pointer means which of them where a reader can see all four at once.";
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
  let r = bible_dream_scene_trace_hand_watch(states, told, readout, drawing);
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
