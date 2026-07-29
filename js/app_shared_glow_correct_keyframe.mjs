import { fn_name } from "./fn_name.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
export function app_shared_glow_correct_keyframe() {
  ("the gold→white 'correct answer' pulse keyframe, shared by ",
    fn_name("app_g"),
    "'s pray-for-discernment glow and ",
    fn_name("app_code"),
    "'s correct-answer highlight");
  let gold = app_shared_color_gold_glow();
  let keyframe = `@keyframes correctPulse { 0% { box-shadow: 0 0 0.8em 0.3em ${gold}; } 100% { box-shadow: 0 0 1.6em 0.7em #ffffff; } }`;
  return keyframe;
}
