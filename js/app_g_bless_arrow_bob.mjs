import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_rotate_degrees_set } from "./html_style_rotate_degrees_set.mjs";
import { app_g_bless_arrow_keyframe } from "./app_g_bless_arrow_keyframe.mjs";
import { app_g_bless_arrow_animation_name } from "./app_g_bless_arrow_animation_name.mjs";
import { html_style_animation_alternate_apply } from "./html_style_animation_alternate_apply.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_arrow_svg } from "./app_shared_arrow_svg.mjs";
export function app_g_bless_arrow_bob(parent, degrees) {
  arguments_assert(arguments, 2);
  ("One nodding arrow, aimed so many degrees clockwise from due east, hung inside whatever is handed in - and the wrapper that holds its AIM is what comes back, so a caller who has to re-aim it later has the one element to turn.");
  ("Two wrappers around one drawing, and the split is the whole point. The outer one is turned and nothing else; the inner one nods and nothing else. An element has a single transform, so a thing that both turns and moves has to write both into one text in the right order - and every re-aiming would then have to rebuild the movement too, which restarts it. Split, the aim can change on every step of the game while the nod carries straight on.");
  ("The drawing itself is asked for pointing due east, because east is what the aim is measured from. Asking for it already turned and then turning its wrapper as well would add the two together and point the arrow at nothing in particular.");
  ("Both wrappers shrink to the arrow rather than filling what holds them, so the turn happens about the arrow's own middle and the nod is measured against the arrow's own width. Left to fill their parent, an arrow would swing around a point somewhere out on the grass.");
  ("Both wrappers are told to keep NO line height. An inline-block box sits on a text");
  ("baseline, and the browser leaves a strip of room under that baseline for the tails of");
  ("letters which are not there. The strip belongs to the box, so the middle of the box is");
  ("lower than the middle of the arrow - and turning the box a quarter turn to aim it down");
  ("swings that difference round to the side. It read as a drawing that had been centred");
  ("badly, which it had not been; it was the empty room underneath it being turned.");
  let spin = html_div(parent);
  html_style_assign(spin, {
    display: "inline-block",
    "line-height": "0",
  });
  html_style_rotate_degrees_set(spin, degrees);
  let bob = html_div(spin);
  html_style_assign(bob, {
    display: "inline-block",
    "line-height": "0",
  });
  let keyframe = app_g_bless_arrow_keyframe();
  let name_animation = app_g_bless_arrow_animation_name();
  html_style_animation_alternate_apply(bob, keyframe, name_animation);
  let text = app_shared_arrow_svg(0);
  html_text_set(bob, text);
  return spin;
}
