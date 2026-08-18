import { fn_name } from "./fn_name.mjs";
import { app_shared_glow_correct_animation_name } from "./app_shared_glow_correct_animation_name.mjs";
import { app_shared_glow_name_apply } from "./app_shared_glow_name_apply.mjs";
export function app_shared_glow_correct_apply(element, keyframe) {
  ("register the gold correct-answer pulse keyframe in the document head, then animate the element with it; the keyframe carries the glow size so callers can differ (",
    fn_name("app_g"),
    " big, ",
    fn_name("app_code"),
    " small) while sharing this structure");
  ("The head-and-element pair is done by the unit every glow uses, and all this one adds is which name the gold one answers to.");
  let name_animation = app_shared_glow_correct_animation_name();
  app_shared_glow_name_apply(element, keyframe, name_animation);
}
