import { app_shared_color_brand_blue } from "./app_shared_color_brand_blue.mjs";
import { app_shared_glow_keyframe_generic } from "./app_shared_glow_keyframe_generic.mjs";
import { app_shared_glow_look_here_animation_name } from "./app_shared_glow_look_here_animation_name.mjs";
export function app_shared_glow_look_here_keyframe() {
  "the blue look-here pulse keyframe: what the page glows round the thing a learner is being asked to attend to next";
  "Blue rather than gold, because gold is what this app says right answer in and this is not a verdict on anything. A learner who pressed in the wrong place has been told nothing about whether they were right - they are only being shown where the question they are answering actually is.";
  "Blue rather than red for the same reason from the other side: red is refusal, and nothing here is being refused. The press was simply made somewhere the page had stopped asking.";
  "The brand blue, which is the blue the block being worked out already wears. That is the point of choosing it: the question waiting below belongs to that block, so the glow says the two are one thing rather than introducing a colour the learner has to work out the meaning of.";
  let color = app_shared_color_brand_blue();
  let name_animation = app_shared_glow_look_here_animation_name();
  let keyframe = app_shared_glow_keyframe_generic(name_animation, color);
  return keyframe;
}
