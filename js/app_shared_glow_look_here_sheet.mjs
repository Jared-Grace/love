import { app_shared_glow_look_here_class } from "./app_shared_glow_look_here_class.mjs";
import { app_shared_glow_look_here_class_on } from "./app_shared_glow_look_here_class_on.mjs";
import { app_shared_glow_look_here_keyframe } from "./app_shared_glow_look_here_keyframe.mjs";
import { app_shared_glow_look_here_animation_name } from "./app_shared_glow_look_here_animation_name.mjs";
export function app_shared_glow_look_here_sheet() {
  "the stylesheet that lets the look-here pulse fade in and out rather than jump, and sit behind the things around it rather than over them";
  "The pulse is drawn on a layer of its own BEHIND the element, not on the element. Drawn on the element, a row of glowing tiles each threw its light over the next tile along, so the symbols a player was being asked to read were the ones the light covered. Behind, the light shows only in the gaps.";
  "The layer is always pulsing and only its opacity is switched. An animation cannot be eased on or off - it starts at full strength and stops dead - but opacity can be, so choosing a rule brings the light up and unchoosing it lets the light go down.";
  let name_class = app_shared_glow_look_here_class();
  let name_on = app_shared_glow_look_here_class_on();
  let keyframe = app_shared_glow_look_here_keyframe();
  let name_animation = app_shared_glow_look_here_animation_name();
  let sheet = `${keyframe} .${name_class} { position: relative; } .${name_class}::before { content: ""; position: absolute; inset: 0; border-radius: inherit; z-index: -1; pointer-events: none; opacity: 0; transition: opacity 0.4s ease-in-out; animation: ${name_animation} 1s infinite alternate; } .${name_on}::before { opacity: 1; }`;
  return sheet;
}
