import { app_shared_glow_correct_keyframe } from "./app_shared_glow_correct_keyframe.mjs";
import { app_shared_glow_correct_apply } from "./app_shared_glow_correct_apply.mjs";
export function app_shared_glow_correct(element) {
  "make an element pulse with the gold→white 'correct answer' glow — the same effect app_g shows on the right choice when you pray for discernment";
  app_shared_glow_correct_apply(element, app_shared_glow_correct_keyframe());
}
