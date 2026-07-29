import { fn_name } from "./fn_name.mjs";
import { html_style_head } from "./html_style_head.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_glow_correct_apply(element, keyframe) {
  ("register the gold→white 'correct answer' pulse keyframe in the document head, then animate the element with it; the keyframe carries the glow size so callers can differ (",
    fn_name("app_g"),
    " big, ",
    fn_name("app_code"),
    " small) while sharing this structure");
  html_style_head(keyframe);
  html_style_set(element, "animation", "correctPulse 1s infinite alternate");
}
