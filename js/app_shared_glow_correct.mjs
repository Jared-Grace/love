import { html_style_head } from "./html_style_head.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_glow_correct_keyframe } from "./app_shared_glow_correct_keyframe.mjs";
export function app_shared_glow_correct(element) {
  "make an element pulse with the gold→white 'correct answer' glow — the same effect app_g shows on the right choice when you pray for discernment";
  html_style_head(app_shared_glow_correct_keyframe());
  html_style_set(element, "animation", "correctPulse 1s infinite alternate");
}
