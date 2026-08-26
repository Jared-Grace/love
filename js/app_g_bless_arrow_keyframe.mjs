import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_bless_arrow_animation_name } from "./app_g_bless_arrow_animation_name.mjs";
export function app_g_bless_arrow_keyframe() {
  arguments_assert(arguments, 0);
  ("The nod the prayer game's arrows keep up: a small slide back and forth ALONG the way the arrow is pointing.");
  ("Along its own direction and not up and down, which is what makes one keyframe serve every arrow in the game however it is aimed. The movement is written inside a wrapper that has already been turned, so a slide to the right there is a slide the way the arrow points wherever the arrow points - an arrow over somebody's head nods down at them, and an arrow at the edge of the screen strains off towards whoever is out there.");
  ("It MOVES because that is the whole of what it is for. A person already prayed for wears a still gold light; somebody still to pray for wears this. A crowd of still marks has to be read one at a time, and the eye picks a moving thing out of a still crowd without being asked to look.");
  ("Measured as a fraction of the arrow's own width rather than in fixed units, so the nod stays the same size relative to the arrow on a phone and on a desk.");
  let name_animation = app_g_bless_arrow_animation_name();
  let keyframe = `@keyframes ${name_animation} { 0% { transform: translateX(-16%); } 100% { transform: translateX(16%); } }`;
  return keyframe;
}
