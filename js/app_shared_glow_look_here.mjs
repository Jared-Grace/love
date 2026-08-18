import { app_shared_glow_look_here_animation_name } from "./app_shared_glow_look_here_animation_name.mjs";
import { app_shared_glow_look_here_keyframe } from "./app_shared_glow_look_here_keyframe.mjs";
import { app_shared_glow_name_apply } from "./app_shared_glow_name_apply.mjs";
export function app_shared_glow_look_here(element) {
  ("make an element pulse blue, to say the thing being waited on is here");
  ("For the moment a learner acts somewhere the page has stopped answering. A press that does nothing at all tells them the screen is broken; the same press answered by the real question lighting up tells them where to go, and costs them nothing but the glance.");
  ("It pulses on rather than flashing once, because a learner who pressed in the wrong place is by definition looking somewhere else - a single flash is over before their eye arrives. It ends when the question does, because the thing it is drawn round goes with it.");
  let keyframe = app_shared_glow_look_here_keyframe();
  let name_animation = app_shared_glow_look_here_animation_name();
  app_shared_glow_name_apply(element, keyframe, name_animation);
}
