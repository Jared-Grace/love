import { app_shared_color_brand_blue } from "./app_shared_color_brand_blue.mjs";
import { app_shared_glow_shadow } from "./app_shared_glow_shadow.mjs";
import { app_shared_glow_look_here_layer_keyframe } from "./app_shared_glow_look_here_layer_keyframe.mjs";
import { app_shared_glow_look_here_layer_animation_name } from "./app_shared_glow_look_here_layer_animation_name.mjs";
import { app_shared_glow_look_here_class } from "./app_shared_glow_look_here_class.mjs";
import { app_shared_glow_look_here_class_on } from "./app_shared_glow_look_here_class_on.mjs";
export function app_shared_glow_look_here_sheet() {
  "the stylesheet that lets the look-here pulse fade in and out rather than jump, and sit behind the things around it rather than over them";
  "The pulse is drawn on a layer of its own BEHIND the element, not on the element. Drawn on the element, a row of glowing tiles each threw its light over the next tile along, so the symbols a player was being asked to read were the ones the light covered. Behind, the light shows only in the gaps.";
  "The layer pulses only while lit, and the pulse starts from no light at all, so each time something is chosen its light begins its own cycle from dark rather than joining one already half way through. Going dark is a transition from wherever the pulse had got to, so the light goes down rather than vanishing.";
  "Whatever holds a lit element is made a layer of its own, so the light sits over the background of that holder and under every element in it. Without that, a card with a colour of its own would be drawn over the light and hide it.";
  "Coming on waits as long as going off takes, so when the ask moves from one thing to another the old light goes all the way out before the new one starts to rise - one light at a time, never two half-lit. The wait holds the first frame, which is dark, so a page that has just loaded shows no light until its own cycle begins.";
  let name_class = app_shared_glow_look_here_class();
  let name_on = app_shared_glow_look_here_class_on();
  let keyframe = app_shared_glow_look_here_layer_keyframe();
  let name_animation = app_shared_glow_look_here_layer_animation_name();
  let color = app_shared_color_brand_blue();
  let rest = app_shared_glow_shadow(color);
  let sheet = `${keyframe} :has(> .${name_class}) { isolation: isolate; } .${name_class} { position: relative; } .${name_class}::before { content: ""; position: absolute; inset: 0; border-radius: inherit; z-index: -1; pointer-events: none; opacity: 0; box-shadow: ${rest}; transition: opacity 0.4s ease-in-out; } .${name_on}::before { animation: ${name_animation} 1s ease-in-out 0.4s infinite alternate backwards; }`;
  return sheet;
}
