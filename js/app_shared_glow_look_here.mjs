import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { app_shared_glow_look_here_animation_name } from "./app_shared_glow_look_here_animation_name.mjs";
import { app_shared_glow_look_here_keyframe } from "./app_shared_glow_look_here_keyframe.mjs";
import { app_shared_glow_name_apply } from "./app_shared_glow_name_apply.mjs";
export function app_shared_glow_look_here(element) {
  "make an element pulse blue, to say the thing being waited on is here";
  "For the moment a learner acts somewhere the page has stopped answering. A press that does nothing at all tells them the screen is broken; the same press answered by the real question lighting up tells them where to go, and costs them nothing but the glance.";
  "It pulses on rather than flashing once, because a learner who pressed in the wrong place is by definition looking somewhere else - a single flash is over before their eye arrives. It ends when the question does, because the thing it is drawn round goes with it.";
  "The corners are taken off before it is lit. A glow is a shadow thrown outside the box, so it wears whatever shape the box has, and the thing this one is thrown round is a plain holder that was never given a shape of its own. Left square, the light stands out in four corners where nothing inside it reaches, and it reads as a box drawn around the question rather than as the question lighting up.";
  "Rounded from the one radius the rest of the screen is rounded from, so the light round the question is the same shape as everything a learner has been pressing.";
  "It costs the holder nothing to wear when the glow is over: it has no fill and no edge, so a radius on it can only ever be seen by something drawn round its outside.";
  let border_radius = app_shared_border_radius();
  html_border_radius(element, border_radius);
  let keyframe = app_shared_glow_look_here_keyframe();
  let name_animation = app_shared_glow_look_here_animation_name();
  app_shared_glow_name_apply(element, keyframe, name_animation);
}
