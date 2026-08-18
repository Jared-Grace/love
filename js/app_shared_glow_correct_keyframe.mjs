import { fn_name } from "./fn_name.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
import { app_shared_glow_correct_animation_name } from "./app_shared_glow_correct_animation_name.mjs";
import { app_shared_glow_keyframe_generic } from "./app_shared_glow_keyframe_generic.mjs";
export function app_shared_glow_correct_keyframe() {
  ("the gold correct-answer pulse keyframe, shared by ",
    fn_name("app_g"),
    "'s pray-for-discernment glow and ",
    fn_name("app_code"),
    "'s correct-answer highlight");
  ("Nothing but a colour and a name now. The pulse itself is written once for every glow on the page, so this one and the blue look-here one are the same movement in two colours - which is what lets a learner read the colour as the whole of the difference between them.");
  let gold = app_shared_color_gold_glow();
  let name_animation = app_shared_glow_correct_animation_name();
  let keyframe = app_shared_glow_keyframe_generic(name_animation, gold);
  return keyframe;
}
