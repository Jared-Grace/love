import { html_style_head } from "./html_style_head.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_glow_correct(element) {
  "the gold→white 'correct answer' glow sized for app_code's tightly-stacked choice buttons — smaller than app_g's (whose buttons are larger) so it does not heavily bleed onto the neighbors";
  let keyframe =
    "@keyframes correctPulse { 0% { box-shadow: 0 0 0.5em 0.15em #ffd633; } 100% { box-shadow: 0 0 1em 0.35em #ffffff; } }";
  html_style_head(keyframe);
  html_style_set(element, "animation", "correctPulse 1s infinite alternate");
}
